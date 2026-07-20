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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Why Choose Solve JS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Learn JavaScript the Smart Way
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Everything you need to become confident in JavaScript problem solving,
            organized into one easy-to-use learning platform.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-gray-200 p-8 hover:border-yellow-400 hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7">
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