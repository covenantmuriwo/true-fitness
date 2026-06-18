import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
;

const About = () => {
  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero */}
<div className="h-screen flex flex-col items-center justify-center text-center px-6">

  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-4xl md:text-6xl font-bold tracking-tight mb-5"
  >
    About Us
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-lg md:text-2xl text-gray-300 mb-2"
  >
    Empowering fitness journeys in Arjit, Punjab since day one.
  </motion.p>

</div>

     <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Story</h2>
            <div className="space-y-6 text-base text-gray-300 leading-relaxed">
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
          <div className="bg-dark-card border border-primary-red/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-primary-red/10 rounded-2xl flex items-center justify-center">
                <Award className="text-primary-red" size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Coach Manoj</h3>
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

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us?</h2>
          <p className="text-base text-gray-400">
            What makes True Fitness different.
          </p>
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
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-primary-red/30 rounded-3xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
             <p className="text-base text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;