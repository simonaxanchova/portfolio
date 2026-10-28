import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homev2 from "../home/Homev2";
import Home2 from "../home/Home2";
import TestHome from "../home/TestHome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TestHome />} />
      <Route path="/2" element={<Homev2 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/test" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
