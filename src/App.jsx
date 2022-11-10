import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Travel from "./pages/Travel";

export default () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travel" element={<Travel/>} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
    <Footer />
  </>
);
