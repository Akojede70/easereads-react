import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Data
const performanceData = {
  trend: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    values: [50, 25, 50, 75, 50, 100, 50],
  },
  quiz: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    values: [50, 25, 75, 25, 45, 5, 18],
  },
  strengths: [
    { subject: "Chemistry", score: 95 },
    { subject: "Mathematics", score: 95 },
    { subject: "Biology", score: 95 },
  ],
  improvements: [
    { subject: "Chemistry", score: 95 },
    { subject: "Mathematics", score: 95 },
    { subject: "Biology", score: 95 },
  ],
};

const studyPatternData = {
  weekly: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    values: [6, 12, 6, 6, 8, 28, 28],
  },
  timePattern: {
    labels: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    values: [6, 10, 18, 15, 10, 18, 15, 28],
  },
  summary: {
    averageSession: "3hrs",
    peakTime: "8:00 PM",
    mostActive: "Saturday",
    preferredSubject: "Physics and English",
    quizSuccessRate: "88.5%",
  },
};

const insightsData = [
  {
    type: "warning",
    title: "Focus on Thermodynamics",
    description: "Your scores in this topic have declined by 12% over the last 2 weeks. Consider additional practice.",
    icon: "fx",
    color: "blue",
  },
  {
    type: "success",
    title: "Great Progress in Biology",
    description: "You've improved 15% in Cell Biology. Keep up the momentum with advanced topics.",
    icon: "fx",
    color: "green",
  },
  {
    type: "info",
    title: "Great Progress in Biology",
    description: "You've improved 15% in Cell Biology. Keep up the momentum with advanced topics.",
    icon: "fx",
    color: "orange",
  },
];

// Performance Tab
const PerformanceTab = () => {
  const trendChartData = {
    labels: performanceData.trend.labels,
    datasets: [
      {
        data: performanceData.trend.values,
        borderColor: "#1E88E5",
        backgroundColor: "transparent",
        pointBackgroundColor: "#1E88E5",
        pointBorderColor: "#1E88E5",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        borderWidth: 3,
      },
    ],
  };

  const quizChartData = {
    labels: performanceData.quiz.labels,
    datasets: [
      {
        data: performanceData.quiz.values,
        backgroundColor: "#1E88E5",
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1F2937",
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { 
          stepSize: 25, 
          color: "#9CA3AF",
          font: { size: 12 },
        },
        grid: { 
          color: "#E5E7EB",
          drawBorder: false,
        },
        border: { display: false },
      },
      x: {
        ticks: { 
          color: "#6B7280",
          font: { size: 12 },
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Performance Trend</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Your performance over the last 6 months</p>
          <div className="h-56 md:h-72">
            <Line data={trendChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Quiz Performance Analysis</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Detailed breakdown of your quiz results</p>
          <div className="h-56 md:h-72">
            <Bar data={quizChartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Your Strengths</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Topics where you excel</p>
          <div className="space-y-2 md:space-y-3">
            {performanceData.strengths.map((item, index) => (
              <div
                key={index}
                className="bg-[#4CB85133] rounded-lg md:rounded-xl p-3 md:p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm md:text-base font-medium text-gray-900">{item.subject}</p>
                  <p className="text-xs md:text-sm text-gray-600">Score: {item.score}%</p>
                </div>
                <span className="bg-green-500 text-white text-xs font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                  Strong
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Areas for Improvement</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Topics that need more attention</p>
          <div className="space-y-2 md:space-y-3">
            {performanceData.improvements.map((item, index) => (
              <div
                key={index}
                className="bg-[#FF9F2333] rounded-lg md:rounded-xl p-3 md:p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm md:text-base font-medium text-gray-900">{item.subject}</p>
                  <p className="text-xs md:text-sm text-gray-600">Score: {item.score}%</p>
                </div>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                  Focus
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Study Pattern Tab
const StudyPatternTab = () => {
  const weeklyChartData = {
    labels: studyPatternData.weekly.labels,
    datasets: [
      {
        data: studyPatternData.weekly.values,
        borderColor: "#1E88E5",
        backgroundColor: "rgba(30, 136, 229, 0.2)",
        pointBackgroundColor: "#1E88E5",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4,
        fill: true,
        borderWidth: 2,
      },
    ],
  };

  const timePatternData = {
    labels: studyPatternData.timePattern.labels,
    datasets: [
      {
        data: studyPatternData.timePattern.values,
        backgroundColor: "#1E88E5",
        borderRadius: 6,
        barThickness: 50,
      },
    ],
  };

  const weeklyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1F2937",
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: { 
          stepSize: 6,
          color: "#9CA3AF",
          font: { size: 12 },
        },
        grid: { 
          color: "#E5E7EB",
          drawBorder: false,
        },
        border: { display: false },
      },
      x: {
        ticks: { 
          color: "#6B7280",
          font: { size: 12 },
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  const timeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1F2937",
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: { 
          stepSize: 6,
          color: "#9CA3AF",
          font: { size: 11 },
        },
        grid: { 
          color: "#E5E7EB",
          drawBorder: false,
        },
        border: { display: false },
      },
      x: {
        ticks: { 
          color: "#6B7280",
          font: { size: 10 },
        },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Weekly Study Distribution */}
        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Weekly Study Distribution</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">How your study time is distributed across the week</p>
          <div className="h-56 md:h-72">
            <Line data={weeklyChartData} options={weeklyOptions} />
          </div>
        </div>

        {/* Study Habits Summary */}
        <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Study Habits Summary</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Your learning behavior analysis</p>
          
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-blue-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{studyPatternData.summary.averageSession}</p>
                <p className="text-xs md:text-sm text-gray-600">Average Session</p>
              </div>
              <div className="bg-orange-50 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{studyPatternData.summary.peakTime}</p>
                <p className="text-xs md:text-sm text-gray-600">Peak Time</p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-gray-600">Most Active</span>
                <span className="text-sm md:text-base font-semibold text-gray-900">{studyPatternData.summary.mostActive}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-gray-600">Preferred Subject Order</span>
                <span className="text-sm md:text-base font-semibold text-gray-900 text-right">{studyPatternData.summary.preferredSubject}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-gray-600">Quiz Success Rate</span>
                <span className="text-sm md:text-base font-semibold text-gray-900">{studyPatternData.summary.quizSuccessRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Time Pattern */}
      <div className="bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Study Time Pattern</h3>
        <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">When you're most active during the day</p>
        <div className="h-64 md:h-80">
          <Bar data={timePatternData} options={timeOptions} />
        </div>
      </div>
    </div>
  );
};

// Insights Tab
const InsightsTab = () => {
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-[#106EBE33]",
        icon: "bg-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800",
      },
      green: {
        bg: "bg-[#4CB85133]",
        icon: "bg-green-600",
        button: "bg-green-600 hover:bg-green-700 active:bg-green-800",
      },
      orange: {
        bg: "bg-[#FF9F2333]",
        icon: "bg-orange-600",
        button: "bg-orange-600 hover:bg-orange-700 active:bg-orange-800",
      },
    };
    return colors[color];
  };

  return (
    <div className="w-full bg-[#fff] rounded-xl md:rounded-2xl p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">AI-Powered Insights</h2>
        <p className="text-sm md:text-base text-gray-600">Personalized recommendations based on your learning data</p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {insightsData.map((insight, index) => {
          const colors = getColorClasses(insight.color);
          return (
            <div
              key={index}
              className={`${colors.bg} rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6`}
            >
              <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1 w-full">
                <div className={`${colors.icon} rounded-lg md:rounded-xl p-3 md:p-4 flex-shrink-0`}>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
              <button
                className={`${colors.button} text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium text-xs md:text-sm flex items-center justify-center gap-2 flex-shrink-0 transition-colors w-full md:w-auto`}
              >
                Start Practice
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main Component
const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState("performance");

  const tabs = [
    { id: "performance", label: "Performance" },
    { id: "study-pattern", label: "Study Pattern" },
    { id: "insights", label: "Insights" },
  ];

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-10 py-4 md:py-8">
      {/* Tabs */}
      <div className="w-full bg-gray-200 rounded-full p-1 md:p-1.5 flex gap-1 mb-6 md:mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex-1 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900 bg-[#fff]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mb-20 md:mb-32">
        {activeTab === "performance" && <PerformanceTab />}
        {activeTab === "study-pattern" && <StudyPatternTab />}
        {activeTab === "insights" && <InsightsTab />}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;