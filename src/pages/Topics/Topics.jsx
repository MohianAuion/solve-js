import { Link } from "react-router";
import topics from "../../data/topics";

const Topics = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF5] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            JavaScript Topics
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-8">
            Choose a topic and start learning JavaScript through theory,
            interview questions, and hands-on coding problems.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Body */}
                <div className="p-7">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-3xl mb-6">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {topic.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-8 min-h-[120px]">
                    {topic.description}
                  </p>

                  {/* Badge */}
                  <div className="mt-5">
                    <span className="inline-block bg-yellow-100 text-yellow-700 font-medium px-5 py-2 rounded-full">
                      Practice Problems
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="border-t border-gray-200 p-6">

                  <div className="grid grid-cols-2 gap-3 mb-3">

                    <Link
                      to={`/topics/${topic.slug}/theory`}
                      className="btn btn-warning font-semibold rounded-sm"
                    >
                      📘 Basics
                    </Link>

                    <Link
                      to={`/topics/${topic.slug}/questions`}
                      className="btn btn-outline font-bold rounded-sm"
                    >
                      📝 QnA
                    </Link>

                  </div>

                  <Link
                    to={`/topics/${topic.slug}/problems`}
                    className="btn btn-neutral w-full rounded-sm"
                  >
                    💻 Problem Solving
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Topics;