import {
  FaFlag,
  FaCube,
  FaCodeBranch,
  FaArrowRotateRight,
  FaCode,
  FaList,
  FaFont,
  FaBoxOpen,
  FaTrophy,
} from "react-icons/fa6";

const roadmap = [
  {
    id: 1,
    icon: <FaFlag />,
    title: "Getting Started",
    description: "Learn JavaScript basics and syntax.",
  },
  {
    id: 2,
    icon: <FaCube />,
    title: "Variables",
    description: "Understand variables and data types.",
  },
  {
    id: 3,
    icon: <FaCodeBranch />,
    title: "Conditions",
    description: "Use if, else, switch and logical operators.",
  },
  {
    id: 4,
    icon: <FaArrowRotateRight />,
    title: "Loops",
    description: "Master for, while and do...while loops.",
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "Functions",
    description: "Create reusable functions and arrow functions.",
  },
  {
    id: 6,
    icon: <FaList />,
    title: "Arrays",
    description: "Learn array methods and iteration.",
  },
  {
    id: 7,
    icon: <FaFont />,
    title: "Strings",
    description: "Practice string methods and manipulation.",
  },
  {
    id: 8,
    icon: <FaBoxOpen />,
    title: "Objects",
    description: "Understand objects and nested data.",
  },
  {
    id: 9,
    icon: <FaTrophy />,
    title: "Final Challenges",
    description: "Solve mixed JavaScript interview problems.",
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase font-semibold tracking-widest">
            Learning Path
          </span>

          <h2 className="text-5xl font-bold mt-4">
            JavaScript Roadmap
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            Follow this roadmap to build a strong JavaScript foundation
            before moving on to advanced topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmap.map((step) => (
            <div
              key={step.id}
              className="border rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 text-3xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {step.id}. {step.title}
              </h3>

              <p className="mt-4 text-gray-500 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;