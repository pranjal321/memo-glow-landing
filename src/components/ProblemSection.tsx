
import { FadeIn, ScaleIn } from "./ui/motion";
import { Activity, AlertCircle, Clock } from "lucide-react";

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-center mb-4">The Challenge of <span className="heading-gradient">Dementia Care</span></h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Dementia affects millions globally, creating significant challenges for both patients and caregivers. Early detection and consistent monitoring remain critical yet difficult aspects of care.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ScaleIn delay={0.3} className="card-highlight">
            <div className="mb-6 w-12 h-12 rounded-full bg-memotag-softPurple flex items-center justify-center">
              <AlertCircle className="text-memotag-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">55 Million</h3>
            <p className="text-gray-600">
              People worldwide are living with dementia, with nearly 10 million new cases every year.
            </p>
          </ScaleIn>
          
          <ScaleIn delay={0.4} className="card-highlight">
            <div className="mb-6 w-12 h-12 rounded-full bg-memotag-softPurple flex items-center justify-center">
              <Clock className="text-memotag-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">4.5 Years</h3>
            <p className="text-gray-600">
              Average delay between symptom onset and diagnosis, limiting treatment effectiveness.
            </p>
          </ScaleIn>
          
          <ScaleIn delay={0.5} className="card-highlight">
            <div className="mb-6 w-12 h-12 rounded-full bg-memotag-softPurple flex items-center justify-center">
              <Activity className="text-memotag-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">70%</h3>
            <p className="text-gray-600">
              Of caregivers report significant emotional and physical stress related to providing care.
            </p>
          </ScaleIn>
        </div>
        
        <div className="bg-memotag-softGray rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-semibold mb-4">Current Solutions Are Falling Short</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-memotag-softPink text-red-500 flex items-center justify-center mr-3 mt-0.5">✕</span>
                    <span>Traditional cognitive assessments are infrequent and often miss early signs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-memotag-softPink text-red-500 flex items-center justify-center mr-3 mt-0.5">✕</span>
                    <span>Caregivers lack objective tools to track changes in condition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-memotag-softPink text-red-500 flex items-center justify-center mr-3 mt-0.5">✕</span>
                    <span>No unified system to monitor both physical and cognitive patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-memotag-softPink text-red-500 flex items-center justify-center mr-3 mt-0.5">✕</span>
                    <span>Limited personalization for individual needs and behaviors</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
            <div className="relative h-full min-h-[300px]">
              <FadeIn className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Caregiver with patient" 
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-memotag-purple/30 to-transparent"></div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
