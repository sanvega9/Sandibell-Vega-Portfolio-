import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import Image from 'next/image';
import background from '../image/background.jpg';
import Navbaricons from '../components/Navicons';

const Portfolio = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-portfolio-bg bg-cover bg-center">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={background}
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* Include Navbar */}
      <Navbar />
         <div className="absolute inset-0 bg-[#0e0061] opacity-55 z-[-1]"></div>

      <div className="relative container mx-auto py-10 mt-20 flex flex-col items-center justify-center px-4 lg:px-20 text-center">
        {/* Center content */}
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-700">AI & Robotics Portfolio</h1>

        {/* AI Projects Section */}
        <section className="mb-12 w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-amber-500">AI Projects</h2>
          <div className="flex flex-wrap justify-center gap-8"> {/* Center grid items */}
            {/* AI Project 1 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center text-center w-full sm:w-[48%] lg:w-[30%]"> {/* Responsive width */}
              <h3 className="text-2xl font-bold mb-2 text-white">AI K-Drama Recommender</h3>
              <p className="text-gray-400">
                A machine learning-based recommendation system that suggests K-Dramas based on user input. Utilizes cosine similarity and TF-IDF vectorization.
              </p>
            </div>

            {/* AI Project 2 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center text-center w-full sm:w-[48%] lg:w-[30%]"> {/* Responsive width */}
              <h3 className="text-2xl font-bold mb-2 text-white">Deepfakes Lung Cancer Detection</h3>
              <p className="text-gray-400">
                An AI-driven project focusing on detecting lung cancer using deep learning models, showcased through impactful data visualizations.
              </p>
            </div>
            {/*AI Project 3 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center text-center w-full sm:w-[48%] lg:w-[30%]"> {/* Responsive width */}
              <h3 className="text-2xl font-bold mb-2 text-white">AI IoT Garden</h3>
              <p className="text-gray-400">
                A smart garden project utilizing AI for monitoring and optimizing plant growth through IoT devices and data analysis.
              </p>
            </div>

          </div>
        </section>

        {/* Robotics Projects Section */}
        <section className="mb-12 w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-amber-500">Robotics Projects</h2>
          <div className="flex flex-wrap justify-center gap-8"> {/* Center grid items */}
            {/* Robotics Project 1 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center text-center w-full sm:w-[48%] lg:w-[30%]"> {/* Responsive width */}
              <h3 className="text-2xl font-bold mb-2 text-white">Underwater Robot</h3>
              <p className="text-gray-400">
                The robot's primary task was to drive underwater and navigate through a series of obstacles. One of the key challenges was ensuring that the robot could align itself 90 or 180 degrees away from a gate and divide the gate evenly (50% left, 50% right).
              </p>
            </div>

            {/* Robotics Project 2 */}
            <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-center items-center text-center w-full sm:w-[48%] lg:w-[30%]"> {/* Responsive width */}
              <h3 className="text-2xl font-bold mb-2 text-white">Embedded Systems in Healthcare</h3>
              <p className="text-gray-400">
                Created a healthcare device using embedded systems to monitor patient vitals, showcasing the intersection of robotics and healthcare technology.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <a href="https://sandibellvega.weebly.com/portfolio.html">
          <button className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-600 transition-all text-white">
            See More Projects
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
