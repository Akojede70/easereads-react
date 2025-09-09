import { Routes, Route } from 'react-router-dom';

import { JupebPages } from '../pages';


const AuthRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path='/overview' element={<JupebPages.Overview.Overview  />} />
        <Route path='/leaderboard' element={<JupebPages.Overview.Leaderboard  />} />
        <Route path='/exam-practice' element={<JupebPages.Overview.ExamPractice  />} />
      </Routes>
    </>
  )
};

export default AuthRoutes;