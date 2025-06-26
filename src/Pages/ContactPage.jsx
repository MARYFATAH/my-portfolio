import { useEffect } from "react";
import { FiMail } from "react-icons/fi"; // Importing minimal email icon

export default function ContactPage() {
  useEffect(() => {
    console.log("ContactPage component mounted");
  }, []);

  return (
    <div className="h-[70vh] flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out min-h-[70vh] relative animate-fadeIn">
        {/* Image - Positioned Top Left */}
        <div className="w-full md:w-[600px] h-auto md:h-[80%] absolute top-0 left-0 z-0">
          <img
            src="/src/assets/contact.jpg"
            alt="Contact"
            className="w-[75%] h-[60vh] object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out pointer-events-none"
          />
        </div>

        {/* Contact Details - Positioned Right */}
        <div className="  sm:w-full md:w-[700px] p-6 md:mt-10 md:text-start sm:text-center sm:mt-0 sm:p-6 flex flex-col place-content-end justify-center ml-auto relative z-10">
          <h4 className="text-2xl md:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            Contact Me
          </h4>
          <p className="text-lg md:text-xl font-[Montserrat] mt-5 text-gray-600 leading-relaxed hover:scale-105 transition-all duration-500">
            Feel free to reach out! I love connecting with new people and
            discussing exciting projects.
          </p>

          {/* Contact Info */}
          <div className="mt-4 text-gray-700 flex items-center">
            <FiMail className="text-gray-600 text-xl mr-2" />
            {/* Minimal email icon */}
            <p className="text-lg font-[Montserrat]">
              My Email:
              <a
                href="mailto:mary.fatah@gmail.com"
                className="text-gray-700 hover:underline hover:text-gray-900 ml-1 transition-all duration-300"
              >
                mary.fatah@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Links with Hover Effects */}
          <div className="flex space-x-6 mt-6">
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
              className="  text-xl font-[Montserrat] text-gray-600 hover:text-gray-800 hover:underline transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
