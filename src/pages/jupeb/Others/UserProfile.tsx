import Layout from "../../../components/layout/layout";
import ProfileImg from "../../../assets/images/profile.jpg";
import { useState } from "react";
import {
  ArrowLeft,
  BronzeIcon,
  GoldIcon,
  SilverIcon,
} from "../../../assets/icon";
import { Button } from "../../../components/shared";
import { useNavigate } from "react-router-dom";

// Define the interface for form data
interface FormData {
  firstName: string;
  lastName: string;
  university: string;
  program: string;
  email: string;
  password: string;
}

const Profile = () => {
    const navigate = useNavigate();
  const [userRank, setUserRank] = useState<number>(1); // 1 = gold, 2 = silver, 3 = bronze
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "Emmanuel",
    lastName: "Kelvin",
    university: "Lagos state University",
    program: "JUPEB",
    email: "Emmanuelkevin2622@gmail.com",
    password: "••••••••••••••",
  });

  const getMedalComponent = (): JSX.Element => {
    switch (userRank) {
      case 1:
        return <GoldIcon />;
      case 2:
        return <SilverIcon />;
      case 3:
        return <BronzeIcon />;
      default:
        return <GoldIcon />;
    }
  };

  const getRankText = (): string => {
    switch (userRank) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return "1st";
    }
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected image:", file);
      // Handle image upload logic here
    }
  };

  const handleEdit = (field: string): void => {
    setEditingField(field);
  };

  const handleSave = (): void => {
    setEditingField(null);
  };

  const handleCancel = (): void => {
    setEditingField(null);
  };

  const handleInputChange = (field: string, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout name="profile">
      <div className="min-h-screen bg-gray-100 mb-10 sm:mb-20 lg:mb-40 overflow-y-auto">
        {/* Header: Back Button */}
        <header className="w-full bg-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          <Button
            color="bg-white"
            textColor="text-gray-800"
            rounded="full"
            className="w-auto sm:w-[108px] font-semibold flex items-center justify-center gap-1 border border-gray-800"
            onClick={() => navigate("/jupeb/overview")}
          >
            <ArrowLeft />
            Back
          </Button>
        </header>

        {/* Background Section */}
        <div
          className="relative max-w-4xl mx-auto h-48 sm:h-56 md:h-60 rounded-tl-2xl rounded-tr-2xl bg-fit bg-center"
          style={{ backgroundImage: `url(${ProfileImg})` }}
        >
          <div className="absolute inset-0 rounded-tl-2xl rounded-tr-2xl bg-blue-900 opacity-75"></div>
        </div>

        {/* Profile Image with Name, Progress Bar, and Medal */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-16 sm:left-8 md:left-1/4 transform lg:-translate-x-1/1 md:-translate-x-0 -translate-y-1/4">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
              <div className="w-full h-full bg-orange-200 rounded-full border-8 sm:border-12 md:border-20 border-white flex items-center justify-center overflow-hidden shadow-lg">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
              <label className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex items-center px-3 py-1 rounded-full bg-white text-blue-600 cursor-pointer hover:bg-blue-700 hover:text-white transition-colors shadow-lg">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                Edit
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between pt-40 sm:pt-20 md:pt-40 lg:pt-10 md:max-w-10/12 pb-6 px-4 sm:px-6 lg:max-w-3xl lg:items-center lg:mx-auto lg:mt-[-10px]">
            <div className="text-center md:text-left lg:ml-48">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {formData.firstName} {formData.lastName}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="flex-1 max-w-xs">
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div
                      className="bg-blue-600 h-2 sm:h-3 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  level 12
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 mt-4 md:mt-0">
              <div className="w-10 sm:w-12">{getMedalComponent()}</div>
              <span className="text-blue-600 font-semibold text-base sm:text-lg">
                {getRankText()}
              </span>
            </div>
          </div>
        </div>

        {/* Profile Details Form */}
        <div className="max-w-4xl mx-auto mt-8 px-4 sm:px-6">
          {/* Section 1: Personal Information */}
          <div className="bg-[#fff] rounded-4xl mb-4 border-1 border-[#E5E5E5E5]">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      First Name
                    </label>
                    {editingField === "firstName" ? (
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.firstName}
                      </p>
                    )}
                  </div>
                  {editingField !== "firstName" && (
                    <button
                      onClick={() => handleEdit("firstName")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Last Name
                    </label>
                    {editingField === "lastName" ? (
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.lastName}
                      </p>
                    )}
                  </div>
                  {editingField !== "lastName" && (
                    <button
                      onClick={() => handleEdit("lastName")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Academic Information */}
          <div className="bg-[#fff] rounded-4xl mb-4 border-1 border-[#E5E5E5E5]">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Academic Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Select University
                    </label>
                    {editingField === "university" ? (
                      <select
                        value={formData.university}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          handleInputChange("university", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="Lagos state University">
                          Lagos state University
                        </option>
                        <option value="University of Lagos">
                          University of Lagos
                        </option>
                        <option value="Covenant University">
                          Covenant University
                        </option>
                      </select>
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.university}
                      </p>
                    )}
                  </div>
                  {editingField !== "university" && (
                    <button
                      onClick={() => handleEdit("university")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Program
                    </label>
                    {editingField === "program" ? (
                      <select
                        value={formData.program}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          handleInputChange("program", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="JUPEB">JUPEB</option>
                        <option value="A-Levels">A-Levels</option>
                        <option value="Foundation">Foundation</option>
                      </select>
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.program}
                      </p>
                    )}
                  </div>
                  {editingField !== "program" && (
                    <button
                      onClick={() => handleEdit("program")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Account Information */}
          <div className="bg-[#fff] rounded-4xl mb-4 border-1 border-[#E5E5E5E5]">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Account Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email Address
                    </label>
                    {editingField === "email" ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.email}
                      </p>
                    )}
                  </div>
                  {editingField !== "email" && (
                    <button
                      onClick={() => handleEdit("email")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Password
                    </label>
                    {editingField === "password" ? (
                      <input
                        type="password"
                        placeholder="Enter new password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                      />
                    ) : (
                      <p className="text-gray-800 text-sm sm:text-base">
                        {formData.password}
                      </p>
                    )}
                  </div>
                  {editingField !== "password" && (
                    <button
                      onClick={() => handleEdit("password")}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          {editingField && (
            <div className="flex justify-end gap-3 mt-6 px-4 sm:px-6">
              <Button
                textColor="text-[#106EBE]"
                color="bg-[#fff]"
                onClick={handleCancel}
                rounded="xl"
                className="px-4 py-2 border border-[#106EBE] rounded-lg text-sm sm:text-base"
              >
                Cancel
              </Button>
              <Button
                rounded="xl"
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
              >
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
