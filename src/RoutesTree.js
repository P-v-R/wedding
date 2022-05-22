import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage";
import Us from "./components/Us";


const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="us" element={<Us />} />
      </Routes>
    </div>
  )
}

export default RoutesTree