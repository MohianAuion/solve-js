const interviewQuestions = {
  variables: {
    title: "Variables Interview Questions",

    questions: [
      {
        id: 1,
        question: "What is a variable in JavaScript?",
        answer:
          "A variable is a container that stores data values for later use in a program.",
      },

      {
        id: 2,
        question: "What is the difference between let, const and var?",
        answer:
          "let allows reassignment, const does not allow reassignment, and var is the older function-scoped declaration.",
      },

      {
        id: 3,
        question: "Can a const object be modified?",
        answer:
          "Yes. The reference cannot change, but its properties can be modified.",
      },

      {
        id: 4,
        question: "What is variable hoisting?",
        answer:
          "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.",
      },

      {
        id: 5,
        question: "What is the Temporal Dead Zone (TDZ)?",
        answer:
          "The TDZ is the period between entering a block and declaring a let or const variable where it cannot be accessed.",
      },

      {
        id: 6,
        question: "What happens if you access a let variable before declaration?",
        answer:
          "A ReferenceError is thrown because the variable is in the Temporal Dead Zone.",
      },

      {
        id: 7,
        question: "Can you redeclare a let variable?",
        answer:
          "No. A let variable cannot be redeclared in the same scope.",
      },

      {
        id: 8,
        question: "Can you reassign a const variable?",
        answer:
          "No. A const variable cannot be reassigned after its initial value is set.",
      },

      {
        id: 9,
        question: "What are valid variable naming rules?",
        answer:
          "Variable names can contain letters, digits, _, and $. They cannot start with a digit or contain spaces.",
      },

      {
        id: 10,
        question: "Which should you use more often: let or const?",
        answer:
          "Prefer const by default. Use let only when the value needs to change.",
      },
    ],
  },
};

export default interviewQuestions;