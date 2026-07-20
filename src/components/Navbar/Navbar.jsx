import { Link } from "react-router";
import { FaBars, FaLock } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {
  // Temporary state
  // Change to true later after Firebase login
  const isLoggedIn = false;

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="nav-drawer"
                className="cursor-pointer text-3xl hover:text-yellow-500 transition"
              >
                <FaBars />
              </label>

              <h2 className="text-xl font-semibold">Home</h2>
            </div>

            {/* Center */}
            <Link to="/" className="flex items-center gap-2">
              <IoLogoJavascript className="text-5xl text-[#F7DF1E]" />

              <h1 className="text-4xl font-extrabold tracking-tight">
                Solve JS
              </h1>
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
                    className="w-11 h-11 rounded-full border-2 border-yellow-400"
                  />

                  <span className="font-semibold">Auion</span>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
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
                className="btn bg-[#F7DF1E] hover:bg-yellow-400 text-black border-none"
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

        <ul className="menu p-6 w-72 min-h-full bg-white text-base-content">
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