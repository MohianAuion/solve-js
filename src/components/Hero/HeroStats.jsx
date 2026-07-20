import {
  FaCode,
  FaLayerGroup,
  FaUsers,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaCode />,
    number: "500+",
    title: "Problems",
  },
  {
    id: 2,
    icon: <FaLayerGroup />,
    number: "8",
    title: "Topics",
  },
  {
    id: 3,
    icon: <FaUsers />,
    number: "1000+",
    title: "Learners",
  },
  {
    id: 4,
    icon: <FaClock />,
    number: "24/7",
    title: "Practice",
  },
];

const HeroStats = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl mb-4">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-500">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroStats;