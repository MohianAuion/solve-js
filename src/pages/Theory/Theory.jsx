import { useParams } from "react-router";
import theoryData from "../../data/theory";

const Theory = () => {
  const { topic } = useParams();

  const data = theoryData[topic];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDF5]">
        <h1 className="text-3xl font-bold text-gray-800">
          Theory Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FFFDF5] py-12">
      <div className="max-w-5xl mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {data.title}
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {data.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            >
              <h2 className="text-3xl font-bold mb-5">
                {section.heading}
              </h2>

              {section.content && (
                <p className="text-gray-700 leading-8 text-lg">
                  {section.content}
                </p>
              )}

              {section.code && (
                <pre className="bg-gray-900 text-green-400 p-5 rounded-2xl overflow-x-auto mt-5">
                  <code>{section.code}</code>
                </pre>
              )}
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10 mt-12">

          <h2 className="text-3xl font-bold text-center mb-3">
            📖 Get to Know Me
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 leading-8">
            Want to understand this topic in greater depth? Visit these trusted
            learning resources for detailed explanations, examples, and
            additional practice.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* MDN */}
            <a
              href={data.resources.mdn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white border border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 text-black rounded-xl px-6 shadow-sm"
            >
              <img
                src="https://cdn.simpleicons.org/mdnwebdocs/000000"
                alt="MDN"
                className="w-5 h-5"
              />
              MDN Web Docs
            </a>

            {/* W3Schools */}
            <a
              href={data.resources.w3schools}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white border border-gray-300 hover:border-green-500 hover:bg-green-50 text-black rounded-xl px-6 shadow-sm"
            >
              <img
                src="https://cdn.simpleicons.org/w3schools/04AA6D"
                alt="W3Schools"
                className="w-5 h-5"
              />
              W3Schools
            </a>

            {/* GeeksforGeeks */}
            <a
              href={data.resources.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white border border-gray-300 hover:border-green-600 hover:bg-green-50 text-black rounded-xl px-6 shadow-sm"
            >
              <img
                src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46"
                alt="GeeksforGeeks"
                className="w-5 h-5"
              />
              GeeksforGeeks
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Theory;