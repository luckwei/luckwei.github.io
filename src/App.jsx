import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/404" element={<NotFound />} /> */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
    <Footer />
  </>
);
