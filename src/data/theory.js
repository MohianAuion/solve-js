const theory = {
  variables: {
    title: "Variables",

    introduction:
      "Variables are containers used to store data. They allow us to save values and use them later in our programs.",

    sections: [
      {
        heading: "What is a Variable?",
        content:
          "A variable is like a labeled box where you can store information such as numbers, text, or true/false values.",
      },

      {
        heading: "Why do we use Variables?",
        content:
          "Variables help us store data so that we can reuse and update it whenever needed.",
      },

      {
        heading: "let",
        content:
          "Use let when the value may change later.",
      },

      {
        heading: "const",
        content:
          "Use const when the value should never change after it is assigned.",
      },

      {
        heading: "var",
        content:
          "var is the old way of declaring variables. In modern JavaScript, prefer let and const.",
      },

      {
        heading: "Naming Rules",
        content:
          "Variable names can contain letters, numbers, _, and $. They cannot start with a number.",
      },

      {
        heading: "Example",
        code: `let name = "Auion";

const age = 22;

console.log(name);
console.log(age);`,
      },

      {
        heading: "Best Practices",
        content:
          "Use meaningful variable names. Prefer const whenever possible and use let only when values need to change.",
      },
    ],
  },
};

export default theory;