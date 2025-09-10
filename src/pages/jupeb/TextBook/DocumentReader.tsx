import React, { useState, useEffect, useRef } from "react";
import * as pdfjs from "pdfjs-dist";
import Button from "../../../components/shared/button"; // Your Button component
import DummyPdf from "../../../assets/marvellous relocation_Letter.pdf";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  SearchIcon,
} from "../../../assets/icon";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const DocumentReader: React.FC = () => {
  // PDF state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale] = useState<number>(1.0); // Fixed scale, no zoom functionality
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search and chapter state
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedChapter, setSelectedChapter] = useState<string>("Select Chapter");
  const [chapters] = useState<string[]>([
    "Chapter 1: Introduction",
    "Chapter 2: Fundamentals",
    "Chapter 3: Advanced Topics",
    "Chapter 4: Applications",
    "Chapter 5: Conclusion"
  ]);

  // Load PDF document
  useEffect(() => {
    const loadPdf = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const loadingTask = pdfjs.getDocument(DummyPdf);
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
  }, []);

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
      context.clearRect(0, 0, canvas.width, canvas.height);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
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
      // Here you could implement text search within PDF
      alert(`Searching for: ${searchTerm}\n(Text search not implemented in this demo)`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  // Chapter selection
  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chapter = e.target.value;
    setSelectedChapter(chapter);
    
    // Map chapters to pages (this would come from your document structure)
    const chapterPageMap: { [key: string]: number } = {
      "Chapter 1: Introduction": 1,
      "Chapter 2: Fundamentals": Math.ceil(numPages * 0.2),
      "Chapter 3: Advanced Topics": Math.ceil(numPages * 0.4),
      "Chapter 4: Applications": Math.ceil(numPages * 0.6),
      "Chapter 5: Conclusion": Math.ceil(numPages * 0.8)
    };

    if (chapterPageMap[chapter]) {
      setCurrentPage(chapterPageMap[chapter]);
    }
  };

  // Keyboard navigation (no zoom controls)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPreviousPage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNextPage();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentPage(1);
          break;
        case 'End':
          e.preventDefault();
          setCurrentPage(numPages);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, numPages]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className=" px-40 bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="  flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search Page Number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
            />
          </form>

          {/* Select Chapter Dropdown */}
          <div className="relative">
            <select 
              value={selectedChapter}
              onChange={handleChapterChange}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
            >
              <option disabled>Select Chapter</option>
              {chapters.map((chapter) => (
                <option key={chapter} value={chapter}>
                  {chapter}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none">
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className="flex space-x-2 w-full md:w-auto justify-end">
          <Button
            color="#f3f4f6"
            textColor="#374151"
            width="auto"
            height="40px"
            borderRadius="16px"
            border="1px solid #333333"
            className="px-4 hover:bg-gray-200 transition-colors items-center justify-center"
            onClick={() => window.location.href = '/dashboard'}
          >
            Dashboard
          </Button>
          <Button
            color="#2563eb"
            textColor="#fff"
            width="auto"
            height="40px"
            borderRadius="16px"
            className="px-4 hover:bg-blue-700 transition-colors items-center justify-center"
            onClick={() => window.location.href = '/practice-exams'}
          >
            Practice Exams
          </Button>
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
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white mx-4 md:mx-40 rounded-lg shadow-sm mt-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-gray-700 hover:text-blue-600 border border-gray-300 py-1 px-4 rounded-2xl transition-colors"
        >
          <ArrowLeft />
          <span className="ml-2">Back</span>
        </button>

        <div className="flex items-center space-x-4 my-2 md:my-0">
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage} of {numPages}
          </span>
        </div>

        <div className="flex space-x-2">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage <= 1}
            color="#f3f4f6"
            textColor="#374151"
            width="150px"
            height="40px"
            borderRadius="16px"
            border="1px solid #333333"
            className="flex items-center justify-center font-semibold gap-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft />
            Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage >= numPages}
            color="#2563eb"
            textColor="#fff"
            width="150px"
            height="40px"
            borderRadius="16px"
            className="flex items-center justify-center font-semibold gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading document...</span>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-hidden mx-4 md:mx-40">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
          <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-gray-50">
            {!isLoading && !error && (
              <div className="border shadow-lg bg-white p-4 rounded">
                <canvas 
                  ref={canvasRef} 
                  className="max-w-full h-auto block"
                  style={{ 
                    maxHeight: '150vh'
                  }} 
                />
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          {!isLoading && !error && (
            <div className="p-4 bg-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Page input */}
              <div className="flex items-center space-x-2">
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

              {/* Navigation buttons */}
              <div className="flex space-x-2">
                <Button
                  onClick={goToPreviousPage}
                  disabled={currentPage <= 1}
                  color="#f3f4f6"
                  textColor="#374151"
                  width="150px"
                  height="40px"
                  borderRadius="16px"
                  border="1px solid #333333"
                  className="flex items-center justify-center font-semibold gap-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft />
                  Previous
                </Button>

                <Button
                  onClick={goToNextPage}
                  disabled={currentPage >= numPages}
                  color="#2563eb"
                  textColor="#fff"
                  width="150px"
                  height="40px"
                  borderRadius="16px"
                  className="flex items-center justify-center font-semibold gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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