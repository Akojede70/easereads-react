import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PagesRoutes from './routes';
import { MainPages } from './pages';
import './root.css'


const Root = () => { 


  
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  return (
    <Router>
      <Routes>
      <Route path='/login' element={<MainPages.Login  />} />
      <Route path='/sign-up' element={<MainPages.Signup  />} />
      <Route path='/student' element={<MainPages.Student  />} />
      <Route path='/verification' element={<MainPages.Verification  />} />
      <Route path='/verified' element={<MainPages.Verified  />} />
      <Route path='/reset-password' element={<MainPages.ResetPassword  />} />
      <Route path='/reset-password-verification' element={<MainPages.PasswordVerification />} />
      <Route path='/create-password' element={<MainPages.CreatePassword />} />
      <Route path='/password-reset-successful' element={<MainPages.PasswordResetSuccessful />} />
     
      </Routes>
    </Router>
  );
};

export default Root;

