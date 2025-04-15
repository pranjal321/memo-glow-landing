
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import PhotoGrid from "@/components/photos/PhotoGrid";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Photos() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Photo Gallery | Photo Sharing";
  }, []);
  
  return (
    <div className="min-h-screen">
      <FadeIn>
        <div className="bg-gradient-to-b from-purple-50 to-white pt-8 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Browse, share, and vote on photos uploaded by our community.
              {!user && " Sign in to upload your own photos and vote!"}
            </p>
            
            {!user && (
              <Button 
                className="mt-6"
                onClick={() => navigate("/auth")}
              >
                Sign In to Participate
              </Button>
            )}
          </div>
        </div>
        
        <PhotoGrid />
      </FadeIn>
    </div>
  );
}
