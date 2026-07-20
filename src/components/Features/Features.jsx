import {
  FaCode,
  FaLock,
  FaChartLine,
  FaBolt,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Topic-wise Practice",
    description:
      "Practice JavaScript one topic at a time, from Variables to Objects.",
  },
  {
    id: 2,
    icon: <FaLock />,
    title: "Unlock After Login",
    description:
      "Create an account once and unlock every practice section instantly.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Track Progress",
    description:
      "See how many problems you've solved and monitor your learning journey.",
  },
  {
    id: 4,
    icon: <FaBolt />,
    title: "Instant Learning",
    description:
      "Solve problems and improve your JavaScript skills with continuous practice.",
  },
  {
    id: 5,
    icon: <FaLaptopCode />,
    title: "Real Challenges",
    description:
      "Practice beginner-friendly coding questions based on real interview patterns.",
  },
  {
    id: 6,
    icon: <FaGraduationCap />,
    title: "Beginner Friendly",
    description:
      "Perfect for students who are learning JavaScript from scratch.",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider text-sm md:text-base">
            Why Choose Solve JS
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Learn JavaScript the Smart Way
          </h2>

          <p className="mt-4 md:mt-6 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Everything you need to become confident in JavaScript problem
            solving, organized into one easy-to-use learning platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6">
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-base leading-6 lg:leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;