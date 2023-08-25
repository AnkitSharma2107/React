import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <ul className="ul">
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="li">
          <Link to="/contact">Contact</Link>
        </li> */}
        <li className="li">
          <Link to="/second">Second</Link>
        </li>
        <li className="li">
          <Link to="/props">Props</Link>
        </li>
        <li className="li">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="li">
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
