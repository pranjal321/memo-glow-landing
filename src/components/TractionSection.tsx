
import { FadeIn, ScaleIn } from "./ui/motion";
import { Check } from "lucide-react";

const TractionSection: React.FC = () => {
  const testimonials = [
    {
      quote: "MemoTag has given us peace of mind. We can now track mom's patterns and get ahead of potential issues before they become serious.",
      author: "Sarah J.",
      role: "Family Caregiver"
    },
    {
      quote: "As a neurologist, I've recommended MemoTag to several patients. The data it provides has been invaluable for adjusting treatment plans.",
      author: "Dr. Michael Chen",
      role: "Neurologist"
    },
    {
      quote: "The early detection feature alerted us to changes we hadn't noticed. We were able to adjust medications much earlier than we would have otherwise.",
      author: "Robert T.",
      role: "Son of Patient"
    }
  ];

  return (
    <section id="traction" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-center mb-4">Our <span className="heading-gradient">Impact</span></h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            MemoTag is transforming dementia care, creating real-world impact for patients, 
            caregivers, and healthcare providers.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <ScaleIn delay={0.2} className="text-center p-6 rounded-xl border border-memotag-softPurple bg-white">
            <div className="text-4xl font-bold text-memotag-purple mb-2">2,000+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </ScaleIn>
          
          <ScaleIn delay={0.3} className="text-center p-6 rounded-xl border border-memotag-softPurple bg-white">
            <div className="text-4xl font-bold text-memotag-purple mb-2">85%</div>
            <div className="text-sm text-gray-600">Earlier Detection Rate</div>
          </ScaleIn>
          
          <ScaleIn delay={0.4} className="text-center p-6 rounded-xl border border-memotag-softPurple bg-white">
            <div className="text-4xl font-bold text-memotag-purple mb-2">12</div>
            <div className="text-sm text-gray-600">Clinical Partnerships</div>
          </ScaleIn>
          
          <ScaleIn delay={0.5} className="text-center p-6 rounded-xl border border-memotag-softPurple bg-white">
            <div className="text-4xl font-bold text-memotag-purple mb-2">93%</div>
            <div className="text-sm text-gray-600">Caregiver Satisfaction</div>
          </ScaleIn>
        </div>
        
        <div className="mb-20">
          <FadeIn delay={0.2} className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-2">Trusted By Leading Care Providers</h3>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <ScaleIn delay={0.3} className="grayscale hover:grayscale-0 transition-all">
              <div className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-600">MediCare</span>
              </div>
            </ScaleIn>
            
            <ScaleIn delay={0.4} className="grayscale hover:grayscale-0 transition-all">
              <div className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-600">NeuroHealth</span>
              </div>
            </ScaleIn>
            
            <ScaleIn delay={0.5} className="grayscale hover:grayscale-0 transition-all">
              <div className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-600">CarePoint</span>
              </div>
            </ScaleIn>
            
            <ScaleIn delay={0.6} className="grayscale hover:grayscale-0 transition-all">
              <div className="bg-gray-100 h-16 w-32 rounded flex items-center justify-center">
                <span className="font-semibold text-gray-600">ElderWise</span>
              </div>
            </ScaleIn>
          </div>
        </div>
        
        <div>
          <FadeIn delay={0.2} className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-2">What People Are Saying</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={0.3 + index * 0.1} className="bg-white p-6 rounded-xl shadow-md border border-memotag-softPurple/50">
                <div className="text-memotag-purple mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
