import { useContext } from "react";
import { Link, useLocation } from "react-router";

import { AuthContext } from "../../context/AuthProvider";

import { FaBars, FaLock } from "react-icons/fa6";
import { FaHome, FaInfoCircle, FaUnlock } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout().catch((error) => console.log(error));
  };

  const getPageTitle = () => {
    const path = location.pathname;

    if (path === "/") return "Home";
    if (path === "/about") return "About";
    if (path === "/topics") return "Topics";
    if (path === "/register") return "Register";
    if (path === "/login") return "Login";

    if (path.includes("/theory")) return "Theory";
    if (path.includes("/questions")) return "Interview Questions";
    if (path.includes("/problem-solving")) return "Problem Solving";
    if (path.includes("/problem/")) return "Problem Details";

    return "SolveJS";
  };

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="nav-drawer"
                className="cursor-pointer text-2xl hover:text-yellow-500 transition"
              >
                <FaBars />
              </label>

              {/* Dynamic Page Title */}
              <h2 className="hidden sm:block text-xl font-extrabold text-red-600">
                {getPageTitle()}
              </h2>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-3xl font-extrabold">
                Solve<span className="text-yellow-400">JS</span>?
              </h1>
            </Link>

            {/* Right */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={
                      user?.photoURL ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    alt="User"
                    className="w-11 h-11 rounded-full border-2 border-yellow-400 object-cover"
                  />

                  <span className="hidden md:block font-semibold">
                    {user?.displayName || "User"}
                  </span>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-56 mt-3 p-2 shadow"
                >
                  <li>
                    <Link to="/topics">Topics</Link>
                  </li>

                  <li>
                    <button onClick={handleLogout}>Sign Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/register" className="btn btn-warning">
                Sign Up
              </Link>
            )}
          </div>
        </header>
      </div>

      {/* Drawer */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>

        <ul className="menu p-6 w-72 min-h-full bg-white">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link to="/about">
              <FaInfoCircle />
              About
            </Link>
          </li>

          <div className="divider"></div>

          <li>
            <Link
              to={user ? "/topics" : "/register"}
              className={!user ? "text-gray-500" : ""}
            >
              {user ? <FaUnlock /> : <FaLock />}
              {user ? "Topics" : "Topics (Locked)"}
            </Link>
          </li>

          {user && (
            <>
              <div className="divider"></div>

              <li>
                <button onClick={handleLogout}>
                  Sign Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;