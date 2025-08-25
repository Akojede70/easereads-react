import { Routes, Route } from 'react-router-dom';

import { JupebPages } from '../pages';


const AuthRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path='/overview' element={<JupebPages.Overview  />} />
      
      </Routes>
    </>
  )
};

export default AuthRoutes;