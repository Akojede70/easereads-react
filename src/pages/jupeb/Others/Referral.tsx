import Layout from "../../../components/layout/layout";
import { useState } from "react";

const Referral = () => {
  const referralStats = {
    referralsMade: 30,
    pointsEarned: 300, // 30 referrals × 10 points each
  };

  const referralLink = "https://www.easereads.com/sign-up/nDaDy";
  const [toast, setToast] = useState({ show: false, message: "" });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      showToast("Link copied to clipboard!");
    } catch (err) {
      showToast("Failed to copy link. Please try again.");
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join EaseReads!",
          text: "Sign up with my referral link and start learning today!",
          url: referralLink,
        });
        showToast("Link shared successfully!");
      } catch (err) {
        showToast("Sharing canceled or failed.");
      }
    } else {
      showToast("Sharing not supported on this device. Copy the link instead!");
    }
  };

  const showToast = (message: any) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <Layout name="referrals">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto mb-10">
        {/* Toast Notification */}
        {toast.show && (
          <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base z-50 animate-fade-in">
            {toast.message}
          </div>
        )}

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Referral Points
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Invite your friends to join our platform. For every person you refer
            who successfully verifies their account, you'll earn{" "}
            <span className="font-bold text-green-600">10 points!</span> You can
            use these points to purchase any product on our site like textbooks,
            videos, etc.
          </p>
        </div>

        {/* Stats Section with Icons */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Referrals Made Card */}
            <div className="flex bg-[#fff] items-center justify-between rounded-3xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="bg-[#106EBE1A] p-3 rounded-full flex items-center mr-3 sm:mr-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      d="M8.33301 5.1875V6.75H6.77051V7.79167H8.33301V9.35417H9.37467V7.79167H10.9372V6.75H9.37467V5.1875H8.33301Z"
                      fill="#4F46E5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.77083 3.625C6.35643 3.625 5.959 3.78962 5.66598 4.08265C5.37295 4.37567 5.20833 4.7731 5.20833 5.1875V5.70833H3.125V15.6042H14.5833V5.70833H12.5V5.1875C12.5 4.7731 12.3354 4.37567 12.0424 4.08265C11.7493 3.78962 11.3519 3.625 10.9375 3.625H6.77083ZM10.9375 10.9167C11.3519 10.9167 11.7493 10.752 12.0424 10.459C12.3354 10.166 12.5 9.76857 12.5 9.35417V8.83333H13.5417V14.5625H10.9375V11.4375H6.77083V14.5625H4.16667V8.83333H5.20833V9.35417C5.20833 9.76857 5.37295 10.166 5.66598 10.459C5.959 10.752 6.35643 10.9167 6.77083 10.9167H10.9375ZM6.25 5.1875C6.25 5.04937 6.30487 4.91689 6.40255 4.81922C6.50022 4.72154 6.6327 4.66667 6.77083 4.66667H10.9375C11.0756 4.66667 11.2081 4.72154 11.3058 4.81922C11.4035 4.91689 11.4583 5.04937 11.4583 5.1875V9.35417C11.4583 9.4923 11.4035 9.62478 11.3058 9.72245C11.2081 9.82013 11.0756 9.875 10.9375 9.875H6.77083C6.6327 9.875 6.50022 9.82013 6.40255 9.72245C6.30487 9.62478 6.25 9.4923 6.25 9.35417V5.1875ZM4.16667 6.75H5.20833V7.79167H4.16667V6.75ZM13.5417 7.79167H12.5V6.75H13.5417V7.79167ZM9.89583 12.4792V14.5625H7.8125V12.4792H9.89583ZM15.625 15.0833C15.625 14.5308 15.8445 14.0009 16.2352 13.6102C16.6259 13.2195 17.1558 13 17.7083 13C18.2609 13 18.7908 13.2195 19.1815 13.6102C19.5722 14.0009 19.7917 14.5308 19.7917 15.0833C19.7917 15.6359 19.5722 16.1658 19.1815 16.5565C18.7908 16.9472 18.2609 17.1667 17.7083 17.1667C17.1558 17.1667 16.6259 16.9472 16.2352 16.5565C15.8445 16.1658 15.625 15.6359 15.625 15.0833ZM17.7083 14.0417C17.4321 14.0417 17.1671 14.1514 16.9718 14.3468C16.7764 14.5421 16.6667 14.8071 16.6667 15.0833C16.6667 15.3596 16.7764 15.6246 16.9718 15.8199C17.1671 16.0153 17.4321 16.125 17.7083 16.125C17.9846 16.125 18.2496 16.0153 18.4449 15.8199C18.6403 15.6246 18.75 15.3596 18.75 15.0833C18.75 14.8071 18.6403 14.5421 18.4449 14.3468C18.2496 14.1514 17.9846 14.0417 17.7083 14.0417ZM17.7083 17.6875C16.3177 17.6875 13.5417 18.449 13.5417 19.9604V21.3333H8.85417C8.47448 21.3333 8.22812 21.1964 8.07135 21.0198C7.90625 20.8339 7.8125 20.5714 7.8125 20.2917V18.424L9.5276 20.1391L10.2641 19.4026L7.29167 16.4302L4.31927 19.4026L5.05573 20.1391L6.77083 18.424V20.2917C6.77083 20.7932 6.9375 21.312 7.29323 21.712C7.65729 22.1214 8.19219 22.375 8.85417 22.375H21.875V19.9604C21.875 18.449 19.099 17.6875 17.7083 17.6875ZM14.7365 19.7016C14.5891 19.85 14.5833 19.9312 14.5833 19.9604V21.3333H20.8333V19.9604C20.8333 19.9312 20.8281 19.85 20.6802 19.7016C20.524 19.5437 20.2609 19.3714 19.8958 19.212C19.1604 18.8896 18.2604 18.7292 17.7083 18.7292C17.1562 18.7292 16.2562 18.8906 15.5208 19.2115C15.1557 19.3708 14.8932 19.5437 14.7365 19.7016Z"
                      fill="#4F46E5"
                    />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-500 ml-2 sm:ml-4">Referrals Made</p>
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                {referralStats.referralsMade}
              </p>
            </div>

            {/* Points Earned Card */}
            <div className="flex bg-[#fff] items-center justify-between rounded-3xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full flex items-center mr-3 sm:mr-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      d="M12.9997 18.209L14.6247 14.6465L18.208 13.0007L14.6247 11.3757L12.9997 7.79232L11.3643 11.3757L7.79135 13.0007L11.3643 14.6465L12.9997 18.209ZM9.0101 3.37565C10.2758 2.85476 11.631 2.58585 12.9997 2.58398C14.3643 2.58398 15.7184 2.85482 16.9893 3.37565C18.2497 3.89648 19.3955 4.66732 20.3643 5.63607C21.333 6.60482 22.1038 7.75065 22.6247 9.01107C23.1455 10.2819 23.4163 11.6361 23.4163 13.0007C23.4163 15.7611 22.3226 18.4173 20.3643 20.3652C19.3982 21.334 18.2503 22.1023 16.9865 22.6261C15.7226 23.1498 14.3678 23.4187 12.9997 23.4173C11.631 23.4155 10.2758 23.1465 9.0101 22.6257C7.74766 22.101 6.60086 21.3329 5.6351 20.3652C4.66637 19.3992 3.89805 18.2513 3.37428 16.9875C2.8505 15.7236 2.5816 14.3687 2.58301 13.0007C2.58301 10.2402 3.67676 7.58398 5.6351 5.63607C6.60385 4.66732 7.74968 3.89648 9.0101 3.37565ZM7.10385 18.8965C8.66635 20.459 10.7913 21.334 12.9997 21.334C15.208 21.334 17.333 20.459 18.8955 18.8965C20.458 17.334 21.333 15.209 21.333 13.0007C21.333 10.7923 20.458 8.66732 18.8955 7.10482C18.121 6.3312 17.2017 5.71775 16.1901 5.29951C15.1785 4.88128 14.0944 4.66646 12.9997 4.66732C10.7913 4.66732 8.66635 5.54232 7.10385 7.10482C6.33023 7.8793 5.71678 8.79861 5.29854 9.81024C4.88031 10.8219 4.66549 11.906 4.66635 13.0007C4.66635 15.209 5.54135 17.334 7.10385 18.8965Z"
                      fill="#10B981"
                    />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-500 ml-2 sm:ml-4">Points Earned</p>
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-green-600">
                {referralStats.pointsEarned}
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-[#fff] rounded-xl shadow-md p-4 sm:p-6 mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                1
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Share your unique referral link with your friends.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                2
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Your friend signs up and verifies their account.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                3
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                You receive 10 points automatically once their account is verified.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-indigo-100 text-indigo-600 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">
                4
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Use your points to purchase products on our site.
              </p>
            </li>
          </ul>
        </div>

        {/* Referral Link Section */}
        <div className="bg-[#fff] rounded-xl shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Referral Link
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:w-full">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 overflow-hidden lg:w-9/12">
              <p className="text-gray-700 text-sm sm:text-base truncate">{referralLink}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  ></path>
                </svg>
                Copy Link
              </button>
              <button
                onClick={shareLink}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Referral;