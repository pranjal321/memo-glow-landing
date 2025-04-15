
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AuthForm from "@/components/auth/AuthForm";
import { FadeIn } from "@/components/ui/motion";

export default function Auth() {
  const { user, loading } = useAuth();
  
  useEffect(() => {
    document.title = "Sign In | Photo Sharing";
  }, []);
  
  // Redirect if user is already logged in
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (user) {
    return <Navigate to="/photos" replace />;
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-white">
      <FadeIn>
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold heading-gradient mb-2">
              Welcome to Photo Sharing
            </h1>
            <p className="text-gray-600">
              Sign in or create an account to start sharing your photos
            </p>
          </div>
          
          <AuthForm />
        </div>
      </FadeIn>
    </div>
  );
}
