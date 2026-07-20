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
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm
            p-5 sm:p-6 lg:p-8
            flex flex-col items-center lg:items-start
            text-center lg:text-left
            hover:shadow-xl hover:-translate-y-2
            transition-all duration-300"
          >
            <div
              className="
              w-12 h-12
              sm:w-14 sm:h-14
              lg:w-16 lg:h-16
              rounded-full
              bg-yellow-100
              text-yellow-500
              flex items-center justify-center
              text-xl sm:text-2xl lg:text-3xl
              mb-4
            "
            >
              {item.icon}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {item.number}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-500">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HeroStats;