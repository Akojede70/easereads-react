import React, { useState, useEffect, useRef, type ChangeEvent } from 'react';
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const DocumentReader: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageInput, setPageInput] = useState<string>('1');
  const [outline, setOutline] = useState<any[]>([]);
  const [scale, setScale] = useState<number>(1.5);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string>('');

  // Load document and metadata
  useEffect(() => {
    const loadDocument = async () => {
      if (!docUrl) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Loading document from:', docUrl, 'Type:', fileType);
        
        if (fileType === 'pdf') {
          const loadingTask = pdfjs.getDocument(docUrl);
          const pdf = await loadingTask.promise;
          console.log('PDF loaded, numPages:', pdf.numPages);
          setNumPages(pdf.numPages);
          const outline = await pdf.getOutline();
          console.log('Outline loaded:', outline);
          setOutline(outline || []);
          pdfRef.current = pdf;
        } 
        else if (fileType === 'image') {
          setNumPages(1);
          setOutline([]);
        }
        else if (fileType === 'doc') {
          // For DOC/DOCX files, we can't render them directly
          setNumPages(1);
          setOutline([]);
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading document:', err);
        setError(err.message || 'Failed to load the document.');
        setIsLoading(false);
      }
    };
    
    loadDocument();
  }, [docUrl, fileType]);

  // Render the current page or image when ready
  useEffect(() => {
    if ((!isLoading && !error) && (pdfRef.current || fileType === 'image')) {
      renderContent();
    }
  }, [currentPage, isLoading, error, scale, fileType]);

  // Render the current page or image
  const renderContent = async () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not available');
      return;
    }

    try {
      if (fileType === 'pdf' && pdfRef.current) {
        const page = await pdfRef.current.getPage(currentPage);
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const context = canvas.getContext('2d');
        if (!context) {
          console.error('2D context not available');
          return;
        }
        const renderContext = { canvasContext: context, viewport };
        await page.render(renderContext);
        console.log('Page rendered:', currentPage);
      } else if (fileType === 'image') {
        const img = new Image();
        img.onload = () => {
          canvas.height = img.height * scale;
          canvas.width = img.width * scale;
          const context = canvas.getContext('2d');
          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
          console.log('Image rendered');
        };
        img.onerror = () => {
          throw new Error('Failed to load image');
        };
        img.src = docUrl;
      }
    } catch (err) {
      console.error('Error rendering content:', err);
      setError('Failed to render the content.');
    }
  };

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Reset state
      setError(null);
      setIsLoading(true);
      
      // Check file type
      const fileName = file.name.toLowerCase();
      let type = '';
      
      if (fileName.endsWith('.pdf')) {
        // Validate it's actually a PDF
        if (file.type !== 'application/pdf') {
          setError('Selected file is not a valid PDF');
          setIsLoading(false);
          return;
        }
        type = 'pdf';
      } 
      else if (fileName.match(/\.(jpg|jpeg|png)$/)) {
        type = 'image';
      }
      else if (fileName.match(/\.(docx|doc)$/)) {
        type = 'doc';
      }
      else {
        setError('Unsupported file type. Please upload a PDF, image, or Word document.');
        setIsLoading(false);
        return;
      }
      
      setFileType(type);
      setDocUrl(URL.createObjectURL(file));
    }
  };

  // Handle page input change
  const handlePageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  // Jump to page
  const jumpToPage = () => {
    const pageNum = parseInt(pageInput, 10);
    if (pageNum > 0 && pageNum <= numPages) {
      setCurrentPage(pageNum);
    } else {
      alert('Invalid page number');
    }
  };

  // Handle chapter selection
  const handleChapterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const dest = e.target.value;
    const pageNum = parseInt(dest, 10);
    if (pageNum && pageNum <= numPages) {
      setCurrentPage(pageNum);
    }
  };

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Next page
  const goToNextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  // Zoom in
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.5, 3));
  };

  // Zoom out
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.5, 0.5));
  };

  // Back button handler
  const handleBack = () => {
    window.history.back();
  };

  // Reset zoom to fit width
  const zoomToFit = () => {
    if (containerRef.current && canvasRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const canvasWidth = canvasRef.current.width;
      const newScale = (containerWidth / canvasWidth) * scale;
      setScale(Math.max(0.5, Math.min(newScale, 3)));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-700 hover:text-blue-600 self-start md:self-auto"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ml-2">Back</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <label htmlFor="file-upload" className="text-sm font-medium text-gray-700">
              Upload Document
            </label>
            <input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.docx,.doc"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {fileType !== 'doc' && (
            <>
              <div className="flex items-center space-x-2">
                <label htmlFor="page-search" className="text-sm font-medium text-gray-700">
                  Search Page Number
                </label>
                <input
                  id="page-search"
                  type="number"
                  value={pageInput}
                  onChange={handlePageInputChange}
                  className="w-20 p-2 border border-gray-300 rounded-md"
                  min="1"
                  max={numPages}
                />
                <button
                  onClick={jumpToPage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Go
                </button>
              </div>
              
              {outline.length > 0 && (
                <div className="flex items-center space-x-2">
                  <label htmlFor="chapter-select" className="text-sm font-medium text-gray-700">
                    Select Chapter
                  </label>
                  <select
                    id="chapter-select"
                    value={currentPage.toString()}
                    onChange={handleChapterChange}
                    className="p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">-- Select --</option>
                    {outline.map((item, index) => (
                      <option key={index} value={(item.dest && item.dest[0].num) || index + 1}>
                        {item.title || `Chapter ${index + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={zoomOut}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Zoom Out
                </button>
                <button
                  onClick={zoomToFit}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Fit Width
                </button>
                <span className="text-sm font-medium text-gray-700">{(scale * 100).toFixed(0)}%</span>
                <button
                  onClick={zoomIn}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Zoom In
                </button>
              </div>
            </>
          )}
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto justify-end">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 whitespace-nowrap">
            Dashboard
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 whitespace-nowrap">
            Practice Exams
          </button>
        </div>
      </header>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-4 mt-4" role="alert">
          <span className="block sm:inline">{error}</span>
          <button
            className="absolute top-0 right-0 p-3"
            onClick={() => setError(null)}
            aria-label="Close error message"
          >
            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}

      {/* Loading indicator */}
      {isLoading && !error && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-3">Loading document...</span>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-hidden">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
          {fileType === 'doc' && docUrl && (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="text-xl font-medium text-gray-700 mb-4">
                Word documents cannot be previewed directly
              </div>
              <a 
                href={docUrl} 
                download 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Download Document
              </a>
            </div>
          )}
          
          {(fileType === 'pdf' || fileType === 'image') && !isLoading && !error && (
            <>
              <div 
                ref={containerRef} 
                className="flex-1 overflow-auto"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
              >
                <div className="flex items-center justify-center p-4">
                  <canvas ref={canvasRef} />
                </div>
              </div>
              
              <div className="p-4 flex justify-between items-center border-t">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage <= 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Page {currentPage} of {numPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage >= numPages}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocumentReader;