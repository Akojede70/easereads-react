import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as pdfjs from "pdfjs-dist";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  SearchIcon,
  MenuIcon,
  CloseIcon,
} from "../../../assets/icon";
import { Button } from "../../../components/shared";
import { useSelector } from "react-redux";
import type { ReduxStore } from "../../../redux/store";
import {
  GetTextBookSectionByTextBookSectionId,
  GetSingleTextBookSectionByTextBookSectionChapterId,
} from "../../../service/textbook";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface Chapter {
  _id: string;
  chapterTitle: string;
}

const DocumentReader: React.FC = () => {
  const studentId = useSelector((state: ReduxStore) => state.auth.userId);
    const token = useSelector((state: ReduxStore) => state.auth.accessToken);
  const { bookId, sectionId } = useParams<{ bookId: string; sectionId: string }>();
  // PDF state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale] = useState<number>(1.0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<pdfjs.PDFDocumentProxy | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Chapter and URL state
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string>("");

  // Search state
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch section data and chapters
  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (!studentId || !bookId || !sectionId) {
          throw new Error("Student ID, Book ID, or Section ID is missing.");
        }
        const data = await GetTextBookSectionByTextBookSectionId(studentId, bookId, sectionId, token);
        setChapters(data.data.chapters);
        setPdfUrl(data.data.validUrl);
        setSelectedChapter(data.data.lastReadChapter?._id || "");
      } catch (err) {
        console.error("Error fetching section data:", err);
        setError("Failed to load section data. Please try again later.");
        setChapters([]);
        setPdfUrl("");
        setIsLoading(false);
      }
    };

    fetchSectionData();
  }, [studentId, bookId, sectionId]);

  // Fetch chapter data when selectedChapter changes
  useEffect(() => {
    const fetchChapterData = async () => {
      if (selectedChapter && selectedChapter !== "Select Chapter") {
        try {
          await GetSingleTextBookSectionByTextBookSectionChapterId(studentId, selectedChapter, token);
          // No need to update pdfUrl; continue using validUrl from initial response
        } catch (err) {
          console.error("Error fetching chapter data:", err);
          setError("Failed to load chapter data. Please try again later.");
        }
      }
    };

    fetchChapterData();
  }, [selectedChapter, studentId]);

  // Load PDF document
  useEffect(() => {
    const loadPdf = async () => {
      if (!pdfUrl) return;

      setIsLoading(true);
      setError(null);

      try {
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        setNumPages(pdf.numPages);
        pdfRef.current = pdf;
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading PDF:", err);
        setError("Failed to load the document. Please check if the PDF file exists.");
        setIsLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  // Render the current page
  const renderPage = async () => {
    if (!pdfRef.current || !canvasRef.current) return;

    try {
      const page = await pdfRef.current.getPage(currentPage);
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Set canvas dimensions
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Clear canvas
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } else {
        setError("Failed to get canvas context.");
      }
    } catch (err) {
      console.error("Error rendering page:", err);
      setError("Failed to render the page.");
    }
  };

  // Re-render when page changes
  useEffect(() => {
    if (pdfRef.current && !isLoading) {
      renderPage();
    }
  }, [currentPage, isLoading]);

  // Navigation functions
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= numPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(searchTerm);

    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
      setSearchTerm("");
    } else if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}\n(Text search not implemented in this demo)`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e as any);
    }
  };

  // Chapter selection
  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chapterId = e.target.value;
    setSelectedChapter(chapterId);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPreviousPage();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNextPage();
          break;
        case "Home":
          e.preventDefault();
          setCurrentPage(1);
          break;
        case "End":
          e.preventDefault();
          setCurrentPage(numPages);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, numPages]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Hamburger Menu */}
      <header className="px-4 sm:px-6 lg:px-8 xl:px-10 bg-white shadow-md p-4">
        {/* Mobile Header */}
        <div className="flex justify-between items-center lg:hidden">
          <div className="w-6 h-6"></div> {/* Spacer for balance */}
          <span className="text-lg font-semibold">Document Reader</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white border rounded-lg shadow-lg">
            <form onSubmit={handleSearch} className="relative mb-4">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search Page Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </form>

            <div className="relative mb-4">
              <select
                value={selectedChapter}
                onChange={handleChapterChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              >
                <option value="" disabled>
                  Select Chapter
                </option>
                {chapters.map((chapter) => (
                  <option key={chapter._id} value={chapter._id}>
                    {chapter.chapterTitle}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none">
                <ArrowDown />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                color="bg-blue-600"
                textColor="text-white"
                rounded="lg"
                className="px-4 py-2 hover:bg-blue-700 transition-colors items-center justify-center"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                color="bg-blue-600"
                textColor="text-white"
                rounded="lg"
                className="px-4 py-2 hover:bg-blue-700 transition-colors items-center justify-center"
                onClick={() => (window.location.href = "/practice-exams")}
              >
                Practice Exams
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4 flex-1">
            <form onSubmit={handleSearch} className="relative w-64">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search Page Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </form>

            <div className="relative w-48">
              <select
                value={selectedChapter}
                onChange={handleChapterChange}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              >
                <option value="" disabled>
                  Select Chapter
                </option>
                {chapters.map((chapter) => (
                  <option key={chapter._id} value={chapter._id}>
                    {chapter.chapterTitle}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none">
                <ArrowDown />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              color="bg-gray-100"
              textColor="text-gray-700"
              rounded="lg"
              className="px-4 py-2 hover:bg-gray-200 transition-colors items-center justify-center border border-gray-800 whitespace-nowrap"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              color="bg-blue-600"
              textColor="text-white"
              rounded="lg"
              className="px-4 py-2 hover:bg-blue-700 transition-colors items-center justify-center whitespace-nowrap"
              onClick={() => (window.location.href = "/practice-exams")}
            >
              Practice Exams
            </Button>
          </div>
        </div>
      </header>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-4 mt-4">
          <span className="block sm:inline">{error}</span>
          <button
            onClick={() => setError(null)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            ✕
          </button>
        </div>
      )}

      {/* Sub Header with Navigation */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 bg-white mx-4 rounded-lg shadow-sm mt-4 space-y-3 md:space-y-0">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 py-2 px-4 rounded-xl transition-colors w-full md:w-auto justify-center"
        >
          <ArrowLeft />
          <span className="ml-2">Back</span>
        </button>

        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage} of {numPages}
          </span>
        </div>

        <div className="flex flex-row gap-2 w-full md:w-auto justify-center">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage <= 1}
            color="bg-gray-100"
            textColor="text-gray-700"
            rounded="lg"
            className="flex items-center justify-center font-semibold gap-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto px-4 py-2 border border-gray-300"
          >
            <ArrowLeft />
            Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage >= numPages}
            color="bg-blue-600"
            textColor="text-white"
            rounded="lg"
            className="flex items-center justify-center font-semibold gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto px-4 py-2"
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && (
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
          <span className="ml-3 text-gray-600">Loading document...</span>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-hidden">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col mx-0 sm:mx-2 lg:mx-4">
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-gray-50">
            {!isLoading && !error && (
              <div className="border shadow-lg bg-white p-2 sm:p-4 rounded w-full max-w-xl">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto block mx-auto"
                  style={{
                    maxHeight: "80vh",
                    width: "auto",
                  }}
                />
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          {!isLoading && !error && (
            <div className="p-3 sm:p-4 bg-gray-50 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="flex items-center space-x-2 w-full md:w-auto justify-center md:justify-start">
                <span className="text-sm text-gray-600">Go to page:</span>
                <input
                  type="number"
                  min="1"
                  max={numPages}
                  value=""
                  placeholder={currentPage.toString()}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (!isNaN(page)) goToPage(page);
                  }}
                  className="w-16 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">of {numPages}</span>
              </div>

              <div className="flex flex-row gap-2 w-full md:w-auto justify-center">
                <Button
                  onClick={goToPreviousPage}
                  disabled={currentPage <= 1}
                  color="bg-gray-100"
                  textColor="text-gray-700"
                  rounded="lg"
                  className="flex items-center justify-center font-semibold gap-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 w-full sm:w-auto border border-gray-300"
                >
                  <ArrowLeft />
                  Previous
                </Button>
                <Button
                  onClick={goToNextPage}
                  disabled={currentPage >= numPages}
                  color="bg-blue-600"
                  textColor="text-white"
                  rounded="lg"
                  className="flex items-center justify-center font-semibold gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 w-full sm:w-auto"
                >
                  Next
                  <ArrowRight />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentReader;