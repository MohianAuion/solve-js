import {
  FaCode,
  FaCodeBranch,
  FaSyncAlt,
  FaListUl,
  FaFont,
  FaCube,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";

const topics = [
  {
    id: 1,
    slug: "variables",
    title: "Variables",
    icon: FaCode,
    description:
      "Learn how to declare, store, and update values using var, let, and const.",
  },
  {
    id: 2,
    slug: "conditionals",
    title: "Conditionals",
    icon: FaCodeBranch,
    description:
      "Control the flow of your program using if, else, and switch statements.",
  },
  {
    id: 3,
    slug: "loops",
    title: "Loops",
    icon: FaSyncAlt,
    description:
      "Execute code repeatedly using for, while, do...while, and for...of loops.",
  },
  {
    id: 4,
    slug: "arrays",
    title: "Arrays",
    icon: FaListUl,
    description:
      "Store multiple values in a single variable and use useful array methods.",
  },
  {
    id: 5,
    slug: "strings",
    title: "Strings",
    icon: FaFont,
    description:
      "Manipulate text using JavaScript string methods and template literals.",
  },
  {
    id: 6,
    slug: "objects",
    title: "Objects",
    icon: FaCube,
    description:
      "Work with key-value pairs, nested objects, and object methods.",
  },
  {
    id: 7,
    slug: "functions",
    title: "Functions",
    icon: FaProjectDiagram,
    description:
      "Create reusable blocks of code using regular and arrow functions.",
  },
  {
    id: 8,
    slug: "combined",
    title: "Combined Practice",
    icon: FaLaptopCode,
    description:
      "Challenge yourself with mixed JavaScript questions and coding problems.",
  },
];

export default topics;