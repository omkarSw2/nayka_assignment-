import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex  justify-between ">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
