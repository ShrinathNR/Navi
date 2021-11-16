import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navi</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/track">Track user</a>
      </div>
    </nav>
  );
};

export default Navbar;
