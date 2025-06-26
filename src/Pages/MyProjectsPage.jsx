import { useEffect } from "react";

export default function ProjectPage() {
  useEffect(() => {
    console.log("ProjectPage component mounted");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-4 sm:px-6 lg:px-12 py-8">
      {/* NASA Project */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg overflow-hidden animate-fadeIn">
        {/* Image Left */}
        <div className="w-full md:w-1/2 h-64 md:h-[90vh] flex justify-center md:justify-start">
          <img
            src="/nasaproject.jpg"
            alt="NASA Image Generator"
            className="w-full h-full object-cover rounded-md md:rounded-none md:rounded-l-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
          <h4 className="text-3xl md:text-4xl font-[Montserrat] text-gray-800 mb-4 hover:text-gray-900 transition-colors duration-500">
            NASA Image Generator
          </h4>
          <p className="text-base md:text-lg font-[Montserrat] text-gray-600 leading-relaxed hover:scale-105 transition-transform duration-500">
            This project fetches breathtaking space images from NASA's Astronomy
            Picture of the Day (APOD) API.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/MARYFATAH/NASAImageGenerator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://nasaimagenerator.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Project Website
            </a>
          </div>
        </div>
      </div>

      {/* Student Monitoring App */}
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg overflow-hidden animate-fadeIn mt-12">
        {/* Image Top */}
        <div className="w-full h-64 md:h-[70vh] flex justify-center">
          <img
            src="/studentapp.png"
            alt="Student Monitoring App"
            className="w-full h-full object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Below Image */}
        <div className="w-full p-6 md:p-10 flex flex-col justify-center text-center">
          <h4 className="text-3xl md:text-4xl font-[Montserrat] text-gray-800 mb-4 hover:text-gray-900 transition-colors duration-500">
            Student Monitoring App
          </h4>
          <p className="text-base md:text-lg font-[Montserrat] text-gray-600 leading-relaxed hover:scale-105 transition-transform duration-500">
            A powerful application designed to help educators and parents track
            student progress, attendance, and performance.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/MARYFATAH/StudentMonitoringApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://student-monitoring-app.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Project Website
            </a>
          </div>
        </div>
      </div>

      {/* Movie Quiz Game */}
      <div className="w-full max-w-7xl mx-auto flex flex-col bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg overflow-hidden animate-fadeIn mt-12">
        {/* Image Top */}
        <div className="w-full h-64 md:h-[70vh] flex justify-center">
          <img
            src="/quizproject.png"
            alt="Movie Quiz Game"
            className="w-full h-full object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Below */}
        <div className="w-full p-6 md:p-10 flex flex-col justify-center text-center">
          <h4 className="text-3xl md:text-4xl font-[Montserrat] text-gray-800 mb-4 hover:text-gray-900 transition-colors duration-500">
            Movie Quiz Game
          </h4>
          <p className="text-base md:text-lg font-[Montserrat] text-gray-600 leading-relaxed hover:scale-105 transition-transform duration-500">
            Challenge your film knowledge with this interactive quiz game.
            Choose answers, track scores, and aim for the top.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/MARYFATAH/team-mf-quiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://mfquizgame.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Project Website
            </a>
          </div>
        </div>
      </div>

      {/* Hop'n Fitness App */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg overflow-hidden animate-fadeIn mt-12">
        {/* Image Left */}
        <div className="w-full md:w-1/2 h-64 md:h-[90vh] flex justify-center md:justify-start">
          <img
            src="/HOPn.png"
            alt="Hop'n Fitness App"
            className="w-full h-full object-cover rounded-md md:rounded-none md:rounded-l-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
          <h4 className="text-3xl md:text-4xl font-[Montserrat] text-gray-800 mb-4 hover:text-gray-900 transition-colors duration-500">
            Hop'n Fitness
          </h4>
          <p className="text-base md:text-lg font-[Montserrat] text-gray-600 leading-relaxed hover:scale-105 transition-transform duration-500">
            A dynamic fitness platform where users can explore workouts, track
            routines, and stay motivated with guided programs.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/MARYFATAH/hopnfitness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              View on GitHub
            </a>
            <a
              href="https://hopnfitness.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-[Montserrat] text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300"
            >
              Project Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
