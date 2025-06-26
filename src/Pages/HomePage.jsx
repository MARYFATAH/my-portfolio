import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 sm:px-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg animate-fadeIn">
        {/* Text Section */}
        <div className="w-full md:w-[700px] text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-2xl sm:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            Maryam Fattah's Portfolio
          </h4>
          <h2 className="text-3xl sm:text-4xl font-[Lora] mt-2 text-gray-800 font-bold hover:text-5xl transition-all duration-600 ease-in-out">
            Welcome to My Journey
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl font-[Montserrat] mt-6 text-gray-600 hover:text-3xl transition-all duration-500">
            From Motherhood to Building Apps
          </h3>

          {/* Bio Link */}
          <Link
            to="/bio"
            className="mt-8 inline-block text-lg sm:text-xl font-[Montserrat] text-gray-800 px-4 py-2 hover:border-b-2 border-gray-800 transition-colors duration-300"
          >
            Read My Bio
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[600px] flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src="/my-image.jpg"
            alt="Maryam Fattah"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
