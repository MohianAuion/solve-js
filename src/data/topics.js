import {
  FaCube,
  FaCodeBranch,
  FaRedo,
  FaList,
  FaCode,
  FaBoxOpen,
  FaFont,
  FaLayerGroup,
} from "react-icons/fa";

const topics = [
  {
    id: 1,
    slug: "variables",
    title: "Variables",
    icon: FaCube,
    description:
      "Learn how to declare, store, and update values using JavaScript variables.",
    totalProblems: 100,
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },

  {
    id: 2,
    slug: "conditionals",
    title: "Conditionals",
    icon: FaCodeBranch,
    description:
      "Master decision making using if, else, switch, and logical operators.",
    totalProblems: 100,
    color: "bg-green-100",
    iconColor: "text-green-500",
  },

  {
    id: 3,
    slug: "loops",
    title: "Loops",
    icon: FaRedo,
    description:
      "Practice repeating tasks efficiently with JavaScript loops.",
    totalProblems: 100,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },

  {
    id: 4,
    slug: "arrays",
    title: "Arrays",
    icon: FaList,
    description:
      "Learn array methods, iteration, and common problem-solving patterns.",
    totalProblems: 100,
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },

  {
    id: 5,
    slug: "functions",
    title: "Functions",
    icon: FaCode,
    description:
      "Write reusable code with regular, arrow, and callback functions.",
    totalProblems: 100,
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },

  {
    id: 6,
    slug: "objects",
    title: "Objects",
    icon: FaBoxOpen,
    description:
      "Understand objects, properties, methods, and nested structures.",
    totalProblems: 100,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },

  {
    id: 7,
    slug: "strings",
    title: "Strings",
    icon: FaFont,
    description:
      "Practice string methods, manipulation, and text processing.",
    totalProblems: 100,
    color: "bg-cyan-100",
    iconColor: "text-cyan-500",
  },

  {
    id: 8,
    slug: "all-in-one",
    title: "All in One",
    icon: FaLayerGroup,
    description:
      "Challenge yourself with mixed JavaScript interview questions and coding problems.",
    totalProblems: 300,
    color: "bg-red-100",
    iconColor: "text-red-500",
  },
];

export default topics;