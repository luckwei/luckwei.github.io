import { Link } from "react-router-dom";
import globeIcon from "../assets/images/globe_icon.svg"
import homeIcon from "../assets/images/home_icon.svg"

export default () => (
  <nav className="nav">
    <Link to="/"><img src={homeIcon}/></Link>
    <Link to="/travel"><img src={globeIcon}/></Link>
    {/* <Link to="/404">NotFound</Link> */}
  </nav>
);
