const problems = {
  variables: createProblems("Variables"),
  conditionals: createProblems("Conditionals"),
  loops: createProblems("Loops"),
  arrays: createProblems("Arrays"),
  strings: createProblems("Strings"),
  objects: createProblems("Objects"),
  functions: createProblems("Functions"),
  combined: createProblems("Combined Practice"),
};

function createProblems(topic) {
  return [
    {
      id: 1,
      title: `${topic} Challenge 1`,
      difficulty: "Easy",
      description: `This is a demo problem for ${topic}. Replace it with a real problem later.`,
      input: "Demo Input",
      output: "Demo Output",
      example: {
        input: "5",
        output: "5",
      },
      hint: `Think carefully about the basics of ${topic}.`,
      solution: `// Demo Solution

console.log("${topic} Challenge 1");
`,
    },

    {
      id: 2,
      title: `${topic} Challenge 2`,
      difficulty: "Easy",
      description: `Practice the fundamentals of ${topic}.`,
      input: "Demo Input",
      output: "Demo Output",
      example: {
        input: "10",
        output: "10",
      },
      hint: "Break the problem into smaller steps.",
      solution: `// Demo Solution

console.log("${topic} Challenge 2");
`,
    },

    {
      id: 3,
      title: `${topic} Challenge 3`,
      difficulty: "Medium",
      description: `Intermediate level problem for ${topic}.`,
      input: "Demo Input",
      output: "Demo Output",
      example: {
        input: "15",
        output: "15",
      },
      hint: "Use JavaScript logic efficiently.",
      solution: `// Demo Solution

console.log("${topic} Challenge 3");
`,
    },

    {
      id: 4,
      title: `${topic} Challenge 4`,
      difficulty: "Medium",
      description: `Another demo challenge related to ${topic}.`,
      input: "Demo Input",
      output: "Demo Output",
      example: {
        input: "20",
        output: "20",
      },
      hint: "Read the question twice before coding.",
      solution: `// Demo Solution

console.log("${topic} Challenge 4");
`,
    },

    {
      id: 5,
      title: `${topic} Challenge 5`,
      difficulty: "Hard",
      description: `Advanced demo challenge for ${topic}.`,
      input: "Demo Input",
      output: "Demo Output",
      example: {
        input: "25",
        output: "25",
      },
      hint: "Think like an interviewer.",
      solution: `// Demo Solution

console.log("${topic} Challenge 5");
`,
    },
  ];
}

export default problems;