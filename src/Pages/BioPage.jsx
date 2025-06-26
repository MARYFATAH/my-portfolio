import { Link } from "react-router-dom";

export default function BioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out relative rounded-lg animate-fadeIn">
        {/* Image - Positioned Top on Mobile */}
        <div className="w-full md:w-[600px] h-auto flex justify-center md:justify-start px-4 sm:px-10 mb-6 md:mb-0">
          <img
            src="/my-image.jpg"
            alt="My Profile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[700px] px-4 sm:px-6 text-center md:text-left">
          <h4 className="text-2xl sm:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            About Me
          </h4>
          <h2 className="text-3xl sm:text-4xl font-[Lora] text-gray-800 font-bold hover:text-5xl transition-all duration-600 ease-in-out">
            My Journey
          </h2>
          <p className="text-base sm:text-lg font-[Montserrat] mt-4 text-gray-600 leading-relaxed hover:scale-105 transition-all duration-500">
            I’m passionate about creativity, problem-solving, and building
            meaningful applications. Moving from Iran to Germany, embracing
            motherhood, and learning software engineering have shaped my
            journey. Now, I’m excited to create and share my experiences with
            the world.
          </p>

          {/* CV Download Button */}
          <a
            href="/mycv (2).pdf"
            download
            className="mt-6 inline-block px-6 py-3 text-lg text-gray-800 font-[Montserrat] border border-transparent hover:border-gray-800 transition-all duration-300"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}
