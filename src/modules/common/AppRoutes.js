import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Homev2 from "../home/Homev2";
import Home2 from "../home/Home2";

export default function AppRoutes({ loading, setLoading }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home loading={loading} setLoading={setLoading} />}
      />
      <Route path="/2" element={<Homev2 />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
}
