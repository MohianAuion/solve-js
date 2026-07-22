import { Link } from "react-router";

const TopicCard = ({ topic }) => {
  const Icon = topic.icon;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <div
          className={`w-16 h-16 rounded-full ${topic.color} flex items-center justify-center mb-5`}
        >
          <Icon className={`text-3xl ${topic.iconColor}`} />
        </div>

        <h3 className="text-2xl font-bold">{topic.title}</h3>

        <p className="mt-3 text-gray-500 leading-7 min-h-[80px]">
          {topic.description}
        </p>

        <div className="mt-5">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            {topic.totalProblems} Practice Problems
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="border-t border-gray-200 p-6 space-y-3">

  <div className="flex gap-3">
    <Link
      to={`/topics/${topic.slug}/theory`}
      className="btn w-full bg-[#F7DF1E] flex-1 font-semibold"
    >
      📘 Basics
    </Link>

    <Link
  to={`/topics/${topic.slug}/questions`}
  className="text-sm border border-gray-400 rounded-md flex items-center justify-center w-full flex-1 font-bold"
>
  📝 QnA?
</Link>
  </div>

  <Link
    to={`/topics/${topic.slug}/problem-solving`}
    className="btn bg-black text-white w-full"
  >
    💻 Problem Solving
  </Link>

</div>
    </div>
  );
};

export default TopicCard;