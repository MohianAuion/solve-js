import { Link, useParams } from "react-router";
import problems from "../../data/problems";

const ProblemDetails = () => {
  const { topic, id } = useParams();

  const topicProblems = problems[topic];

  if (!topicProblems) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Topic Not Found
        </h2>
      </div>
    );
  }

  const problem = topicProblems.find(
    (item) => item.id === Number(id)
  );

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Problem Not Found
        </h2>
      </div>
    );
  }

  const nextProblem = topicProblems.find(
    (item) => item.id === Number(id) + 1
  );

  return (
    <section className="min-h-screen bg-[#FFFDF5] py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}

        <div className="mb-8">

          <span className="badge badge-warning badge-lg">
            {problem.difficulty}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            Problem {problem.id}: {problem.title}
          </h1>

          <p className="text-gray-500 mt-3">
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </p>

        </div>

        {/* Problem */}

        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            Problem Statement
          </h2>

          <p className="text-gray-700 leading-8">
            {problem.description}
          </p>

        </div>

        {/* Hint */}

        <div className="collapse collapse-arrow bg-white rounded-2xl shadow mt-8">

          <input type="checkbox" />

          <div className="collapse-title text-xl font-semibold">
            💡 Hint
          </div>

          <div className="collapse-content">
            <p className="leading-8">
              {problem.hint}
            </p>
          </div>

        </div>

        {/* Example */}

        <div className="bg-white rounded-2xl shadow mt-8 p-8">

          <h2 className="text-2xl font-bold mb-5">
            Example
          </h2>

          <pre className="bg-gray-900 text-green-400 rounded-xl p-5 overflow-x-auto">

{`// Your Code Here

let language = "JavaScript";

console.log(language);`}

          </pre>

        </div>

        {/* Progress */}

        <div className="mt-8 flex justify-between items-center">

          <p className="font-semibold">
            Problem {problem.id} of {topicProblems.length}
          </p>

          {nextProblem ? (
            <Link
              to={`/problem/${topic}/${nextProblem.id}`}
              className="btn btn-warning"
            >
              Next Problem →
            </Link>
          ) : (
            <Link
              to="/topics"
              className="btn btn-success"
            >
              Finish Topic
            </Link>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProblemDetails;