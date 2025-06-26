import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="h-[70vh] flex flex-col bg-gray-100">
      {/* Main Content Container */}
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-start justify-between p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out min-h-[70vh] relative">
        {/* Text Section - Font Styling & Hover Effects */}
        <div className="sm:w-full md:w-[700px] p-6 md:mt-20 md:text-start sm:text-center sm:mt-0 sm:p-6 flex flex-col justify-center">
          <h4 className="text-2xl md:text-3xl font-[Montserrat] text-gray-800 mb-2 hover:text-4xl transition-all duration-500">
            Maryam Fattah's Portfolio
          </h4>
          <h2 className="text-4xl font-[Lora] mt-2 text-gray-800 font-bold hover:text-5xl transition-all duration-600 ease-in-out">
            Welcome to My Journey
          </h2>
          <h3 className=" text-lg md:text-xl font-[Montserrat]  mt-25 text-gray-600 hover:text-3xl transition-all duration-500">
            From Motherhood to Building Apps
          </h3>
        </div>

        {/* Image - Positioned Top Right with Hover Effects */}
        <div className="w-full md:w-[600px] absolute top-0 right-0 h-auto md:h-[80%] flex justify-end pr-20">
          <img
            src="/src/assets/my-image.jpg"
            alt="Example"
            className="w-full h-auto md:h-[100%] object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          />
        </div>
        <Link
          to="/bio"
          className=" text-lg md:text-xl font-[Montserrat] absolute bottom-25 left-15  text-gray-800 px-4 py-2  hover:border-b-2 border-gray-800 transition-colors duration-300"
        >
          Read My Bio
        </Link>
      </div>
    </div>
  );
}
