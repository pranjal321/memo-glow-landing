
import { User } from "@supabase/supabase-js";
import { PhotoWithVotes } from "@/types/photos";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Trash2 } from "lucide-react";

interface PhotoItemProps {
  photo: PhotoWithVotes;
  currentUser: User | null;
  onVote: (photoId: string, voteType: 'like' | 'dislike') => Promise<void>;
  onDelete: (photoId: string) => Promise<void>;
}

export default function PhotoItem({ photo, currentUser, onVote, onDelete }: PhotoItemProps) {
  const isOwner = currentUser?.id === photo.user_id;
  const userHasLiked = photo.userVote === 'like';
  const userHasDisliked = photo.userVote === 'dislike';
  
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-64 overflow-hidden bg-gray-100">
        <img 
          src={photo.photo_url} 
          alt="User photo" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {new Date(photo.uploaded_at).toLocaleDateString()}
          </span>
          {isOwner && <span className="text-blue-500 font-medium">Your photo</span>}
        </div>
      </CardContent>
      
      <CardFooter className="border-t mt-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={userHasLiked ? "text-green-600" : ""}
              disabled={!currentUser}
              onClick={() => onVote(photo.id, 'like')}
            >
              <ThumbsUp className="mr-1 h-4 w-4" /> {photo.likes}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className={userHasDisliked ? "text-red-600" : ""}
              disabled={!currentUser}
              onClick={() => onVote(photo.id, 'dislike')}
            >
              <ThumbsDown className="mr-1 h-4 w-4" /> {photo.dislikes}
            </Button>
          </div>
          
          {isOwner && (
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => onDelete(photo.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
