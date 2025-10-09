import { Routes, Route } from "react-router-dom";

import { JupebPages } from "../pages";

const AuthRoutes = () => {
  return (
    <>
      {/* Overview */}
      <Routes>
        <Route path="/overview" element={<JupebPages.Overview.Overview />} />
        <Route
          path="/leaderboard"
          element={<JupebPages.Overview.Leaderboard />}
        />

        {/* Exam */}
        <Route
          path="/exam-practice"
          element={<JupebPages.Exam.ExamPractice />}
        />
        <Route path="/exam-history" element={<JupebPages.Exam.ExamHistory />} />
        <Route
          path="/exam-instruction"
          element={<JupebPages.Exam.ExamInstruction />}
        />
        <Route path="/exam-form" element={<JupebPages.Exam.ExamForm />} />
        <Route path="/exam-question" element={<JupebPages.Exam.Question />} />
        <Route path="/exam-answer" element={<JupebPages.Exam.Answer />} />
        <Route
          path="/exam-solution-answer"
          element={<JupebPages.Exam.ExamsSolutionsAnswer />}
        />

        {/* TextBook */}
        <Route path="/textbook" element={<JupebPages.Textbook.Textbook />} />
        <Route
          path="/topic/:bookId/:textBookName"
          element={<JupebPages.Textbook.TopicSingle />}
        />
        <Route
          path="/topic/reader/:bookId/:sectionId"
          element={<JupebPages.Textbook.DocumentReader />}
        />
        <Route
          path="/past-question/reader/:bookId/:sectionId"
          element={<JupebPages.Textbook.DocumentReader />}
        />
        <Route
          path="/analytics/:id"
          element={<JupebPages.Textbook.ViewAnalytics />}
        />
        <Route
          path="/past-Question"
          element={<JupebPages.PastQuestion.PastQuestion />}
        />
        <Route
          path="/past-Question/single/:bookId/:textBookName"
          element={<JupebPages.PastQuestion.SinglePastQuestion />}
        />

        {/* Live Class */}
        <Route
          path="/live-class"
          element={<JupebPages.LiveClass.LiveClass />}
        />

        {/* Others */}
        <Route path="/help-center" element={<JupebPages.Others.HelpCenter />} />
        <Route
          path="/referral-points"
          element={<JupebPages.Others.Referral />}
        />
        <Route
          path="/user-profile"
          element={<JupebPages.Others.UserProfile />}
        />


        {/* Video Tutorial */}
         <Route path="/video-tutorial" element={<JupebPages.VideoTutorial.VideoTutorial />} />
          <Route
          path="/video-topics/:id"
          element={<JupebPages.VideoTutorial.TopicVideoSingle />}
        />
        <Route
          path="/topic/video-player/:id"
          element={<JupebPages.VideoTutorial.VideoPlayer />}
        />


        {/* Analytics */}
          <Route
          path="/analytics"
          element={<JupebPages.Analytics.Analytics/>}
        />
      </Routes>
    </>
  );
};

export default AuthRoutes;
