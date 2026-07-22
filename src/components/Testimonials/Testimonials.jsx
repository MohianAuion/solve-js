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
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF9E8]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[4px] text-yellow-500 font-bold text-sm">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3">
            Loved by JavaScript Learners
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Thousands of students improve their JavaScript skills every day
            with SolveJS.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Quote */}
              <div className="absolute top-5 right-6 text-6xl font-bold text-yellow-100">
                "
              </div>

              {/* User */}
              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-yellow-300 object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 mb-8">
                {item.review}
              </p>

              {/* Rating */}
              <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;