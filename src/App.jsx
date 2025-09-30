import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import All from "./Components/All";
import Tutorial from "./Components/Tutorial";
import Design from "./Components/Design";
import Development from "./Components/Development";
import Performance from "./Components/Performance";
import TypeScript from "./Components/TypeScript";
import NotFound from "./Pages/NotFound";
import { useEffect, useState } from "react";
import blogpost from "../src/data/blogPosts.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog setSearch={setSearch} />}>
          <Route index replace element={<Navigate to="all" />} />
          <Route path="all" element={<All post={post} />} />
          <Route path="Tutorial" element={<Tutorial />} />
          <Route path="Design" element={<Design />} />
          <Route path="Development" element={<Development />} />
          <Route path="Performance" element={<Performance />} />
          <Route path="TypeScript" element={<TypeScript />} />
        </Route>

        <Route path="Contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <NotFound message="The Page You are looking for Doesn' t exist" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
