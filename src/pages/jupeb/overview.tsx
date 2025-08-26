import React from 'react'
import Layout from '../../components/layout/layout'

const overview = () => {
  return (
    <Layout name='overview ' >
      <div className="relative w-[90%] h-[200px] bg-blue-900 text-white p-4 rounded-lg overflow-hidden flex items-center ">
      {/* Banner content */}
      <div className="pl-[30px]">
        <h2 className="text-3xl font-bold">JUPEB PROMO OFFER</h2>
        <p className="w-[60%] mt-[20px] text-[16px]">
          Get undefined percent Discount offer to Purchase Jupeb Textbooks for <span className='font-bold'> Mathematics, Chemistry, Government </span>
        </p>
        <p className="text-[16px] mt-[20px]">Promo end on the <span className='text-[#ff9f23]'> 14th of April, 2026</span></p> {/* Updated to future date */}
      </div>

      {/* Button */}
      <div className='ml-[300px]'>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-[8px] hover:bg-blue-700 transition duration-200 cursor-pointer">
        Get Offer Now
      </button>
      </div>
    </div>

    <div className=" mt-[20px] bg-gray-100 min-h-screen">
      {/* Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Overall Performance */}
        <div className="bg-primaryWhite p-4 rounded-lg shadow">
          <h3 className="text-2xl font-bold">Overall performance</h3>
          <p className="text-[16px]">Subject, Video and exam rate</p>
          

           <div className="flex flex-col items-center justify-center p-6">
      <div className="relative w-48 h-24 mb-4">
        {/* Background circle */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 120 60" className="w-full h-[120%]">
            {/* Gray background arc */}
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            {/* Blue progress arc - 80% of half circle */}
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="157"
              strokeDashoffset="31.4" /* 157 * 0.2 = 31.4 (for 80% progress) */
              strokeLinecap="round"
              values='80%'
            />
          </svg>
        </div>
        
        {/* Percentage text */}
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <span className="text-3xl font-bold text-gray-800">80%</span>
        </div>
      </div>
    </div>
        </div>

        {/* Resource Cards */}
        <div className="bg-white p-4 rounded-lg shadow grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Textbook</span>
            <span className="text-gray-600 text-sm">2</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Video Tutorials</span>
            <span className="text-gray-600 text-sm">5</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Exam Practice</span>
            <span className="text-gray-600 text-sm">10</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Expired</span>
            <span className="text-gray-600 text-sm">2</span>
          </div>
          <div className="flex items-center space-x-2 col-span-2">
            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Streaks day</span>
            <span className="text-gray-600 text-sm">5</span>
          </div>
          <div className="flex items-center space-x-2 col-span-2">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Referral Points</span>
            <span className="text-gray-600 text-sm">4</span>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Quiz */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-600">Upcoming Quiz</h3>
          <div className="mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
              <span className="text-blue-600 text-sm">20 Mins</span>
              <span className="text-blue-600 text-sm">20 Questions</span>
            </div>
            <p className="text-gray-600 text-sm">Simple Harmonic Motion Quiz</p>
            <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Join Quiz
            </button>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
                <span className="text-blue-600 text-sm">20 Mins</span>
                <span className="text-blue-600 text-sm">20 Questions</span>
              </div>
              <p className="text-gray-600 text-sm">Quadratic Equation Motion Quiz</p>
              <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Join Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-600">Leaderboard</h3>
          <button className="mt-2 text-blue-600 text-sm">See All</button>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">Emmanuel Kelvin</span>
              </div>
              <span className="text-green-600">Lvl 12 <span className="text-green-600">▲</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">John Yemi</span>
              </div>
              <span className="text-green-600">Lvl 10 <span className="text-green-600">▲</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">King Ammy</span>
              </div>
              <span className="text-red-600">Lvl 9 <span className="text-red-600">▼</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">Martins Bush</span>
              </div>
              <span className="text-green-600">Lvl 5 <span className="text-green-600">▲</span></span>
            </div>
          </div>
        </div>

        {/* Progress Bars and Upcoming Classes */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-sm text-gray-600">Textbook</h3>
            <h3 className="text-sm text-gray-600">Video Tutorials</h3>
            <h3 className="text-sm text-gray-600">Exam Practice</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Biology</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">20%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Chemistry</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">40%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Chemistry</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">40%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Biology</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">80%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
          </div>
          <h3 className="mt-6 text-sm text-gray-600">Upcoming classes</h3>
          <button className="mt-2 text-blue-600 text-sm">See All</button>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
                <span className="text-blue-600 text-sm">20 Mins</span>
              </div>
              <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Join Class
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
                <span className="text-blue-600 text-sm">20 Mins</span>
              </div>
              <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Join Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default overview