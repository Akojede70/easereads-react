import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { MiniCard } from "../../../components/card";
import { SubjectCard } from "../../../components/card";
import {
  DayStreak,
  ExamTaken,
  SmallVideo,
  StudyTime,
} from "../../../assets/icon";
import { Avatar2, Avatar1, CardImg } from "../../../assets/images";
import { Button } from "../../../components/shared";
import SearchFilter from "../../../components/SearchFilter";
import { GetTextBookBystudentId } from "../../../service/textbook";
import { useSelector } from "react-redux";
import type { ReduxStore } from "../../../redux/store";
import Pagination from "../../../components/Pagination";

const Textbook = () => {
  const studentId = useSelector((state: ReduxStore) => state.auth.userId);
    const token = useSelector((state: ReduxStore) => state.auth.accessToken);
  const program = useSelector((state: ReduxStore) => state.auth.program);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust as needed

  // Sample chapters for dropdown (unchanged as per your instruction)
  const chapters = [
    { value: "chapter1", label: "Chapter 1: Introduction" },
    { value: "chapter2", label: "Chapter 2: Cell Biology" },
    { value: "chapter3", label: "Chapter 3: Genetics" },
    { value: "chapter4", label: "Chapter 4: Evolution" },
    { value: "chapter5", label: "Chapter 5: Ecology" },
  ];

  // Fetch textbooks on component mount
  useEffect(() => {
    const fetchTextbooks = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await GetTextBookBystudentId(studentId, program);
        const mappedSubjects = data.textbooks.map((textbook: any, index: any) => ({
          id: index + 1,
          img: textbook.book.coverImage || CardImg,
          title: textbook.book.title,
          isExpired: textbook.subscription.status === "expired",
          daysLeft:
            textbook.subscription.status !== "expired"
              ? Math.max(
                  0,
                  Math.ceil(
                    (new Date(textbook.subscription.endDate).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                )
              : undefined,
          topics: textbook.book.firstDescription,
          rating: 10,
          progress: textbook.streak?.progress || 0,
          avatars: [Avatar1, Avatar2],
          starRating: 4.0,
          bookId: textbook.book._id
        }));
        setSubjects(mappedSubjects);
      } catch (err) {
        console.error("Error fetching textbooks:", err);
        setError("Failed to load textbooks. Please try again later.");
        setSubjects([]);
      } finally {
        setLoading(false);
      }
    };

    if (studentId && program) {
      fetchTextbooks();
    } else {
      setError("User ID or program is missing.");
      setSubjects([]);
      setLoading(false);
    }
  }, [studentId, program]);

  // Filter logic
  const filteredSubjects = subjects.filter((subject) =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage);
  const paginatedSubjects = filteredSubjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout name="textBook">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Overview</p>
          <p className="text-base pt-2 pb-4">
            Hi Emmanuel Kelvin, here’s your progress today!
          </p>
        </div>
        <div className="pb-4 sm:pb-0">
          <Button
            color="bg-green-500"
            textColor="text-white"
            rounded="full"
            className="sm:w-[227px] h-12"
          >
            Whatsapp Community
          </Button>
        </div>
      </div>

      <div className="pl-[3%] md:ml-0 md:flex flex-wrap gap-[20px] mt-[20px]">
        <MiniCard icon={SmallVideo} title="Total Textbooks" value={5} />
        <MiniCard icon={ExamTaken} title="Completed" value={2} />
        <MiniCard icon={StudyTime} title="Read Time" value="50m" />
        <MiniCard icon={DayStreak} title="Progress" value="40%" />
      </div>

      <div className="mt-6 lg:mx-10">
        <SearchFilter
          placeholder="Search Textbook"
          onSearchChange={setSearchTerm}
          onFilterChange={setSelectedChapter}
          filterOptions={chapters}
          filterLabel="Chapters"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-10 py-6">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <svg
              className="animate-spin h-12 w-12 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && !error && filteredSubjects.length === 0 && (
          <p className="text-center text-gray-500">
            No textbooks found for your search.
          </p>
        )}
        {!loading && filteredSubjects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-20">
            {paginatedSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                variant="textbook"
              />
            ))}
          </div>
        )}
        {filteredSubjects.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </Layout>
  );
};

export default Textbook;