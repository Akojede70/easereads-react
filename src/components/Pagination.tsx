import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;
    const ellipsis = "...";

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= maxPagesToShow) {
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
        pages.push(ellipsis);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - maxPagesToShow + 1) {
        pages.push(1);
        pages.push(ellipsis);
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(ellipsis);
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push(ellipsis);
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300"
      >
        Previous
      </button>
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-700">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;