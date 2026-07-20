import {
  FaCode,
  FaBolt,
  FaChartLine,
  FaMedal,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Learn by Solving",
    description:
      "Understand JavaScript concepts through carefully designed practice problems instead of only reading theory.",
  },
  {
    id: 2,
    icon: <FaBolt />,
    title: "Instant Feedback",
    description:
      "Check your answers immediately and learn from detailed explanations for every problem.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Track Progress",
    description:
      "Monitor completed problems, unlock new topics, and improve your JavaScript skills step by step.",
  },
  {
    id: 4,
    icon: <FaMedal />,
    title: "Earn Achievements",
    description:
      "Complete challenges, earn badges, and stay motivated throughout your learning journey.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Why Choose Solve JS
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Learn JavaScript the Smart Way
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-500 text-lg">
            Solve JS is designed to help beginners build strong JavaScript
            fundamentals through structured practice, instant feedback,
            and progressive learning.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-200 bg-white p-8 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 text-3xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;