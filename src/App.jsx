import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Education from "./pages/Education";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);
