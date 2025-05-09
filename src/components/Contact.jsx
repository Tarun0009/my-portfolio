import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    setTimeout(() => {
      setLoading(false);
      setStatus("✅ Message sent! I’ll get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          I’m open to freelance work, collaborations, or just a good conversation. Drop a message or connect via social platforms.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
        {/* Contact Info */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let’s Connect</h3>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:tarunpratapsingh097@gmail.com" className="hover:underline text-blue-600">tarunpratapsingh097@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <a href="tel:+919717862329" className="hover:underline text-blue-600">+91 97178 62329</a>
            </p>
            <p className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-blue-500" />
              <a href="https://www.linkedin.com/in/tarun-pratap-singh/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">LinkedIn</a>
            </p>
            <p className="flex items-center gap-3">
              <Github className="w-5 h-5 text-gray-800" />
              <a href="https://github.com/tarunpratapsingh" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700">GitHub</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
          <div className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-lg transition duration-300 ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-green-600 mt-3 text-sm animate-fade-in">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
