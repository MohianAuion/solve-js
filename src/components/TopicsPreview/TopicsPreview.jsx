import {
  FaCube,
  FaCode,
  FaRedo,
  FaCodeBranch,
  FaList,
  FaFont,
  FaBoxOpen,
  FaLock,
  FaLayerGroup,
} from "react-icons/fa";
import { Link } from "react-router";

const topics = [
  {
    id: 1,
    icon: <FaCube />,
    title: "Variables",
    problems: 100,
  },
  {
    id: 2,
    icon: <FaCodeBranch />,
    title: "Conditions",
    problems: 100,
  },
  {
    id: 3,
    icon: <FaRedo />,
    title: "Loops",
    problems: 100,
  },
  {
    id: 4,
    icon: <FaCode />,
    title: "Functions",
    problems: 100,
  },
  {
    id: 5,
    icon: <FaList />,
    title: "Arrays",
    problems: 100,
  },
  {
    id: 6,
    icon: <FaFont />,
    title: "Strings",
    problems: 100,
  },
  {
    id: 7,
    icon: <FaBoxOpen />,
    title: "Objects",
    problems: 100,
  },
  {
    id: 8,
    icon: <FaLayerGroup />,
    title: "All in One",
    problems: 300,
  },
];

const TopicsPreview = () => {
  const isLoggedIn = false;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest text-sm sm:text-base">
            Practice by Topic
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            JavaScript Topics
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base lg:text-lg">
            Start learning JavaScript step by step with carefully organized
            practice problems for every important topic.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-100 flex items-center justify-center text-2xl sm:text-3xl text-yellow-500 mb-4 sm:mb-5 lg:mb-6">
                {topic.icon}
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {topic.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base">
                {topic.problems} Practice Problems
              </p>

              <Link
                to={isLoggedIn ? "/topics" : "/register"}
                className="btn btn-warning w-full mt-5 sm:mt-6 text-sm sm:text-base"
              >
                {isLoggedIn ? (
                  "Start Practice"
                ) : (
                  <>
                    <FaLock />
                    Locked
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsPreview;