import { Link, useParams } from "react-router";
import problems from "../../data/problems";

const ProblemSolving = () => {
  const { topic } = useParams();

  const topicProblems = problems[topic];

  if (!topicProblems) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          No Problems Found
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FFFDF5] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10 capitalize">
          {topic} Problem Solving
        </h1>

        <div className="space-y-5">

          {topicProblems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white rounded-xl border p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {problem.id}. {problem.title}
                </h2>

                <span className="badge badge-success mt-3">
                  {problem.difficulty}
                </span>
              </div>

              <Link
                to={`/problem/${topic}/${problem.id}`}
                className="btn btn-warning"
              >
                Solve
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProblemSolving;