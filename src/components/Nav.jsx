import { Link } from "react-router-dom";
import GlobeIcon from "../assets/images/globe_icon.svg";
import HomeIcon from "../assets/images/home_icon.svg";

export default () => (
  <nav>
    <Link to="/">
      <HomeIcon />
    </Link>
    <Link to="/travel">
      <GlobeIcon />
    </Link>
  </nav>
);
