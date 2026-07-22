import topics from "../../data/topics";
import TopicCard from "../../components/TopicCard/TopicCard";

const Topics = () => {
  return (
    <section className="min-h-screen bg-[#FFFDF5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 font-semibold text-sm tracking-wide">
            JavaScript Learning Hub
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Choose a Topic
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
            Build a strong JavaScript foundation by learning one topic at a
            time. Every topic includes{" "}
            <span className="font-semibold text-black">
              Basics,
            </span>{" "}
            <span className="font-semibold text-black">
              ?QnA,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-black">
              Problem Solving
            </span>{" "}
            to help you master JavaScript from beginner to interview level.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;