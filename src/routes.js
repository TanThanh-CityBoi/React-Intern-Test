import React from "react";

const Homepage = React.lazy(() => import("./views/pages/home/Home"));

const commonRoute = [
  { path: "/trang-chu", name: "Trang chủ", element: <Homepage /> }
];


const routes = {
  commonRoute,
};

export default routes;
