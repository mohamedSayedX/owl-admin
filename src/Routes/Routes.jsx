import React from "react";
import {Routes, Route} from "react-router-dom";
import {routes} from "./routesData";
import HomePage from "../pages/HomePage/HomaPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {routes.map((item) => {
          return <Route path={item?.path} element={item?.component} />;
        })}

        <Route path='*' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
