
import { Button } from "@/components/ui/button";
import { Brain, HeartPulse, Star } from "lucide-react";
import { FadeIn, SlideIn } from "./ui/motion";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-memotag-softPurple/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SlideIn delay={0.1}>
              <span className="inline-block px-4 py-2 rounded-full bg-memotag-softPurple text-memotag-deepPurple font-medium mb-6">
                AI-Powered Dementia Care
              </span>
            </SlideIn>
            
            <FadeIn delay={0.3}>
              <h1 className="mb-6">
                <span className="heading-gradient">Preserving Memories,</span>
                <br /> Empowering Lives
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                MemoTag uses advanced AI technology to help track, assist, and improve quality of life for people with dementia and their caregivers.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary"
                onClick={scrollToContact}
              >
                Join the Waitlist
              </Button>
              
              <Button 
                variant="outline" 
                className="border-memotag-purple text-memotag-purple hover:bg-memotag-softPurple"
                onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn How It Works
              </Button>
            </FadeIn>
            
            <FadeIn delay={0.9} className="mt-12">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-memotag-purple/10 flex items-center justify-center">
                    <Brain className="text-memotag-purple h-5 w-5" />
                  </div>
                  <span className="font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-memotag-purple/10 flex items-center justify-center">
                    <HeartPulse className="text-memotag-purple h-5 w-5" />
                  </div>
                  <span className="font-medium">Clinically Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-memotag-purple/10 flex items-center justify-center">
                    <Star className="text-memotag-purple h-5 w-5" />
                  </div>
                  <span className="font-medium">5-Star Rated</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-memotag-purple/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1579208030886-b937da9dc7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Elderly couple using MemoTag"
                className="rounded-2xl object-cover w-full h-full relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="text-sm font-medium text-gray-800">Trusted by</div>
                <div className="text-xl font-bold text-memotag-purple">2,000+</div>
                <div className="text-sm text-gray-600">Caregivers</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
