// src/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 inline-block mb-4 shadow-lg">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-wide mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-yellow-500">Journey With Us</span>
          </h1>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            Have questions or want to design a custom Egyptian adventure? Reach out to our experts through our form or direct channels below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Grid Layout: Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-[#D4AF37]/30 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-[#D4AF37]">Direct Channels</h3>
              <p className="text-gray-300 text-sm font-light mb-8">
                Connect with our luxury travel specialists immediately via email or WhatsApp numbers.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:info@ahmegypttravel.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Email Us</div>
                    <div className="text-sm font-medium text-gray-200 group-hover:text-[#D4AF37] transition-colors">info@ahmegypttravel.com</div>
                  </div>
                </a>

                {/* WhatsApp Line 1 */}
                <a 
                  href="https://wa.me/201226158975" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase tracking-wider">WhatsApp Line 1</div>
                    <div className="text-sm font-medium text-gray-200 font-mono">+20 122 615 8975</div>
                  </div>
                </a>

                {/* WhatsApp Line 2 */}
                <a 
                  href="https://wa.me/201080132708" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase tracking-wider">WhatsApp Line 2</div>
                    <div className="text-sm font-medium text-gray-200 font-mono">+20 108 013 2708</div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-2xl border-2 border-[#D4AF37]/40 rounded-[40px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none" />

              {status.success && (
                <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-center text-sm font-medium">
                  Thank you! Your message has been sent successfully to info@ahmegypttravel.com.
                </div>
              )}

              {status.error && (
                <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-center text-sm font-medium">
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

      </div>
    </div>
  );
}