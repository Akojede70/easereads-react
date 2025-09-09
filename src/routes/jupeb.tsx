import { Routes, Route } from "react-router-dom";

import { JupebPages } from "../pages";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<JupebPages.Overview />} />
        <Route path="/textbook" element={<JupebPages.Textbook />} />
        <Route path="/topic/:id" element={<JupebPages.TopicSingle />} />
        <Route
          path="/topic/reader/:id"
          element={<JupebPages.DocumentReader />}
        />
      </Routes>
    </>
  );
};

export default AuthRoutes;
