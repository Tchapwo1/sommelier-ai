import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Shell from "./ui/Shell";
import BottomNav from "./ui/BottomNav";

import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Result from "./pages/Result";
import PairWine from "./pages/PairWine";
import Saved from "./pages/Saved";
import Cellar from "./pages/Cellar";
import Profile from "./pages/Profile";
import Learn from "./pages/Learn";
import LearnDetail from "./pages/LearnDetail";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:name" element={<Cuisine />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/pair" element={<PairWine />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/cellar" element={<Cellar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:slug" element={<LearnDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div className="h-28" />
      <BottomNav />
    </Shell>
  );
}
