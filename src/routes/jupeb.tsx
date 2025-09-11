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
        <Route
          path="/past-question/reader/:id"
          element={<JupebPages.DocumentReader />}
        />
        <Route
          path="/analytics/:id"
          element={<JupebPages.ViewAnalytics />}
        />
        <Route
          path="/past-Question"
          element={<JupebPages.PastQuestion />}
        />
        <Route
          path="/past-Question/single/:id"
          element={<JupebPages.SinglePastQuestion />}
        />
      </Routes>
    </>
  );
};

export default AuthRoutes;
