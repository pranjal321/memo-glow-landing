
import { useState, useEffect } from "react";
import { PhotoWithVotes, SortOption } from "@/types/photos";
import { photoService } from "@/services/photoService";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PhotoItem from "@/components/photos/PhotoItem";
import PhotoUpload from "@/components/photos/PhotoUpload";
import { ScaleIn } from "@/components/ui/motion";

export default function PhotoGrid() {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<PhotoWithVotes[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>("date");
  const [userPhotoCount, setUserPhotoCount] = useState(0);
  
  const fetchPhotos = async () => {
    setLoading(true);
    const { photos: fetchedPhotos } = await photoService.getPhotos(sortOption);
    setPhotos(fetchedPhotos);
    
    if (user) {
      const userPhotos = fetchedPhotos.filter(photo => photo.user_id === user.id);
      setUserPhotoCount(userPhotos.length);
    }
    
    setLoading(false);
  };
  
  useEffect(() => {
    fetchPhotos();
  }, [sortOption, user]);
  
  const handleVote = async (photoId: string, voteType: 'like' | 'dislike') => {
    await photoService.votePhoto(photoId, voteType);
    fetchPhotos();
  };
  
  const handleDelete = async (photoId: string) => {
    const { success } = await photoService.deletePhoto(photoId);
    if (success) {
      fetchPhotos();
    }
  };
  
  const handleUploadSuccess = () => {
    fetchPhotos();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold">Photo Gallery</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-48">
            <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Latest Uploads</SelectItem>
                <SelectItem value="likes">Most Likes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {user && userPhotoCount < 5 && (
            <PhotoUpload onUploadSuccess={handleUploadSuccess} />
          )}
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading photos...</p>
        </div>
      ) : photos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No photos available.</p>
          {user && (
            <p className="mt-2">Share your first photo!</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <ScaleIn key={photo.id} delay={index * 0.1}>
              <PhotoItem
                photo={photo}
                currentUser={user}
                onVote={handleVote}
                onDelete={handleDelete}
              />
            </ScaleIn>
          ))}
        </div>
      )}
    </div>
  );
}
