import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-dark-bg min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-400">We're here to help you on your fitness journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 bg-dark-card border border-gray-700 rounded-2xl focus:border-primary-red outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-dark-card border border-gray-700 rounded-2xl focus:border-primary-red outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-6 py-4 bg-dark-card border border-gray-700 rounded-2xl focus:border-primary-red outline-none resize-y"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-primary-red hover:bg-red-700 rounded-2xl font-semibold text-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary-red mt-1" size={28} />
                  <div>
                    <p className="font-medium">True Fitness & Trueform Nutrition</p>
                    <p className="text-gray-400">Arjit, Punjab</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary-red mt-1" size={28} />
                  <div>
                    <p className="font-medium">+91 98775 07810</p>
                    <p className="text-gray-400">Call us for inquiries</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary-red mt-1" size={28} />
                  <div>
                    <p className="font-medium">info@truefitness.in</p>
                    <p className="text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary-red mt-1" size={28} />
                  <div>
                    <p className="font-medium">Mon - Sat: Morning 5:30 AM - 10:00 AM Evening 4:30 PM - 10:00 PM</p>
                    <p className="text-gray-400">Open 6 days a week</p>
                  </div>
                </div>
              </div>
            </div>

        {/* Updated Google Maps Embed with Exact Location */}
            <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <iframe
                title="True Fitness & Trueform Nutrition Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.6925!3d30.712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzQzLjIiTiA3NsKwNDEnMzMuMCJF!5e0!3m2!1sen!2sin!4v1743100000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;