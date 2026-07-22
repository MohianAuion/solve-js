import { useContext } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { AuthContext } from "../../context/AuthProvider";

const HeroButtons = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">

      {/* Get Started */}
      <Link
        to={user ? "/topics" : "/register"}
        className="btn bg-[#F7DF1E] hover:bg-yellow-400 text-black border-none rounded-xl
        w-full sm:w-auto
        px-6 sm:px-8
        py-3 sm:py-6
        text-base sm:text-lg
        font-semibold
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-105"
      >
        {user ? "Start Learning" : "Get Started"}
      </Link>

      {/* Docs */}
      <Link
        to="/about"
        className="btn btn-outline border-2 border-gray-300
        hover:border-[#F7DF1E]
        hover:bg-[#FFF8D6]
        rounded-xl
        w-full sm:w-auto
        px-6 sm:px-8
        py-3 sm:py-6
        text-base sm:text-lg
        font-semibold
        transition-all duration-300
        hover:scale-105"
      >
        <FaBookOpen />
        Docs
        <FaArrowRight />
      </Link>

    </div>
  );
};

export default HeroButtons;