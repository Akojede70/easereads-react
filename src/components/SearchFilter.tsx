// Search and Filter Component
import React, { useState } from "react"

interface SearchFilterProps {
  placeholder?: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: string) => void;
  filterOptions: { value: string; label: string }[];
  filterLabel?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  placeholder = "Search Textbook",
  onSearchChange,
  onFilterChange,
  filterOptions,
  filterLabel = "Subjects",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handleFilterSelect = (value: string) => {
    setSelectedFilter(value);
    onFilterChange(value);
    setIsDropdownOpen(false);
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearchChange("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
      {/* Search Input */}
      <div className="relative flex-1 ">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className="w-full h-12 pl-12 pr-10 bg-[#fff] border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        {searchValue && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      <div className="relative sm:w-48">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full h-12 px-4 bg-[#fff] border border-gray-200 rounded-lg text-sm text-gray-700 font-medium flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <span className="truncate">
            {selectedFilter
              ? filterOptions.find((opt) => opt.value === selectedFilter)?.label
              : filterLabel}
          </span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />
            <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
              <div className="py-1">
                <button
                  onClick={() => handleFilterSelect("")}
                  className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                    !selectedFilter
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  All {filterLabel}
                </button>
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleFilterSelect(option.value)}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                      selectedFilter === option.value
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchFilter