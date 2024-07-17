import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import HomePage from "../home/HomePage";

export default function AppRoutes({ loading, setLoading }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage loading={loading} setLoading={setLoading} />}
      />
    </Routes>
  );
}
