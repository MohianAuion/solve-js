import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Solve JS made JavaScript so much easier to understand. The roadmap and coding problems are amazing!",
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase font-semibold tracking-widest">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Learners Say
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-500">
            Thousands of learners improve their JavaScript skills with Solve JS.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF5] rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
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