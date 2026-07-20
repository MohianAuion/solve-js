import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "SolveJS made JavaScript so much easier to understand. The roadmap and coding problems are amazing!",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Computer Science Student",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I finally understand arrays, loops, and functions. Practicing here boosted my confidence a lot.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Junior MERN Developer",
    image: "https://i.pravatar.cc/150?img=68",
    review:
      "One of the cleanest JavaScript practice platforms I've used. Beautiful UI and excellent learning path.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-yellow-500 uppercase font-semibold tracking-widest text-sm md:text-base">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Learners Say
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base lg:text-lg leading-7">
            Thousands of learners improve their JavaScript skills with SolveJS.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FFFDF5] rounded-2xl border border-gray-200 p-5 sm:p-6 lg:p-8 flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {/* Hover Line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-sm sm:text-base mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 italic text-sm sm:text-base leading-6 sm:leading-7 flex-grow">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 sm:gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-yellow-300 transition-transform duration-300 group-hover:scale-110"
                />

                <div>
                  <h4 className="font-bold text-base sm:text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;