import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagesRoutes from './routes';
import { MainPages } from './pages';
import './root.css'


const Root = () => { 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  return (
    <Router>
      <Routes>
      <Route path='/' element={<MainPages.Login  />} />
      <Route path='/auth/*' element={<PagesRoutes.AuthRoutes  />} />
      <Route path='/jupeb/*' element={<PagesRoutes.JupebRoutes  />} />
      </Routes>
    </Router>
  );
};

export default Root;