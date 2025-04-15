
import { supabase } from '@/integrations/supabase/client';
import { Photo, Vote } from '@/types/photos';
import { toast } from '@/hooks/use-toast';

export const photoService = {
  // Get all photos with likes/dislikes count
  async getPhotos(sortBy: 'likes' | 'date' = 'date') {
    try {
      // Get all photos
      const { data: photos, error: photosError } = await supabase
        .from('photos')
        .select('*')
        .order(sortBy === 'date' ? 'uploaded_at' : 'id', { ascending: false });

      if (photosError) throw photosError;
      
      // Get all votes
      const { data: votes, error: votesError } = await supabase
        .from('votes')
        .select('*');

      if (votesError) throw votesError;

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      // Process photos with votes
      const processedPhotos = photos.map((photo: Photo) => {
        const photoVotes = votes.filter((vote: Vote) => vote.photo_id === photo.id);
        const likes = photoVotes.filter((vote: Vote) => vote.vote_type === 'like').length;
        const dislikes = photoVotes.filter((vote: Vote) => vote.vote_type === 'dislike').length;
        const userVote = user 
          ? photoVotes.find((vote: Vote) => vote.user_id === user.id)?.vote_type || null 
          : null;
        
        return { ...photo, likes, dislikes, userVote };
      });
      
      // Sort by likes if needed
      if (sortBy === 'likes') {
        processedPhotos.sort((a, b) => b.likes - a.likes);
      }
      
      return { photos: processedPhotos };
    } catch (error: any) {
      toast({
        title: "Error fetching photos",
        description: error.message,
        variant: "destructive"
      });
      return { photos: [] };
    }
  },
  
  // Upload photo
  async uploadPhoto(file: File) {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("You must be logged in to upload photos");
      
      // Check if user has already uploaded 5 photos
      const { data: userPhotos, error: countError } = await supabase
        .from('photos')
        .select('id')
        .eq('user_id', user.id);
        
      if (countError) throw countError;
      
      if (userPhotos.length >= 5) {
        throw new Error("You have reached the maximum limit of 5 photos");
      }
      
      // Upload to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(filePath, file);
        
      if (uploadError) throw uploadError;
      
      // Get public URL
      const { data: publicURL } = supabase.storage
        .from('photos')
        .getPublicUrl(filePath);
        
      if (!publicURL) throw new Error("Failed to get public URL");
      
      // Save to database
      const { error: dbError } = await supabase
        .from('photos')
        .insert({
          user_id: user.id,
          photo_url: publicURL.publicUrl
        });
        
      if (dbError) throw dbError;
      
      toast({
        title: "Photo uploaded",
        description: "Your photo has been uploaded successfully"
      });
      
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
      return { success: false, error: error.message };
    }
  },
  
  // Delete photo
  async deletePhoto(photoId: string) {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("You must be logged in to delete photos");
      
      // Get photo info first to delete from storage
      const { data: photo, error: getError } = await supabase
        .from('photos')
        .select('*')
        .eq('id', photoId)
        .single();
        
      if (getError) throw getError;
      
      // Check if user owns this photo
      if (photo.user_id !== user.id) {
        throw new Error("You can only delete your own photos");
      }
      
      // Extract storage path from URL
      const urlParts = photo.photo_url.split('/');
      const storagePath = `${user.id}/${urlParts[urlParts.length - 1]}`;
      
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('photos')
        .remove([storagePath]);
        
      if (storageError) throw storageError;
      
      // Delete from database
      const { error: dbError } = await supabase
        .from('photos')
        .delete()
        .eq('id', photoId);
        
      if (dbError) throw dbError;
      
      toast({
        title: "Photo deleted",
        description: "Your photo has been deleted successfully"
      });
      
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Delete failed",
        description: error.message,
        variant: "destructive"
      });
      return { success: false, error: error.message };
    }
  },
  
  // Vote (like/dislike)
  async votePhoto(photoId: string, voteType: 'like' | 'dislike') {
    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("You must be logged in to vote");
      
      // Check if user already voted
      const { data: existingVote, error: checkError } = await supabase
        .from('votes')
        .select('*')
        .eq('photo_id', photoId)
        .eq('user_id', user.id)
        .maybeSingle();
        
      if (checkError) throw checkError;
      
      if (existingVote) {
        // If same vote type, remove the vote (toggle off)
        if (existingVote.vote_type === voteType) {
          const { error: deleteError } = await supabase
            .from('votes')
            .delete()
            .eq('id', existingVote.id);
            
          if (deleteError) throw deleteError;
          
          toast({
            title: "Vote removed",
            description: `Your ${voteType} has been removed`
          });
        } else {
          // If different vote type, update the vote
          const { error: updateError } = await supabase
            .from('votes')
            .update({ vote_type: voteType })
            .eq('id', existingVote.id);
            
          if (updateError) throw updateError;
          
          toast({
            title: "Vote updated",
            description: `Your vote has been changed to ${voteType}`
          });
        }
      } else {
        // Create new vote
        const { error: insertError } = await supabase
          .from('votes')
          .insert({
            user_id: user.id,
            photo_id: photoId,
            vote_type: voteType
          });
          
        if (insertError) throw insertError;
        
        toast({
          title: "Vote recorded",
          description: `Your ${voteType} has been recorded`
        });
      }
      
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Vote failed",
        description: error.message,
        variant: "destructive"
      });
      return { success: false, error: error.message };
    }
  }
};
