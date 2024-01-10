import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-evenly bg-indigo-600 h-10">
        <li>
          <Link to="/login">
            <button className="bg-slate-400 px-3 mt-1 rounded-md hover:font-bold hover:bg-slate-300">
              Login
            </button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            {" "}
            <button className="bg-slate-400 px-3 mt-1 rounded-md hover:font-bold  hover:bg-slate-300">
              Signup
            </button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <button className="bg-slate-400 px-3 mt-1 rounded-md hover:font-bold  hover:bg-slate-300">
              DashBoard
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
