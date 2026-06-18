import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, User } from 'lucide-react';
import manojImage from '../assets/gym/manoj-trainer.jpg';
import { ChevronDown } from 'lucide-react';

const Gym = () => {
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('');

  const classes = [
    { time: "06:00 AM", name: "Morning Strength Training", type: "Strength", trainer: "Manoj" },
    { time: "07:30 AM", name: "HIIT Blast", type: "Cardio", trainer: "Manoj" },
    { time: "09:00 AM", name: "Yoga & Mobility", type: "Yoga", trainer: "Manoj" },
    { time: "05:00 PM", name: "Powerlifting & Conditioning", type: "Strength", trainer: "Manoj" },
    { time: "06:30 PM", name: "Zumba & Dance Fitness", type: "Cardio", trainer: "Manoj" },
    { time: "08:00 PM", name: "Core & Abs Burner", type: "Strength", trainer: "Manoj" },
  ];

  const memberships = [
    {
      title: "1 Month",
      price: "₹1500",
      duration: "/month",
      features: ["Unlimited Gym Access", "All Group Classes", "Locker & Shower Access"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "3 Months",
      price: "₹3900",
      duration: "/3 months",
      features: ["Unlimited Access", "All Classes with Coach Manoj", "4 PT Sessions"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "4 Months",
      price: "₹4500",
      duration: "/4 months",
      features: ["Unlimited Access", "6 PT Sessions with Manoj", "Nutrition Guidance"],
      color: "border-accent-gold",
      popular: true
    },
    {
      title: "6 Months",
      price: "₹7200",
      duration: "/6 months",
      features: ["Unlimited Access", "8 PT Sessions", "+ 1 Month Free"],
      color: "border-primary-red",
      popular: false
    },
    {
      title: "1 Year",
      price: "₹12000",
      duration: "/year",
      features: ["Unlimited Access", "12 PT Sessions", "+ 2 Months Free"],
      color: "border-primary-red",
      popular: false
    },
  ];

  const handleBookSession = (className) => {
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 2500);
  };

  const handleChoosePlan = (plan) => {
    setSelectedPlanName(plan.title);
    setTimeout(() => {
      alert(`✅ You have selected the ${plan.title} Plan!\n\nPlease visit the gym reception to complete your membership registration.`);
      setSelectedPlanName('');
    }, 600);
  };

return (
  <>
  {showBookingSuccess && (
  <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg z-50">
    Session booked successfully!
  </div>
)}
  <section className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-3xl">

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
        TRUE FITNESS
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 mb-8">
        Train with Purpose. Powered by Manoj.
      </p>

<motion.button
  onClick={() => {
    const section = document.getElementById("memberships");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="inline-block px-8 py-3 bg-primary-red hover:bg-red-700 rounded-full font-semibold transition-all"
>
  Join True Fitness
</motion.button>
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
  }}
  className="mt-14 flex flex-col items-center gap-2 opacity-60"
>
  <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
    Explore
  </span>

  <ChevronDown size={28} className="text-gray-500" />
</motion.div>

    </div>
  </section>
  {/* Class Schedule */}
<section className="max-w-6xl mx-auto px-6 py-16">

  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Class Schedule
    </h2>

    <p className="text-gray-400">
      All sessions conducted by Coach Manoj
    </p>
  </div>

  <div className="space-y-5">
    {classes.map((cls, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -3 }}
        className="bg-dark-card border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* Time + Name */}
        <div className="flex items-center gap-5">
          <Clock className="text-primary-red" size={30} />

          <div>
            <p className="text-xl font-semibold text-white">
              {cls.time}
            </p>

            <p className="text-gray-300">
              {cls.name}
            </p>
          </div>
        </div>

        {/* Coach */}
        <div className="flex items-center gap-2 text-accent-gold">
          <User size={20} />
          <span>Coach Manoj</span>
        </div>

        {/* Button */}
        <button
          onClick={() => handleBookSession(cls.name)}
          className="px-7 py-3 bg-primary-red hover:bg-red-700 rounded-xl font-medium transition-all"
        >
          Book Session
        </button>

      </motion.div>
    ))}
  </div>

</section>
{/* Trainer Section - Coach Manoj */}
<div className="py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Meet Your Coach
      </h2>

      <p className="text-base text-gray-400 max-w-2xl mx-auto">
        All training sessions at True Fitness are personally led by Coach Manoj
      </p>
    </div>

    {/* Card */}
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-card border border-primary-red/30 rounded-3xl overflow-hidden"
    >

      <div className="grid md:grid-cols-2 items-center">

        {/* Left Side - Image */}
        <div className="bg-black flex justify-center items-center p-8">
          <img
            src={manojImage}
            alt="Coach Manoj"
            loading="lazy"
            decoding="async"
            className="w-full max-h-[500px] object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="p-8 md:p-12">

          <h3 className="text-3xl font-bold mb-2">
            Manoj
          </h3>

          <p className="text-primary-red text-lg mb-6">
            Head Personal Trainer & Coach
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Certified strength & conditioning coach specializing in
            powerlifting, HIIT and functional training.
          </p>

          <div className="space-y-3 text-gray-300 mb-8">
            <p>• Powerlifting</p>
            <p>• HIIT Training</p>
            <p>• Functional Fitness</p>
          </div>

          <div className="inline-flex items-center gap-3 bg-black/40 px-6 py-3 rounded-full">
            <Award className="text-accent-gold" />
            <span>12+ Years of Experience</span>
          </div>

        </div>

      </div>

    </motion.div>

  </div>
</div>
{/* Membership Plans */}
<div id="memberships" className="max-w-6xl mx-auto px-6 py-16">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Membership Plans
    </h2>

    <p className="text-base text-gray-400">
      Choose the plan that fits your fitness journey.
    </p>
  </div>

  {/* Plans */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {memberships.map((plan, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className={`bg-dark-card rounded-3xl p-7 border relative flex flex-col
        ${plan.popular
          ? 'border-accent-gold shadow-xl'
          : 'border-white/10'
        }`}
      >

        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-black px-5 py-1 rounded-full text-sm font-semibold">
            MOST POPULAR
          </div>
        )}

        <h3 className="text-2xl font-semibold mb-2">
          {plan.title}
        </h3>

        <div className="mb-8">
          <span className="text-4xl font-bold">
            {plan.price}
          </span>

          <span className="text-gray-400 ml-2">
            {plan.duration}
          </span>
        </div>

        <ul className="space-y-3 mb-8 text-gray-300">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Award size={18} className="text-primary-red" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleChoosePlan(plan)}
          className="mt-auto py-3 rounded-2xl bg-primary-red hover:bg-red-700 transition-all"
        >
          Choose Plan
        </button>

      </motion.div>
    ))}
  </div>
</div>
  </>
  
);

};

export default Gym;