import { Routes, Route } from 'react-router-dom';

import { MainPages } from '../pages';


const AuthRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path='/login' element={<MainPages.Login  />} />
      <Route path='/sign-up' element={<MainPages.Signup  />} />
      <Route path='/auth/student' element={<MainPages.Student  />} />
      <Route path='/auth/verification' element={<MainPages.Verification  />} />
      <Route path='/auth/verified' element={<MainPages.Verified  />} />
      <Route path='/auth/reset-password' element={<MainPages.ResetPassword  />} />
      <Route path='/auth/reset-password-verification' element={<MainPages.PasswordVerification />} />
      <Route path='/auth/create-password' element={<MainPages.CreatePassword />} />
      <Route path='/auth/password-reset-successful' element={<MainPages.PasswordResetSuccessful />} />
      </Routes>
    </>
  )
};

export default AuthRoutes;