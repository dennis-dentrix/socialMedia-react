import { Routes, Route } from "react-router-dom";
import { SearchPage, Home } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<SearchPage />} />
    </Routes>
  );
};
