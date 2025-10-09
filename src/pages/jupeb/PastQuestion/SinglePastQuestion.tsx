import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar2, Avatar1, CardImg } from "../../../assets/images";
import { ArrowLeft, TextbookIcon } from "../../../assets/icon";
import { Button } from "../../../components/shared";
import { TopicCard } from "../../../components/card";
import SearchFilter from "../../../components/SearchFilter";
import Pagination from "../../../components/Pagination";
import { useSelector } from "react-redux";
import type { ReduxStore } from "../../../redux/store";
import { GetTextBookSectionByTextBookId } from "../../../service/textbook";

interface PastQuestionSingles {
  id: number;
  img: string;
  title: string;
  question: string;
  topics: string;
  rating: number;
  avatars: string[];
  practiceNumber: number;
}

const SinglePastQuestion = () => {
  const studentId = useSelector((state: ReduxStore) => state.auth.userId);
  const { bookId, textBookName } = useParams<{ bookId?: string; textBookName?: string }>();
  const [pastQuestionSingle, setPastQuestionSingle] = useState<PastQuestionSingles[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch past question sections
  useEffect(() => {
    const fetchPastQuestionSections = async () => {
      console.log(studentId)
      console.log(bookId)
      try {
        setLoading(true);
        setError("");
        if (!studentId || !bookId) {
          throw new Error("Student ID or Book ID is missing.");
        }
        const data = await GetTextBookSectionByTextBookId(studentId, bookId);
        const mappedSections: PastQuestionSingles[] = data.data.map((section: any, index: number) => ({
          id: index + 1,
          img: CardImg, // API doesn't provide image, use dummy
          title: section.sectionTitle,
          question: "50 questions", // API doesn't provide, use dummy
          topics: section.description,
          rating: 10, // API doesn't provide, use dummy
          avatars: [Avatar1, Avatar2, Avatar1], // Use dummy
          practiceNumber: section.view, // Use view as practiceNumber
          bookId: section.bookId,
          sectionId: section._id
        }));
        setPastQuestionSingle(mappedSections);
      } catch (err) {
        console.error("Error fetching past question sections:", err);
        setError("Failed to load past question sections. Please try again later.");
        setPastQuestionSingle([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPastQuestionSections();
  }, [studentId, bookId]);

  // Derive filter options from unique section codes
  const filterOptions = [
    { value: "", label: "All Sections" },
    ...Array.from(new Set(pastQuestionSingle.map((q) => q.section)))
      .filter((section): section is string => !!section)
      .map((section) => ({
        value: section,
        label: section,
      })),
  ];

  // Filter logic
  const filteredPastQuestions = pastQuestionSingle.filter((question) => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = selectedSection ? question.section === selectedSection : true;
    return matchesSearch && matchesSection;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPastQuestions.length / itemsPerPage);
  const paginatedPastQuestions = filteredPastQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 1. Header: Back Button (Responsive) */}
      <header className="w-full bg-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <Button
          color="bg-white"
          textColor="text-gray-800"
          rounded="full"
          className="w-auto sm:w-[108px] font-semibold flex items-center justify-center gap-1 border border-gray-800"
          onClick={() => window.history.back()}
        >
          <ArrowLeft />
          Back
        </Button>
      </header>

      {/* 2. Page Title + Textbook Badge (Stack on Mobile) */}
      <div className="px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          {textBookName || "Past Questions"}
        </h1>
        <div className="bg-[#25AF7C1A] rounded-full py-1 sm:py-2 px-3 sm:px-6 flex items-center gap-2 self-start sm:self-auto">
          <TextbookIcon />
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">
            Past Questions
          </h3>
        </div>
      </div>

      {/* 3. Subheading (Scale Text) */}
      <div className="px-4 sm:px-6 lg:px-10 mt-2 sm:mt-3">
        <p className="text-xs sm:text-sm text-gray-600">
          Practice JUPEB past questions covering all topics in sections 001/002/003 & 004
        </p>
      </div>

      {/* 4. Search Filter
      <div className="mt-6 lg:mx-10">
        <SearchFilter
          placeholder="Search Past Questions"
          onSearchChange={setSearchTerm}
          onFilterChange={setSelectedSection}
          filterOptions={filterOptions}
          filterLabel="Sections"
        />
      </div> */}

      {/* 5. Topics Grid (Responsive Columns) */}
      <main className="flex-grow px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
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
        {!loading && !error && filteredPastQuestions.length === 0 && (
          <p className="text-center text-gray-500">
            No past question sections found for your search.
          </p>
        )}
        {!loading && filteredPastQuestions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedPastQuestions.map((question) => (
              <TopicCard key={question.id} topic={question} />
            ))}
          </div>
        )}
        {filteredPastQuestions.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
};

export default SinglePastQuestion;