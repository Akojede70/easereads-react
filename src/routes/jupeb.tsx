import { Routes, Route } from 'react-router-dom';

import { JupebPages } from '../pages';


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
      </Routes>
    </>
  )
};

export default AuthRoutes;