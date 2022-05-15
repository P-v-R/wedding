import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage";


const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default RoutesTree