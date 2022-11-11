import { Link } from "react-router-dom";
import globeIcon from "../assets/images/globe_icon.svg";
import homeIcon from "../assets/images/home_icon.svg";
import "../styles/components/Nav.module.css";

export default () => (
  <nav>
    <Link to="/">
      <img src={homeIcon} />
    </Link>
    <Link to="/travel">
      <img src={globeIcon} />
    </Link>
  </nav>
);
