import BubbleBackground from "@/components/bubble-background";
import Navigation from "@/components/navigation";
import FeatureCard from "@/components/feature-card";
import { Users, Zap, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="font-inter overflow-x-hidden">
      <BubbleBackground />
      
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Team Section */}
            <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 text-center">
                Our Team
              </h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl">
                  Our team comprises of the best in the industry. Recruited for their proficiency in this 
                  domain, our marketing professionals are sought after for energetic endeavors and timely 
                  completion of the projects. Harnessing the other attributes of our team, we afford them 
                  assistance and encourage their inner engineering in other areas of expertise. Every 
                  specialization is duly incorporated in the projects by using our in-depth knowledge of this 
                  field.
                </p>
                
                <p className="text-lg md:text-xl">
                  Additionally, we at arcu hold regular training programs to ensure that our team is 
                  updated with the latest in this field. Yet, if there is one learning that we have taken 
                  from over the years of experience is that technology cannot replace a human being. 
                  Therefore, we strive hard to accomplish customer satisfaction through regular connect 
                  underpinned in the philosophy "Your business is our business". We believe in employing 
                  skilled professionals who have faced challenges in life and surfaced victoriously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-8 h-8 text-white" />}
                title="Expert Team"
                description="Industry professionals with proven track records"
              />
              
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-white" />}
                title="Fast Delivery"
                description="Timely completion of all projects and deliverables"
              />
              
              <FeatureCard
                icon={<CheckCircle className="w-8 h-8 text-white" />}
                title="Quality Assured"
                description="Regular training and continuous improvement programs"
              />
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Home;
