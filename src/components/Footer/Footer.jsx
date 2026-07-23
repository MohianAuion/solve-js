import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-[#111111] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-14">

          {/* Top */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">
              Solve<span className="text-[#F7DF1E]">JS</span>?
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl leading-8">
              Learn JavaScript by solving real coding challenges.
              Build logic, improve problem solving, and prepare for
              interviews — one topic at a time.
            </p>
          </div>

          {/* Middle */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-14">

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-[#F7DF1E]">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#F7DF1E] transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#F7DF1E] transition"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/topics"
                    className="hover:text-[#F7DF1E] transition"
                  >
                    Topics
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="hover:text-[#F7DF1E] transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-[#F7DF1E]">
                Resources
              </h3>

              <ul className="space-y-3">
                <li className="hover:text-[#F7DF1E] cursor-pointer transition">
                  JavaScript Guide
                </li>

                <li className="hover:text-[#F7DF1E] cursor-pointer transition">
                  Interview Q&amp;A
                </li>

                <li className="hover:text-[#F7DF1E] cursor-pointer transition">
                  Practice Problems
                </li>

                <li className="hover:text-[#F7DF1E] cursor-pointer transition">
                  Learning Roadmap
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-[#F7DF1E]">
                Community
              </h3>

              <ul className="space-y-3">
                <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                  Discussions
                </li>

                <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                  Updates
                </li>

                <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                  Leaderboard
                </li>

                <li className="hover:text-[#F7DF1E] transition cursor-pointer">
                  Coming Soon...
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-[#F7DF1E]">
                Follow Us
              </h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#F7DF1E] hover:text-black transition text-xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#F7DF1E] hover:text-black transition text-xl"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#F7DF1E] hover:text-black transition text-xl"
                >
                  <FaFacebook />
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                More features are coming soon 🚀
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} SolveJS. All Rights Reserved.
            </p>

            <p className="text-sm text-gray-400">
              Created By{" "}
              <span className="text-white font-semibold">
                Mohian Ahmed Auion
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-300 text-black shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
};

export default Footer;