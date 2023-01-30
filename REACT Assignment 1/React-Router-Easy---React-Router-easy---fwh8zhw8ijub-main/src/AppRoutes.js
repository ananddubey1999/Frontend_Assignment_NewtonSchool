import React from "react";
import { Route, Routes, Switch } from "react-router";
import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
