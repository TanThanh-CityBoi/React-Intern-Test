import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import React from "react";

const loading = (
  <div>
    <h1>Loading...</h1>
  </div>
);

// Containers
const TheContent = React.lazy(() =>
  import("../views/layout-components/TheContent")
);

const Routers = () => {
  return (
    // <React.Suspense fallback={loading}>

    <React.Suspense fallback={loading}>
      <Routes>
        <Route path="/" name="Trang chủ" element={<TheContent />}>
          <Route index name="Trang chủ" element={routes.commonRoute[0].element} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default Routers;
