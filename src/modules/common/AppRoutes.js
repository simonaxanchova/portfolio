import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./IndexPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
