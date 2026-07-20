import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="SolveJS Logo"
                className="w-14 h-14 rounded-xl"
              />

              <h2 className="text-3xl font-bold text-white">
                SolveJS
              </h2>
            </div>

            <p className="leading-7 text-sm sm:text-base">
              Practice JavaScript through structured problem solving and
              improve your coding skills one challenge at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#F7DF1E] transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#F7DF1E] transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/topics"
                  className="hover:text-[#F7DF1E] transition duration-300"
                >
                  Topics
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#F7DF1E] transition duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                JavaScript Guide
              </li>

              <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                Learning Roadmap
              </li>

              <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                Practice Challenges
              </li>

              <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                Leaderboard
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <p className="text-sm sm:text-base">
              support@solvejs.dev
            </p>

            <div className="flex gap-5 mt-6 text-2xl">

              <a
                href="#"
                className="hover:text-[#F7DF1E] hover:scale-110 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-[#F7DF1E] hover:scale-110 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-[#F7DF1E] hover:scale-110 transition duration-300"
              >
                <FaFacebook />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} SolveJS. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Created by
            <span className="font-semibold text-white">
              Mohian Ahmed Auion
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;