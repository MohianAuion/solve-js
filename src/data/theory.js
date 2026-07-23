const theory = {
  variables: createTheory(
    "Variables",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types",
    "https://www.w3schools.com/js/js_variables.asp",
    "https://www.geeksforgeeks.org/javascript-variables/"
  ),

  conditionals: createTheory(
    "Conditionals",
    "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals",
    "https://www.w3schools.com/js/js_if_else.asp",
    "https://www.geeksforgeeks.org/javascript-if-else-statement/"
  ),

  loops: createTheory(
    "Loops",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration",
    "https://www.w3schools.com/js/js_loop_for.asp",
    "https://www.geeksforgeeks.org/javascript-loops/"
  ),

  arrays: createTheory(
    "Arrays",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "https://www.w3schools.com/js/js_arrays.asp",
    "https://www.geeksforgeeks.org/javascript-arrays/"
  ),

  strings: createTheory(
    "Strings",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
    "https://www.w3schools.com/js/js_strings.asp",
    "https://www.geeksforgeeks.org/javascript-strings/"
  ),

  objects: createTheory(
    "Objects",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects",
    "https://www.w3schools.com/js/js_objects.asp",
    "https://www.geeksforgeeks.org/javascript-objects/"
  ),

  functions: createTheory(
    "Functions",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "https://www.w3schools.com/js/js_functions.asp",
    "https://www.geeksforgeeks.org/javascript-functions/"
  ),

  combined: createTheory(
    "Combined Practice",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://www.w3schools.com/js/",
    "https://www.geeksforgeeks.org/javascript/"
  ),
};

function createTheory(topic, mdn, w3schools, gfg) {
  return {
    title: topic,

    description: `Welcome to the ${topic} lesson. This is demo content for SolveJS. Replace it with your complete lesson later.`,

    resources: {
      mdn,
      w3schools,
      gfg,
    },

    sections: [
      {
        heading: "📖 Introduction",
        content: `This section introduces the basic concepts of ${topic}. Understanding this topic will help you build a strong JavaScript foundation.`,
      },

      {
        heading: "🎯 Why Learn It?",
        content: `${topic} is one of the most important JavaScript concepts. It is used in almost every JavaScript application.`,
      },

      {
        heading: "📝 Syntax",
        code: `// Demo Syntax

console.log("${topic}");
`,
      },

      {
        heading: "💡 Example",
        code: `// Demo Example

function demo() {
  console.log("Learning ${topic}");
}

demo();
`,
      },

      {
        heading: "⚡ Common Mistakes",
        content: `Beginners often make small mistakes while learning ${topic}. This section will contain those mistakes and how to avoid them.`,
      },

      {
        heading: "✅ Summary",
        content: `Congratulations! You've completed the demo lesson for ${topic}. Replace this demo content with your real documentation whenever you're ready.`,
      },
    ],
  };
}

export default theory;