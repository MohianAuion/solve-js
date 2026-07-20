import { Link } from "react-router";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <IoLogoJavascript className="text-5xl text-[#F7DF1E]" />

              <h2 className="text-3xl font-bold text-white">
                Solve JS
              </h2>
            </div>

            <p className="leading-8">
              Practice JavaScript through structured
              problem solving and improve your coding
              skills one challenge at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/register">Topics</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>JavaScript Guide</li>
              <li>Learning Roadmap</li>
              <li>Practice Challenges</li>
              <li>Leaderboard</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <p>support@solvejs.dev</p>

            <div className="flex gap-4 mt-6 text-2xl">
              <a href="#">
                <FaGithub className="hover:text-[#F7DF1E] transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-[#F7DF1E] transition" />
              </a>

              <a href="#">
                <FaFacebook className="hover:text-[#F7DF1E] transition" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Solve JS. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;