import { useContext } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { AuthContext } from "../../context/AuthProvider";

const HeroButtons = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
      {/* Get Started */}
      <Link
        to={user ? "/topics" : "/register"}
        className="btn bg-[#F7DF1E] hover:bg-yellow-400 text-black border-none rounded-xl
        px-4 sm:px-6 lg:px-8
        h-10 sm:h-12 lg:h-14
        min-h-0
        text-sm sm:text-base lg:text-lg
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
        px-4 sm:px-6 lg:px-8
        h-10 sm:h-12 lg:h-14
        min-h-0
        text-sm sm:text-base lg:text-lg
        font-semibold
        transition-all duration-300
        hover:scale-105
        flex-nowrap"
      >
        <FaBookOpen />
        Docs
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default HeroButtons;