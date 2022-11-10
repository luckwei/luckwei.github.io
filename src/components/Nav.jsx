import { Link } from "react-router-dom";
import globe_icon from "../assets/images/globe_icon.svg"
import home_icon from "../assets/images/home_icon.svg"

export default () => (
  <nav className="nav">
    <Link to="/"><img src={home_icon}/></Link>
    <Link to="/travel"><img src={globe_icon}/></Link>
    {/* <Link to="/404">NotFound</Link> */}
  </nav>
);
