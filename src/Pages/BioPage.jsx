import { Link } from "react-router-dom";

export default function BioPage() {
  return (
    <div className="h-[70vh] flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out min-h-[70vh] relative rounded-lg animate-fadeIn">
        {/* Image - Positioned Left */}
        <div className="w-full md:w-[600px] h-auto md:h-[80%] flex justify-start pl-20">
          <img
            src="/my-image.jpg"
            alt="My Profile"
            className="w-full h-auto md:h-[100%] object-cover  hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Text Section - Right-Aligned */}
        <div className="sm:w-full md:w-[700px] p-6 md:mt-10 md:text-start sm:text-center sm:mt-0 sm:p-6 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            About Me
          </h4>
          <h2 className="text-4xl font-[Lora] mt-2 text-gray-800 font-bold hover:text-5xl transition-all duration-600 ease-in-out">
            My Journey
          </h2>
          <p className="text-lg md:text-xl font-[Montserrat] mt-5 text-gray-600 leading-relaxed hover:scale-105 transition-all duration-500">
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
            className="mt-6 inline-block px-6 py-3 text-xl mt-40 text-gray-800 font-[Montserrat]  hover:border-b-2 border-gray-800  transition-colors duration-300 w-[220px] "
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}
