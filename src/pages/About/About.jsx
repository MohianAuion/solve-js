const About = () => {
  return (
    <div className="bg-[#FFFDF5]">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <span className="uppercase tracking-[4px] text-[#D18A00] font-semibold">
          Documentation
        </span>

        <h1 className="text-5xl lg:text-6xl font-extrabold mt-5 leading-tight">
          Learn About
          <span className="text-[#F7DF1E]"> SolveJS</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-9">
          SolveJS is a JavaScript learning platform designed to help
          beginners and aspiring developers master JavaScript through
          structured lessons, interview questions, and real coding
          challenges.
        </p>

      </section>

    
 
 {/* Our Mission */}
<section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left */}
    <div>

      <span className="text-[#D18A00] font-semibold uppercase tracking-[3px]">
        Our Mission
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
        Learning JavaScript
        <span className="text-[#F7DF1E]"> Should Be Simple.</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        Many beginners spend countless hours watching tutorials but
        still struggle to solve programming problems. SolveJS was
        created to bridge that gap by combining clear explanations,
        interview questions, and practical coding exercises in one
        place.
      </p>

      <p className="mt-5 text-gray-600 leading-8">
        Instead of memorizing syntax, you'll understand concepts,
        practice them, and build confidence through real JavaScript
        challenges.
      </p>

    </div>

    {/* Right */}
    <div className="grid grid-cols-2 gap-5">

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#F7DF1E] hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-[#F7DF1E]">
          20+
        </h3>

        <p className="mt-3 text-gray-600">
          JavaScript Topics
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#38BDF8] hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-[#38BDF8]">
          300+
        </h3>

        <p className="mt-3 text-gray-600">
          Practice Questions
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-green-500">
          Beginner
        </h3>

        <p className="mt-3 text-gray-600">
          Friendly Learning
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500 hover:-translate-y-2 transition duration-300">
        <h3 className="text-4xl font-bold text-purple-500">
          100%
        </h3>

        <p className="mt-3 text-gray-600">
          Hands-on Practice
        </p>
      </div>

    </div>

  </div>

</section>

{/* What You'll Learn */}
<section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

  <div className="text-center mb-14">

    <span className="uppercase tracking-[3px] text-[#D18A00] font-semibold">
      Learning Path
    </span>

    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
      What You'll Learn
    </h2>

    <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
      SolveJS is designed to take you from the very basics of JavaScript
      to solving real interview questions and programming problems.
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">📘</div>
      <h3 className="font-bold text-lg">JavaScript Basics</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Variables, Data Types and Operators.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">🔀</div>
      <h3 className="font-bold text-lg">Conditionals</h3>
      <p className="text-gray-500 mt-3 text-sm">
        if, else, switch and logical thinking.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">🔁</div>
      <h3 className="font-bold text-lg">Loops</h3>
      <p className="text-gray-500 mt-3 text-sm">
        for, while, do...while and iteration.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">📦</div>
      <h3 className="font-bold text-lg">Arrays</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Array methods and common problems.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">⚙️</div>
      <h3 className="font-bold text-lg">Functions</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Function declaration, arrow functions and scope.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">🧱</div>
      <h3 className="font-bold text-lg">Objects</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Objects, properties and methods.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">💻</div>
      <h3 className="font-bold text-lg">Problem Solving</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Improve logical thinking through coding challenges.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">🎯</div>
      <h3 className="font-bold text-lg">Interview Q&A</h3>
      <p className="text-gray-500 mt-3 text-sm">
        Frequently asked JavaScript interview questions.
      </p>
    </div>

  </div>

</section>

{/* How SolveJS Works */}
<section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[3px] text-[#D18A00] font-semibold">
      How It Works
    </span>

    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
      Start Learning in
      <span className="text-[#F7DF1E]"> 4 Simple Steps</span>
    </h2>

    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
      We've designed SolveJS to make your JavaScript learning journey
      straightforward, practical, and enjoyable.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Step 1 */}
    <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#F7DF1E] flex items-center justify-center text-black font-bold text-lg shadow-lg">
        1
      </div>

      <div className="text-5xl mt-6">
        👤
      </div>

      <h3 className="text-xl font-bold mt-5">
        Create Account
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        Register for free and unlock all JavaScript learning resources.
      </p>

    </div>

    {/* Step 2 */}
    <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center font-bold text-lg shadow-lg">
        2
      </div>

      <div className="text-5xl mt-6">
        📚
      </div>

      <h3 className="text-xl font-bold mt-5">
        Pick a Topic
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        Choose any JavaScript topic and begin learning from the basics.
      </p>

    </div>

    {/* Step 3 */}
    <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
        3
      </div>

      <div className="text-5xl mt-6">
        📝
      </div>

      <h3 className="text-xl font-bold mt-5">
        Learn & Practice
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        Study the theory, interview questions, and solve coding exercises.
      </p>

    </div>

    {/* Step 4 */}
    <div className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
        4
      </div>

      <div className="text-5xl mt-6">
        🚀
      </div>

      <h3 className="text-xl font-bold mt-5">
        Become Confident
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        Build confidence through continuous practice and prepare for interviews.
      </p>

    </div>

  </div>

</section>

{/* JavaScript Learning Roadmap */}
<section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[3px] text-[#D18A00] font-semibold">
      Roadmap
    </span>

    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
      Your JavaScript Learning Journey
    </h2>

    <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
      Follow this roadmap step by step. Each topic builds on the previous
      one so you'll gain confidence naturally instead of feeling overwhelmed.
    </p>

  </div>

  <div className="relative max-w-4xl mx-auto">

    {/* Vertical Line */}
    <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#F7DF1E] rounded-full"></div>

    {[
      {
        title: "JavaScript Basics",
        icon: "📘",
        desc: "Variables, Data Types, Operators and Console.",
      },
      {
        title: "Conditionals",
        icon: "🔀",
        desc: "if, else, switch and logical decisions.",
      },
      {
        title: "Loops",
        icon: "🔁",
        desc: "Repeat tasks efficiently with loops.",
      },
      {
        title: "Functions",
        icon: "⚙️",
        desc: "Reusable blocks of code and arrow functions.",
      },
      {
        title: "Arrays",
        icon: "📦",
        desc: "Store collections of data and use array methods.",
      },
      {
        title: "Objects",
        icon: "🧱",
        desc: "Represent real-world data using objects.",
      },
      {
        title: "Problem Solving",
        icon: "💻",
        desc: "Practice coding challenges and improve logic.",
      },
      {
        title: "Interview Preparation",
        icon: "🎯",
        desc: "Master common JavaScript interview questions.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative flex items-start gap-6 mb-10"
      >

        {/* Circle */}
        <div className="w-10 h-10 rounded-full bg-[#F7DF1E] flex items-center justify-center text-lg font-bold z-10 shadow-md">
          {index + 1}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 hover:-translate-y-1 hover:shadow-xl transition duration-300">

          <div className="flex items-center gap-4">

            <div className="text-4xl">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    ))}

  </div>

</section>

{/* Why Choose SolveJS */}
<section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[3px] text-[#D18A00] font-semibold">
      Why Choose Us
    </span>

    <h2 className="text-4xl lg:text-5xl font-bold mt-4">
      Why Developers Love
      <span className="text-[#F7DF1E]"> SolveJS</span>
    </h2>

    <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
      SolveJS isn't just another JavaScript tutorial website.
      It's built to help you understand concepts, think logically,
      and become confident through consistent practice.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-[#F7DF1E]">

      <div className="text-5xl mb-5">
        📘
      </div>

      <h3 className="text-2xl font-bold">
        Beginner Friendly
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        Every topic starts from the basics, making JavaScript easy to
        understand even if you've never coded before.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-sky-400">

      <div className="text-5xl mb-5">
        💻
      </div>

      <h3 className="text-2xl font-bold">
        Real Practice
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        Learn by solving practical coding problems instead of only
        reading theory or watching videos.
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-green-500">

      <div className="text-5xl mb-5">
        🎯
      </div>

      <h3 className="text-2xl font-bold">
        Interview Ready
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        Practice frequently asked JavaScript interview questions and
        improve your confidence for technical interviews.
      </p>

    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-purple-500">

      <div className="text-5xl mb-5">
        🚀
      </div>

      <h3 className="text-2xl font-bold">
        Structured Learning
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        Follow a roadmap that gradually builds your JavaScript
        knowledge from beginner to advanced concepts.
      </p>

    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-pink-500">

      <div className="text-5xl mb-5">
        ⚡
      </div>

      <h3 className="text-2xl font-bold">
        Fast & Responsive
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        Enjoy a clean, modern interface that works smoothly on mobile,
        tablet, and desktop devices.
      </p>

    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-orange-500">

      <div className="text-5xl mb-5">
        🌱
      </div>

      <h3 className="text-2xl font-bold">
        Keep Growing
      </h3>

      <p className="mt-4 text-gray-600 leading-8">
        New JavaScript topics, coding challenges, and learning
        resources will continue to be added regularly.
      </p>

    </div>

  </div>

</section>
</div>
  );
};

export default About;