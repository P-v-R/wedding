import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Us from "./components/Us";
import Lagniappe from "./components/Lagniappe";
import Guide from "./components/Guide";

const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="us" element={<Us />} />
        <Route path="lagniappe" element={<Lagniappe />} />
        <Route path="guide" element={<Guide />} />
      </Routes>
    </div>
  );
};

export default RoutesTree;
