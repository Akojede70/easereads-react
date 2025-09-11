import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import Button from "../../../components/shared/button";
import ProgressBar from "../../../components/progressbar/progressbar";
import {
  ArrowLeft,
  BookIcon,
  ExamIcon2,
  ArrowUp,
  ArrowDown,
  BadgeIcon,
} from "../../../assets/icon";

// Type definitions
interface RecommendationItem {
  text: string;
  action: string;
}

interface SubjectDetails {
  reading: {
    percentage: number;
    description: string;
  };
  exam: {
    percentage: number;
    score: string;
    description: string;
  };
  recommendations: RecommendationItem[];
}

interface SubjectData {
  id: number;
  title: string;
  chapter: string;
  percentage: number;
  details: SubjectDetails;
}

type TabType = "weakness" | "strengths";

const ViewAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("weakness");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openRecommendations, setOpenRecommendations] = useState<{
    [key: number]: boolean;
  }>({});

  const subjectData: SubjectData[] = [
    {
      id: 1,
      title: "What is Biology",
      chapter: "Chapter 1",
      percentage: 30,
      details: {
        reading: {
          percentage: 20,
          description:
            "20% of your knowledge strength comes from reading chapters",
        },
        exam: {
          percentage: 80,
          score: "10 Out 40",
          description:
            "80% of your knowledge strength comes from exam practice",
        },
        recommendations: [
          {
            text: "Practice more exams",
            action: "Start",
          },
          {
            text: "You can also revisit the tutorial and textbook section",
            action: "Start",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Part of Human Organ",
      chapter: "Chapter 4",
      percentage: 20,
      details: {
        reading: {
          percentage: 15,
          description:
            "15% of your knowledge strength comes from reading chapters",
        },
        exam: {
          percentage: 85,
          score: "8 Out 40",
          description:
            "85% of your knowledge strength comes from exam practice",
        },
        recommendations: [
          {
            text: "Practice more exams",
            action: "Start",
          },
          {
            text: "You can also revisit the tutorial and textbook section",
            action: "Start",
          },
        ],
      },
    },
    {
      id: 3,
      title: "What is Biology",
      chapter: "Chapter 1",
      percentage: 20,
      details: {
        reading: {
          percentage: 25,
          description:
            "25% of your knowledge strength comes from reading chapters",
        },
        exam: {
          percentage: 75,
          score: "12 Out 40",
          description:
            "75% of your knowledge strength comes from exam practice",
        },
        recommendations: [
          {
            text: "Practice more exams",
            action: "Start",
          },
          {
            text: "You can also revisit the tutorial and textbook section",
            action: "Start",
          },
        ],
      },
    },
    {
      id: 4,
      title: "Type of Plants",
      chapter: "Chapter 27",
      percentage: 20,
      details: {
        reading: {
          percentage: 30,
          description:
            "30% of your knowledge strength comes from reading chapters",
        },
        exam: {
          percentage: 70,
          score: "15 Out 40",
          description:
            "70% of your knowledge strength comes from exam practice",
        },
        recommendations: [
          {
            text: "Practice more exams",
            action: "Start",
          },
          {
            text: "You can also revisit the tutorial and textbook section",
            action: "Start",
          },
        ],
      },
    },
    {
      id: 5,
      title: "5 Sense of human",
      chapter: "Chapter 40",
      percentage: 20,
      details: {
        reading: {
          percentage: 18,
          description:
            "18% of your knowledge strength comes from reading chapters",
        },
        exam: {
          percentage: 82,
          score: "9 Out 40",
          description:
            "82% of your knowledge strength comes from exam practice",
        },
        recommendations: [
          {
            text: "Practice more exams",
            action: "Start",
          },
          {
            text: "You can also revisit the tutorial and textbook section",
            action: "Start",
          },
        ],
      },
    },
  ];

  const toggleAccordion = (id: number): void => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const toggleRecommendations = (id: number): void => {
    setOpenRecommendations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  // Determine colors based on active tab
  const progressColor =
    activeTab === "weakness" ? "bg-red-500" : "bg-green-500";

  return (
    <Layout name="analytics">
      <div className="w-full min-h-screen bg-gray-100 rounded-2xl flex flex-col">
        {/* Header */}
        <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-[#ffffff] py-4">
          <div>
            <Button
              color="bg-[#ffffff]"
              textColor="text-gray-800"
              rounded="lg"
              className="flex items-center justify-center font-semibold gap-2 px-4 py-2 border border-gray-800"
              onClick={() => window.history.back()}
            >
              <ArrowLeft />
              Back
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 h-full">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Subject Analytics
            </h1>

            {/* Tabs */}
            <div className="flex flex-col sm:flex-row mb-6 lg:mb-8 py-4 gap-3 sm:gap-4 justify-center sm:justify-between bg-[#ffffff] px-4 lg:px-40 rounded-lg shadow-sm">
              <button
                onClick={() => handleTabChange("weakness")}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto lg:min-w-[340px] ${
                  activeTab === "weakness"
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <BadgeIcon />
                <span className="text-sm sm:text-base">Weakness</span>
              </button>
              <button
                onClick={() => handleTabChange("strengths")}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto lg:min-w-[340px] ${
                  activeTab === "strengths"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <BadgeIcon />
                <span className="text-sm sm:text-base">Top Strengths</span>
              </button>
            </div>

            {/* Subject List */}
            <div className="space-y-3 sm:space-y-4">
              {subjectData.map((subject: SubjectData) => (
                <div
                  key={subject.id}
                  className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  {/* Accordion Header */}
                  <div
                    className="flex items-center justify-between p-3 sm:p-4 cursor-pointer bg-[#ffffff] hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(subject.id)}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center flex-1 gap-2 sm:gap-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">
                          {subject.title}
                        </h3>
                        <span className="text-gray-500 text-xs italic">
                          ({subject.chapter})
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                        <div className="w-full sm:w-32 lg:w-48">
                          <ProgressBar
                            currentLevel={subject.percentage}
                            progress={subject.percentage}
                            color={progressColor}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="ml-2 sm:ml-4 flex-shrink-0">
                      {openAccordion === subject.id ? (
                        <ArrowUp />
                      ) : (
                        <ArrowDown />
                      )}
                    </div>
                  </div>

                  {/* Accordion Content */}
                  {openAccordion === subject.id && (
                    <div className="border-t border-gray-200 bg-gray-50 p-3 sm:p-4 lg:p-6">
                      {/* Reading Section */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                            <BookIcon />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                            Reading Textbook / Video Tutorial
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          {subject.details.reading.description}
                        </p>
                        <ProgressBar
                          progress={subject.details.reading.percentage}
                          currentLevel={subject.details.reading.percentage}
                          color={progressColor}
                        />
                      </div>

                      {/* Exam Practice Section */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                            <ExamIcon2 />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                            Exam Practice
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          {subject.details.exam.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                          <div className="flex-1 w-full">
                            <ProgressBar
                              progress={subject.details.exam.percentage}
                              currentLevel={subject.details.exam.percentage}
                              color={progressColor}
                            />
                          </div>
                          <span className="font-semibold text-gray-700 text-sm sm:min-w-[4rem] text-center sm:text-left">
                            {subject.details.exam.score}
                          </span>
                        </div>
                      </div>

                      {/* Recommendations Section */}
                      <div className="bg-blue-50 p-3 sm:p-4 rounded-xl">
                        <div
                          className="flex items-center justify-between mb-3 cursor-pointer"
                          onClick={() => toggleRecommendations(subject.id)}
                        >
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                            Recommendation
                          </h4>
                          {openRecommendations[subject.id] ? (
                            <ArrowUp />
                          ) : (
                            <ArrowDown />
                          )}
                        </div>

                        {openRecommendations[subject.id] && (
                          <div className="space-y-2 sm:space-y-3">
                            {subject.details.recommendations.map(
                              (rec: RecommendationItem, index: number) => (
                                <div
                                  key={index}
                                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3 bg-white rounded-lg gap-2 sm:gap-3"
                                >
                                  <span className="text-gray-700 text-xs sm:text-sm flex-1">
                                    {rec.text}
                                  </span>
                                  <Button
                                    color="bg-blue-600"
                                    textColor="text-white"
                                    rounded="lg"
                                    className="text-xs sm:text-sm font-medium justify-center items-center w-full sm:w-auto px-3 sm:px-4 py-1 sm:py-2"
                                  >
                                    {rec.action}
                                  </Button>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAnalytics;
