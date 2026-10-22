// src/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ submittable: true, loading: false, success: false, error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submittable: false, loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ submittable: true, loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ submittable: true, loading: false, success: false, error: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ submittable: true, loading: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wide mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Journey With Us</span>
          </h1>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            Have questions or want to design a custom Egyptian adventure? Reach out to our experts and we will get back to you shortly.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Contact Form Box */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border-2 border-[#D4AF37]/40 rounded-[40px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none" />

          {status.success && (
            <div className="mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-300 text-center text-sm font-medium">
              Thank you! Your message has been sent successfully to info@ahmegypttravel.com.
            </div>
          )}

          {status.error && (
            <div className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-center text-sm font-medium">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full bg-white/[0.03] border border-[#D4AF37]/30 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full bg-white/[0.03] border border-[#D4AF37]/30 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+20 122 615 8975" 
                className="w-full bg-white/[0.03] border border-[#D4AF37]/30 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">Your Message / Trip Details</label>
              <textarea 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your dream trip..."
                className="w-full bg-white/[0.03] border border-[#D4AF37]/30 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status.loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A192F] font-black text-sm tracking-wider uppercase shadow-lg hover:opacity-95 transition-all transform hover:scale-[1.01] disabled:opacity-50"
            >
              {status.loading ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}