import { Link } from "react-router";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
      {/* Start Practicing */}
      <Link
        to="/register"
        className="btn bg-[#F7DF1E] hover:bg-yellow-400 text-black border-none rounded-xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Start Practicing
        <FaArrowRight />
      </Link>

      {/* Explore Topics */}
      <Link
        to="/about"
        className="btn btn-outline border-2 border-gray-300 hover:border-[#F7DF1E] hover:bg-[#FFF8D6] rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300"
      >
        <FaBookOpen />
        Explore Topics
      </Link>
    </div>
  );
};

export default HeroButtons;