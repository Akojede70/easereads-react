import { useState } from "react";
import {
  AttendedIcon,
  CalendarIcon,
  LiveIcon,
  MissedIcon,
  PlayIcon,
  PreviousIcon,
  StudyTime,
  TimeWhite,
  UpcomingIcon,
} from "../../../assets/icon";
import Layout from "../../../components/layout/layout";
import { Button } from "../../../components/shared";

// Define TypeScript interfaces
interface ClassItem {
  id: number;
  title: string;
  subject: string;
  duration: string;
  date: string;
  status: "starting-soon" | "upcoming" | "attended" | "missed" | "completed";
}

interface ClassCardProps {
  title: string;
  subject: string;
  duration: string;
  date: string;
  status: ClassItem["status"];
  onJoin: () => void;
  onWatchRecording: () => void;
}

interface Tab {
  id: string;
  label: string;
  icon: JSX.Element;
  mobileLabel: string;
}

// Class Card Component
const ClassCard: React.FC<ClassCardProps> = ({
  title,
  subject,
  duration,
  date,
  status,
  onJoin,
  onWatchRecording,
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case "starting-soon":
        return {
          bg: "bg-[#106EBE33]",
          text: "text-[#333333]",
          label: "Starting Soon",
          buttonType: "join",
        };
      case "upcoming":
        return {
          bg: "bg-[#106EBE33]",
          text: "text-[#333333]",
          label: "Upcoming",
          buttonType: "join",
        };
      case "attended":
        return {
          bg: "bg-[#4CB8514D]",
          text: "text-[#333333]",
          label: "Attended",
          buttonType: "recording",
        };
      case "missed":
        return {
          bg: "bg-[#FF000033]",
          text: "text-[#333333]",
          label: "Missed",
          buttonType: "recording",
        };
      case "completed":
        return {
          bg: "bg-[#4CB8514D]",
          text: "text-[#333333]",
          label: "Completed",
          buttonType: "recording",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          label: status,
          buttonType: null,
        };
    }
  };

  const statusConfig = getStatusConfig();

  const renderButton = () => {
    if (statusConfig.buttonType === "join") {
      return (
        <Button
          color="bg-blue-600"
          textColor="text-white"
          rounded="lg"
          fullWidth={true}
          className="px-4 py-2 md:px-6 md:py-3 font-medium text-sm transition-colors hover:bg-blue-700"
          onClick={onJoin}
        >
          Join
        </Button>
      );
    }

    if (statusConfig.buttonType === "recording") {
      return (
        <Button
          onClick={onWatchRecording}
          fullWidth={true}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          {/* <PlayIcon /> */}
          <span className="hidden sm:inline">Watch Recording</span>
          <span className="sm:hidden">Watch</span>
        </Button>
      );
    }

    return null;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Class info section */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">{subject}</p>
            </div>

            <div className="space-y-7">
              <div
                className={`px-3 py-1 w-fit rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`}
              >
                {statusConfig.label}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <StudyTime />
                <span>{duration}</span>
              </div>
            </div>

            <div className="flex flex-col justify-end  h-full">
              <div className="items-end">
                <div className="flex items-center gap-1 text-sm ">
                  <CalendarIcon />
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="w-full lg:w-auto flex justify-end">
          <div className="w-full sm:w-40">{renderButton()}</div>
        </div>
      </div>
    </div>
  );
};

// Class Tabs Component
const ClassTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  const tabs: Tab[] = [
    {
      id: "upcoming",
      label: "Upcoming Class",
      mobileLabel: "Upcoming",
      icon: <UpcomingIcon />,
    },
    {
      id: "attended",
      label: "Class Attended",
      mobileLabel: "Attended",
      icon: <AttendedIcon />,
    },
    {
      id: "missed",
      label: "Missed Class",
      mobileLabel: "Missed",
      icon: <MissedIcon />,
    },
    {
      id: "previous",
      label: "Previous Class",
      mobileLabel: "Previous",
      icon: <PreviousIcon />,
    },
  ];

  // Sample data for different tabs
  const classData: Record<string, ClassItem[]> = {
    upcoming: [
      {
        id: 1,
        title: "Organic Chemistry part II",
        subject: "Chemistry Class",
        duration: "45mins",
        date: "Friday Sep 26th, 2025",
        status: "starting-soon",
      },
      {
        id: 2,
        title: "Organic Chemistry part II",
        subject: "Chemistry Class",
        duration: "45mins",
        date: "Friday Sep 26th, 2025",
        status: "upcoming",
      },
      {
        id: 3,
        title: "Organic Chemistry part II",
        subject: "Chemistry Class",
        duration: "45mins",
        date: "Friday Sep 26th, 2025",
        status: "upcoming",
      },
    ],
    attended: [
      {
        id: 4,
        title: "Organic Chemistry part I",
        subject: "Chemistry Class",
        duration: "45mins",
        date: "Wednesday Sep 24th, 2025",
        status: "attended",
      },
      {
        id: 5,
        title: "Introduction to Biology",
        subject: "Biology Class",
        duration: "60mins",
        date: "Monday Sep 22nd, 2025",
        status: "attended",
      },
    ],
    missed: [
      {
        id: 6,
        title: "Advanced Mathematics",
        subject: "Math Class",
        duration: "50mins",
        date: "Tuesday Sep 23rd, 2025",
        status: "missed",
      },
    ],
    previous: [
      {
        id: 7,
        title: "Physics Fundamentals",
        subject: "Physics Class",
        duration: "45mins",
        date: "Friday Sep 19th, 2025",
        status: "completed",
      },
      {
        id: 8,
        title: "History of Science",
        subject: "History Class",
        duration: "40mins",
        date: "Thursday Sep 18th, 2025",
        status: "completed",
      },
    ],
  };

  const handleJoinClass = (classId: number) => {
    console.log(`Joining class with ID: ${classId}`);
    // Add your join class logic here
  };

  const handleWatchRecording = (classId: number) => {
    console.log(`Watching recording for class with ID: ${classId}`);
    // Add your watch recording logic here
  };

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="bg-[#E8E6E6] p-1 rounded-2xl lg:rounded-[50px] mb-6">
        <div className="flex flex-col sm:flex-row gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl lg:rounded-4xl font-medium text-sm transition-all duration-200 flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span
                className={
                  activeTab === tab.id ? "text-gray-900" : "text-gray-500"
                }
              >
                {tab.icon}
              </span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.mobileLabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {classData[activeTab]?.length > 0 ? (
          <div>
            {classData[activeTab].map((classItem) => (
              <ClassCard
                key={classItem.id}
                title={classItem.title}
                subject={classItem.subject}
                duration={classItem.duration}
                date={classItem.date}
                status={classItem.status}
                onJoin={() => handleJoinClass(classItem.id)}
                onWatchRecording={() => handleWatchRecording(classItem.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <div className="mb-4">
              {tabs.find((tab) => tab.id === activeTab)?.icon}
            </div>
            <p className="text-lg font-medium mb-2">No classes found</p>
            <p className="text-sm text-center">
              You don't have any {activeTab} classes at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const LiveClass: React.FC = () => {
  return (
    <Layout name="liveClass">
      {/* Header Section */}
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Live Class</h1>
          <p className="text-base pt-2 pb-2 lg:pb-4">
            Attend online classes of your preferred subject
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="w-full sm:w-auto">
            <Button
              color="bg-green-500"
              textColor="text-white"
              rounded="lg"
              fullWidth={true}
              className="h-12 sm:w-48 w-[140px]"
            >
              Whatsapp Community
            </Button>
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="date"
              className="border border-[#E5E5E5] px-4 py-2 rounded-[20px] w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Select date"
              aria-label="Select date"
            />
          </div>
        </div>
      </div>

      {/* Live Class Banner */}
      <div className="bg-[#FF0808] px-4 sm:px-6 mx-4 sm:mx-6 rounded-lg h-auto sm:h-[130px] flex items-center py-4 sm:py-0 mt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-start">
              <LiveIcon />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">
                Organic Chemistry part II
              </h2>
              <p className="text-white/80 text-sm sm:text-lg mt-1">
                Chemistry Class
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/90 ml-0 sm:ml-4">
            <div className="rounded-full flex items-center justify-center">
              <TimeWhite />
            </div>
            <span className="text-sm sm:text-lg">Ongoing Class</span>
          </div>

          <div className="w-full sm:w-auto">
            <Button
              color="bg-white"
              textColor="text-[#FF0808]"
              fullWidth={true}
              rounded="lg"
              className="px-4 py-3 font-semibold text-sm hover:bg-gray-50 transition-colors w-full sm:w-32"
            >
              Join
            </Button>
          </div>
        </div>
      </div>

      {/* Class Tabs Section */}
      <div className="px-4 sm:px-6 lg:px-10 mt-8 mb-10">
        <ClassTabs />
      </div>
    </Layout>
  );
};

export default LiveClass;
