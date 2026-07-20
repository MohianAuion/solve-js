import { Link } from "react-router";
import { FaBars } from "react-icons/fa6";
import { FaHome, FaInfoCircle, FaLock } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // Change to true after Firebase authentication
  const isLoggedIn = false;

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="nav-drawer"
                className="cursor-pointer text-2xl md:text-3xl hover:text-yellow-500 transition"
              >
                <FaBars />
              </label>

              <h2 className="hidden sm:block text-lg md:text-xl font-semibold">
                Home
              </h2>
            </div>

            {/* Center Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
            >
              <img
                src={logo}
                alt="SolveJS"
                className="h-10 sm:h-15 md:h-14 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Right */}
            {isLoggedIn ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                  />

                  <span className="hidden md:block font-semibold">
                    Auion
                  </span>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-xl mt-3 w-56 p-2 shadow-lg"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <button>Sign Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/register"
                className="btn bg-[#F7DF1E] hover:bg-yellow-400 text-black border-none rounded-xl px-5"
              >
                Sign Up
              </Link>
            )}
          </div>
        </header>
      </div>

      {/* Drawer */}
      <div className="drawer-side z-50">
        <label
          htmlFor="nav-drawer"
          aria-label="Close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-6 w-72 min-h-full bg-white">

          {/* Drawer Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="SolveJS"
              className="h-16 w-auto"
            />
          </div>

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
              to={isLoggedIn ? "/topics" : "/register"}
              className={!isLoggedIn ? "text-gray-500" : ""}
            >
              <FaLock />
              {isLoggedIn ? "Topics" : "Topics (Locked)"}
            </Link>
          </li>

          {isLoggedIn && (
            <>
              <div className="divider"></div>

              <li>
                <button>Sign Out</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;