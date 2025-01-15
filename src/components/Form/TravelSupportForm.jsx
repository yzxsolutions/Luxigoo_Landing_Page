// TravelSupportForm.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextareaAutosize, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const TravelSupportForm = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form status state
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://script.google.com/macros/s/AKfycby7t1IJ3dDz5lSqIfutyEK__LYR6q54_J9FFqC9c_VqlrLxJjYCDLDmFNdbJXfSm10v/exec', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <div className="flex min-h-screen bg-purple-900 p-8 rounded-2xl my-6" id="travelForm">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Contact Info */}
        <div className="flex-1 text-white space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Your travel support team is just a{" "}
              <span className="text-violet-400">click</span> away.
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-white" size={24} />
              <a href="mailto:info.luxigoo@gmail.com">
                <span>Info.luxigoo@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center">
              <div className="bg-violet-700 rounded-xl py-3 px-6 flex items-center gap-3">
                <Phone className="text-white" size={24} />
                <span>+91 9074575374</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-white" size={24} />
              <span>123 Street 456 House</span>
            </div>
          </div>

          <div className="flex gap-6 mt-8 justify-center items-start">
            {/* Social Media Links */}
            <a
              href="#"
              className="text-white hover:text-violet-400 transition-colors duration-300 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700"
            >
              <Facebook style={{ fontSize: 28 }} />
            </a>

            <a
              href="#"
              className="text-white hover:text-pink-500 transition-colors duration-300 bg-gradient-to-r from-pink-500 to-orange-400 p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-orange-500"
            >
              <Instagram style={{ fontSize: 28 }} />
            </a>

            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors duration-300 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600"
            >
              <Twitter style={{ fontSize: 28 }} />
            </a>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex gap-2">
              <SendIcon style={{ color: "rgb(88,28,135)" }} />
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                I'm interested in...
              </h2>
            </div>

            {/* Status Messages */}
            {status.submitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {status.error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                Error: {status.error}
              </div>
            )}

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <TextField
                  id="name"
                  name="name"
                  label="Your name"
                  variant="standard"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none"
                  required
                />
              </div>

              <div>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Your email"
                  variant="standard"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none"
                  required
                />
              </div>

              <div>
                <TextareaAutosize
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  color="primary"
                  minRows={2}
                  placeholder="Your Message ..."
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <span>{status.submitting ? 'Sending...' : 'Get In Touch'}</span>
                <svg
                  className="w-6 h-6 rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSupportForm;