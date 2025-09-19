import Layout from "../../../components/layout/layout";
import HelpCenterImg from "../../../assets/images/Helpcenter.svg";
import { Button } from "../../../components/shared";

const HelpCenter = () => {
  return (
    <Layout name="helpCenter">
      <div className="min-h-screen bg-gray-100">
        {/* Background Section - Full width and proper height */}
        <div
          className="relative w-full h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${HelpCenterImg})` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
          <div className="relative z-10 container mx-auto px-4 py-12 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Help Center</h1>
            <p className="text-sm sm:text-base mb-6 max-w-5xl">
              Invite your friends to join our platform. For every person you refer
              who successfully verifies their account, you'll earn{" "}
              <span className="text-yellow-400 font-semibold">10 points!</span> You
              can use these points to purchase any product on our site like
              textbooks, videos etc.
            </p>
          </div>
        </div>

        {/* Content Section with overlapping cards */}
        <div className="container mx-auto px-4 -mt-20 relative z-20">
          {/* Contact Cards - Overlapping the background */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-lg text-center shadow-lg overflow-hidden">
              <div className="bg-blue-50 p-4 flex flex-col items-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-xs sm:text-sm font-medium text-gray-700">Mail</p>
              </div>
              <div className="p-4">
                <p className="text-xs sm:text-sm text-gray-600">Emmanuelkevin262@gmail.com</p>
              </div>
            </div>
            <div className="bg-white rounded-lg text-center shadow-lg overflow-hidden">
              <div className="bg-blue-50 p-4 flex flex-col items-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <p className="text-xs sm:text-sm font-medium text-gray-700">Phone number</p>
              </div>
              <div className="p-4">
                <p className="text-xs sm:text-sm text-gray-600">+234 7053953519</p>
              </div>
            </div>
            <div className="bg-white rounded-lg text-center shadow-lg overflow-hidden">
              <div className="bg-blue-50 p-4 flex flex-col items-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.690z"></path>
                </svg>
                <p className="text-xs sm:text-sm font-medium text-gray-700">WhatsApp</p>
              </div>
              <div className="p-4">
                <a
                  href="https://wa.me/2347053953519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xs sm:text-sm hover:underline"
                >
                  Click to Join
                </a>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
              Feedback and Suggestion
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 text-gray-700">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 p-2 rounded-lg border border-gray-300 text-black"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-full pl-10 p-2 rounded-lg border border-gray-300 text-black"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 text-gray-700">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-2 left-0 pl-3 flex items-start pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  </div>
                  <textarea
                    className="w-full pl-10 p-2 rounded-lg border border-gray-300 text-black h-24 resize-none"
                    placeholder="Typing..."
                  ></textarea>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full  text-white p-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;