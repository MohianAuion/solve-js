import { useParams } from "react-router";
import interviewQuestions from "../../data/interviewQuestions";

const InterviewQuestions = () => {
  const { topic } = useParams();

  const data = interviewQuestions[topic];

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Interview Questions Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FFFDF5] py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          {data.title}
        </h1>

        <div className="space-y-5">
          {data.questions.map((item) => (
            <div
              key={item.id}
              className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl"
            >
              <input type="radio" name="accordion" />

              <div className="collapse-title text-lg font-semibold">
                {item.id}. {item.question}
              </div>

              <div className="collapse-content">
                <p className="leading-8 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InterviewQuestions;