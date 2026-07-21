import { useContext } from "react";
import { Link } from "react-router";

import { AuthContext } from "../../context/AuthProvider";

import { FaBars, FaLock } from "react-icons/fa6";
import { FaHome, FaInfoCircle } from "react-icons/fa";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().catch((error) => console.log(error));
  };

  return (
    <div className="drawer">
      <input
        id="nav-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="nav-drawer"
                className="cursor-pointer text-2xl hover:text-yellow-500"
              >
                <FaBars />
              </label>

              <h2 className="hidden sm:block text-lg font-semibold">
                Home
              </h2>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="Solve JS"
                className="w-12 h-12 object-contain"
              />

              <h1 className="hidden sm:block text-3xl font-extrabold">
                Solve JS
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
                    <Link to="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link to="/topics">Topics</Link>
                  </li>

                  <li>
                    <button onClick={handleLogout}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/register"
                className="btn btn-warning"
              >
                Sign Up
              </Link>
            )}
          </div>
        </header>
      </div>

      {/* Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="nav-drawer"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-6 w-72 min-h-full bg-white">
          <h2 className="text-2xl font-bold mb-6">
            Menu
          </h2>

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
              <FaLock />
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