import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";

export default function AppRoutes({ loading, setLoading }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home loading={loading} setLoading={setLoading} />}
      />
    </Routes>
  );
}
