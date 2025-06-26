import { useEffect } from "react";
import { FiMail } from "react-icons/fi";

export default function ContactPage() {
  useEffect(() => {
    console.log("ContactPage component mounted");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 sm:px-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg animate-fadeIn">
        {/* Image Section */}
        <div className="w-full md:w-[600px] flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="/contact.jpg"
            alt="Contact"
            loading="lazy"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out pointer-events-none"
          />
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-[700px] text-center md:text-left px-4 sm:px-6">
          <h4 className="text-2xl sm:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            Contact Me
          </h4>
          <p className="text-base sm:text-lg md:text-xl font-[Montserrat] mt-4 text-gray-600 leading-relaxed hover:scale-105 transition-all duration-500">
            Feel free to reach out! I love connecting with new people and
            discussing exciting projects.
          </p>

          {/* Email Info */}
          <div className="mt-4 text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-2">
            <div className="flex items-center justify-center sm:justify-start">
              <FiMail className="text-gray-600 text-xl mr-2" />
              <span className="text-lg font-[Montserrat]">My Email:</span>
            </div>
            <a
              href="mailto:mary.fatah@gmail.com"
              className="text-lg text-gray-700 hover:underline hover:text-gray-900 transition-all duration-300"
            >
              mary.fatah@gmail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-6 items-center md:items-start">
            <a
              href="https://www.linkedin.com/in/maryamfattah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-[Montserrat] text-gray-600 hover:text-gray-800 hover:underline transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MARYFATAH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-[Montserrat] text-gray-600 hover:text-gray-800 hover:underline transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
