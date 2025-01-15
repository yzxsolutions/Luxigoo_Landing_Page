import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextareaAutosize, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const TravelSupportForm = () => {
  return (
    <div
      className="flex min-h-screen bg-purple-900 p-8 rounded-2xl my-6 "
      id="travelForm"
    >
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
              <a href="mailto: fayad@gmail.com">
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
            {/* Facebook Link */}
            <a
              href="#"
              className="text-white hover:text-violet-400 transition-colors duration-300 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700"
            >
              <Facebook style={{ fontSize: 28 }} />
            </a>

            {/* Instagram Link */}
            <a
              href="#"
              className="text-white hover:text-pink-500 transition-colors duration-300 bg-gradient-to-r from-pink-500 to-orange-400 p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-orange-500"
            >
              <Instagram style={{ fontSize: 28 }} />
            </a>

            {/* Twitter Link */}
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

            <form className="space-y-6">
              <div>
                <TextField
                  id="standard-basic"
                  label="Your name"
                  variant="standard"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none"
                />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Your email"
                  variant="standard"
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none"
                />
              </div>

              <div>
                <TextareaAutosize
                  color="primary"
                  disabled={false}
                  minRows={2}
                  placeholder="Your Message ..."
                  className="w-full px-4 py-3 border-b border-gray-300 focus:border-violet-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>Get In Touch</span>
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
