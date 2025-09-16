import { Routes, Route } from "react-router-dom";

import { JupebPages } from "../pages";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/overview' element={<JupebPages.Overview.Overview  />} />
        <Route path='/leaderboard' element={<JupebPages.Overview.Leaderboard  />} />
        <Route path='/exam-practice' element={<JupebPages.Exam.ExamPractice  />} />
        <Route path='/exam-history' element={<JupebPages.Exam.ExamHistory  />} />
        <Route path='/exam-instruction' element={<JupebPages.Exam.ExamInstruction  />} />
        <Route path='/exam-form' element={<JupebPages.Exam.ExamForm  />} />
        <Route path='/exam-question' element={<JupebPages.Exam.Question  />} />
        <Route path='/exam-answer' element={<JupebPages.Exam.Answer  />} />
        <Route path='/exam-solution-answer' element={<JupebPages.Exam.ExamsSolutionsAnswer  />} />
        <Route path="/textbook" element={<JupebPages.Textbook.Textbook />} />
        <Route path="/topic/:id" element={<JupebPages.Textbook.TopicSingle />} />
        <Route
          path="/topic/reader/:id"
          element={<JupebPages.Textbook.DocumentReader />}
        />
        <Route
          path="/past-question/reader/:id"
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
          path="/past-Question/single/:id"
          element={<JupebPages.PastQuestion.SinglePastQuestion />}
        />
      </Routes>
    </>
  );
};

export default AuthRoutes;
