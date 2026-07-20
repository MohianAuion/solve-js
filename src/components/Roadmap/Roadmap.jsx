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
    description: "Learn JavaScript basics, syntax, and how it works.",
  },
  {
    id: 2,
    icon: <FaCube />,
    title: "Variables",
    description: "Understand variables, constants, and storing data.",
  },
  {
    id: 3,
    icon: <FaCodeBranch />,
    title: "Conditions",
    description: "Master if, else, switch statements, and logic.",
  },
  {
    id: 4,
    icon: <FaArrowRotateRight />,
    title: "Loops",
    description: "Practice for, while, do...while, and loop control.",
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "Functions",
    description: "Write reusable and modern arrow functions.",
  },
  {
    id: 6,
    icon: <FaList />,
    title: "Arrays",
    description: "Explore arrays and useful array methods.",
  },
  {
    id: 7,
    icon: <FaFont />,
    title: "Strings",
    description: "Manipulate text using JavaScript string methods.",
  },
  {
    id: 8,
    icon: <FaBoxOpen />,
    title: "Objects",
    description: "Learn objects, nested data, and destructuring.",
  },
  {
    id: 9,
    icon: <FaTrophy />,
    title: "Final Challenges",
    description: "Solve real interview-style JavaScript problems.",
  },
];

const Roadmap = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-yellow-500 uppercase font-semibold tracking-widest text-sm md:text-base">
            Learning Path
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            JavaScript Roadmap
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base lg:text-lg leading-7">
            Follow this roadmap step by step and become confident in JavaScript
            through structured practice.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {roadmap.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Hover Border */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs sm:text-sm font-bold text-gray-500">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-500 text-sm sm:text-base leading-6">
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