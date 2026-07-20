import {
  FaCube,
  FaCode,
  FaRedo,
  FaCodeBranch,
  FaList,
  FaFont,
  FaBoxOpen,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router";

const topics = [
  {
    id: 1,
    icon: <FaCube />,
    title: "Variables",
    problems: 25,
    level: "Easy",
  },
  {
    id: 2,
    icon: <FaCode />,
    title: "Data Types",
    problems: 20,
    level: "Easy",
  },
  {
    id: 3,
    icon: <FaCodeBranch />,
    title: "Conditions",
    problems: 30,
    level: "Easy",
  },
  {
    id: 4,
    icon: <FaRedo/>,
    title: "Loops",
    problems: 35,
    level: "Easy",
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "Functions",
    problems: 40,
    level: "Medium",
  },
  {
    id: 6,
    icon: <FaList />,
    title: "Arrays",
    problems: 30,
    level: "Medium",
  },
  {
    id: 7,
    icon: <FaFont />,
    title: "Strings",
    problems: 25,
    level: "Medium",
  },
  {
    id: 8,
    icon: <FaBoxOpen />,
    title: "Objects",
    problems: 30,
    level: "Hard",
  },
];

const TopicsPreview = () => {
  const isLoggedIn = false;

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Practice by Topic
          </span>

          <h2 className="text-5xl font-bold mt-4">
            JavaScript Topics
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            Start learning JavaScript step by step with carefully organized
            practice problems for every important topic.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl text-yellow-500 mb-6">
                {topic.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {topic.problems} Problems
              </p>

              <span className="badge badge-warning mt-4">
                {topic.level}
              </span>

              <Link
                to={isLoggedIn ? "/topics" : "/register"}
                className="btn btn-warning w-full mt-6"
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