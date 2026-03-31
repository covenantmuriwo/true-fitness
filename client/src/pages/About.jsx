import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
import trueFitnessLogo from '../assets/true-fitness-logo.png';
import trueformLogo from '../assets/trueform-nutrition-logo.png';

const About = () => {
  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero */}
      <div className="bg-black py-24 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <img src={trueFitnessLogo} alt="True Fitness" className="h-20" />
          <img src={trueformLogo} alt="Trueform Nutrition" className="h-20" />
        </div>
        <h1 className="text-6xl font-bold mb-6">About Us</h1>
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
          Empowering fitness journeys in Arjit, Punjab since day one.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-5xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                True Fitness was founded with a simple mission: to provide world-class training 
                in a welcoming environment. Under the expert guidance of Coach Manoj, we help 
                members of all levels achieve their fitness goals.
              </p>
              <p>
                Trueform Nutrition was born from the belief that great results come from both 
                training and proper nutrition. Our shop offers premium supplements and gym wear 
                carefully selected to support your journey.
              </p>
            </div>
          </div>
          <div className="bg-dark-card p-10 rounded-3xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center">
                <Award className="text-primary-red" size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Coach Manoj</h3>
                <p className="text-primary-red">Head Trainer & Coach</p>
                <p className="text-gray-400 mt-2">12+ years transforming lives</p>
              </div>
            </div>
            <p className="text-gray-300">
              "Fitness is not just about lifting weights. It's about building discipline, 
              confidence, and a better version of yourself."
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Choose Us?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="text-primary-red" size={48} />,
              title: "Expert Coaching",
              desc: "Personal guidance from Coach Manoj in every session"
            },
            {
              icon: <Target className="text-primary-red" size={48} />,
              title: "Results Driven",
              desc: "Proven programs that deliver real, measurable results"
            },
            {
              icon: <Award className="text-primary-red" size={48} />,
              title: "Complete Ecosystem",
              desc: "Gym + Nutrition shop under one roof"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-dark-card p-10 rounded-3xl text-center border border-gray-800"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;