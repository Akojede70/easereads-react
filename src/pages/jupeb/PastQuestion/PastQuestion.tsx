import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { Avatar2, Avatar1, CardImg } from "../../../assets/images";
import { SubjectCard } from "../../../components/card";
import { Button } from "../../../components/shared";
import SearchFilter from "../../../components/SearchFilter";
import Pagination from "../../../components/Pagination";
import { GetPastQuestionBystudentId } from "../../../service/textbook";
import { useSelector } from "react-redux";
import type { ReduxStore } from "../../../redux/store";

const PastQuestion = () => {
  const studentId = useSelector((state: ReduxStore) => state.auth.userId);
  const program = useSelector((state: ReduxStore) => state.auth.program);
  const [pastQuestions, setPastQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch past questions and derive filter options
  useEffect(() => {
    const fetchPastQuestions = async () => {
      try {
        setLoading(true);
        setError("");
        if (!studentId || !program) {
          throw new Error("Student ID or program is missing.");
        }
        const data = await GetPastQuestionBystudentId(studentId, program);
        const mappedPastQuestions = data.textbooks.map(
          (textbook: any, index: number) => ({
            id: index + 1,
            img: textbook.book.coverImage || CardImg,
            title: textbook.book.title,
            topics: textbook.book.firstDescription,
            rating: 10, // API doesn't provide, use dummy
            progress: textbook.streak?.progress || 20, // Use streak if available, else dummy
            avatars: [Avatar1, Avatar2, Avatar1], // Use dummy
            starRating: 4.5, // API doesn't provide, use dummy
            hasTaken: false, // API doesn't provide, use dummy
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
            category: textbook.book.subcategory, // For filtering
            bookId: textbook.book._id
          })
        );
        setPastQuestions(mappedPastQuestions);
      } catch (err) {
        console.error("Error fetching past questions:", err);
        setError("Failed to load past questions. Please try again later.");
        setPastQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPastQuestions();
  }, [studentId, program]);

  // Derive filter options from unique subcategories
  const filterOptions = [
    ...Array.from(new Set(pastQuestions.map((q: any) => q.category))).map(
      (category: string) => ({
        value: category,
        label: category,
      })
    ),
  ];

  // Filter logic
  const filteredPastQuestions = pastQuestions.filter((question: any) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? question.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPastQuestions.length / itemsPerPage);
  const paginatedPastQuestions = filteredPastQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout name="pastQuestion">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Past Question</p>
          <p className="text-base pt-2 pb-4">
            Practice exam questions and track your performance.
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

      <div className="mt-6 lg:mx-10">
        <SearchFilter
          placeholder="Search Past Questions"
          onSearchChange={setSearchTerm}
          onFilterChange={setSelectedCategory}
          filterOptions={filterOptions}
          filterLabel="Categories"
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
        {!loading && !error && filteredPastQuestions.length === 0 && (
          <p className="text-center text-gray-500">
            No past questions found for your search.
          </p>
        )}
        {!loading && filteredPastQuestions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-20">
            {paginatedPastQuestions.map((subject: any) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                variant="past-question"
                hasTaken={subject.hasTaken}
              />
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
      </div>
    </Layout>
  );
};

export default PastQuestion;
