
import { FadeIn, ScaleIn } from "./ui/motion";
import { Activity, Brain, CheckCircle2, ClipboardList, Heart, Shield } from "lucide-react";

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-memotag-softPurple/10">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-center mb-4">How <span className="heading-gradient">MemoTag</span> Works</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Our AI-powered platform provides continuous monitoring, early detection, and personalized care
            guidance for individuals with dementia and their caregivers.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6">Comprehensive Tracking & Analysis</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <Brain className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Cognitive Assessment</h4>
                    <p className="text-gray-600">
                      Continuous monitoring of memory, language, and problem-solving abilities through 
                      non-intrusive digital interactions and speech analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <Activity className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Physical Monitoring</h4>
                    <p className="text-gray-600">
                      Smart sensors track movement, sleep patterns, and daily routines to identify 
                      changes that may indicate cognitive decline.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <Heart className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Emotional Well-being</h4>
                    <p className="text-gray-600">
                      Our AI evaluates emotional responses and stress levels to ensure 
                      comprehensive care for both patients and caregivers.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <ScaleIn delay={0.4} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-memotag-purple/20 rounded-full blur-3xl transform translate-x-10"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MemoTag Platform Interface"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </ScaleIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScaleIn delay={0.4}>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-memotag-purple/20 rounded-full blur-3xl transform -translate-x-10"></div>
              <img
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MemoTag in action"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </ScaleIn>
          
          <div>
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6">Personalized Care & Support</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <Shield className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Early Detection</h4>
                    <p className="text-gray-600">
                      Identify subtle cognitive changes up to 18 months earlier than traditional 
                      methods, enabling earlier intervention.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <ClipboardList className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Care Recommendations</h4>
                    <p className="text-gray-600">
                      AI-generated care plans based on personal data and research-backed best practices 
                      in dementia management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-memotag-purple/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-memotag-purple h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Caregiver Support</h4>
                    <p className="text-gray-600">
                      Tools and resources to help caregivers manage stress, track progress, 
                      and coordinate care efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn className="bg-white rounded-xl p-8 shadow-lg border border-memotag-softPurple/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-3">The MemoTag Difference</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with compassionate care design 
              to create a solution that truly understands dementia's unique challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-memotag-softPurple flex items-center justify-center mx-auto mb-4">
                <Brain className="text-memotag-purple h-8 w-8" />
              </div>
              <h4 className="font-medium mb-2">AI-Powered</h4>
              <p className="text-sm text-gray-600">
                Advanced machine learning algorithms that improve with every interaction
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-memotag-softPurple flex items-center justify-center mx-auto mb-4">
                <Shield className="text-memotag-purple h-8 w-8" />
              </div>
              <h4 className="font-medium mb-2">Non-Intrusive</h4>
              <p className="text-sm text-gray-600">
                Designed to blend seamlessly into daily life without disruption
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-memotag-softPurple flex items-center justify-center mx-auto mb-4">
                <Heart className="text-memotag-purple h-8 w-8" />
              </div>
              <h4 className="font-medium mb-2">Holistic Care</h4>
              <p className="text-sm text-gray-600">
                Addresses physical, cognitive, and emotional aspects of dementia care
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SolutionSection;
