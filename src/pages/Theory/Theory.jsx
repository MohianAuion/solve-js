import { useParams } from "react-router";
import theory from "../../data/theory";

const Theory = () => {
  const { topic } = useParams();

  const data = theory[topic];

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Theory Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#FFFDF5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-5">
          {data.title}
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          {data.introduction}
        </p>

        <div className="space-y-8">

          {data.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow"
            >
              <h2 className="text-2xl font-bold mb-4">
                {section.heading}
              </h2>

              {section.content && (
                <p className="text-gray-600 leading-8">
                  {section.content}
                </p>
              )}

              {section.code && (
                <pre className="bg-gray-900 text-green-400 rounded-xl p-5 overflow-x-auto mt-5">
                  <code>{section.code}</code>
                </pre>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Theory;