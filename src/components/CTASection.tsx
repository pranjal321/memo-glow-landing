
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "./ui/motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("caregiver");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Thank you for joining our waitlist!",
        description: "We'll be in touch soon with more information.",
      });
      setEmail("");
      setName("");
    }, 1500);
  };

  return (
    <section id="cta" className="py-20 bg-memotag-softGray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-center mb-4">Join the <span className="heading-gradient">MemoTag</span> Waitlist</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Be among the first to experience MemoTag's revolutionary approach to dementia care. 
              Sign up to receive early access and exclusive updates.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-memotag-softPurple/30">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">I am a:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="caregiver"
                        name="role"
                        value="caregiver"
                        checked={role === "caregiver"}
                        onChange={() => setRole("caregiver")}
                        className="h-4 w-4 text-memotag-purple border-gray-300 focus:ring-memotag-purple"
                      />
                      <label htmlFor="caregiver" className="ml-2 text-sm text-gray-700">
                        Family Caregiver
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="professional"
                        name="role"
                        value="professional"
                        checked={role === "professional"}
                        onChange={() => setRole("professional")}
                        className="h-4 w-4 text-memotag-purple border-gray-300 focus:ring-memotag-purple"
                      />
                      <label htmlFor="professional" className="ml-2 text-sm text-gray-700">
                        Healthcare Professional
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="investor"
                        name="role"
                        value="investor"
                        checked={role === "investor"}
                        onChange={() => setRole("investor")}
                        className="h-4 w-4 text-memotag-purple border-gray-300 focus:ring-memotag-purple"
                      />
                      <label htmlFor="investor" className="ml-2 text-sm text-gray-700">
                        Potential Investor
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-memotag-purple hover:bg-memotag-darkPurple text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  You've been added to our waitlist. We'll keep you updated on MemoTag's progress
                  and notify you when early access becomes available.
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
