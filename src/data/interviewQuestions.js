const interviewQuestions = {
  variables: createQuestions("Variables"),
  conditionals: createQuestions("Conditionals"),
  loops: createQuestions("Loops"),
  arrays: createQuestions("Arrays"),
  strings: createQuestions("Strings"),
  objects: createQuestions("Objects"),
  functions: createQuestions("Functions"),
  combined: createQuestions("Combined Practice"),
};

function createQuestions(topic) {
  return {
    title: `${topic} Interview Questions`,

    questions: [
      {
        id: 1,
        question: `What is ${topic}?`,
        answer: `This is a demo explanation about ${topic}. Replace it later.`,
      },
      {
        id: 2,
        question: `Why do we use ${topic}?`,
        answer: `This is placeholder content explaining why ${topic} is important.`,
      },
      {
        id: 3,
        question: `Give a simple example of ${topic}.`,
        answer: `This section will contain a practical example related to ${topic}.`,
      },
      {
        id: 4,
        question: `What are the advantages of ${topic}?`,
        answer: `This demo answer describes the benefits of ${topic}.`,
      },
      {
        id: 5,
        question: `Common interview questions about ${topic}?`,
        answer: `Replace this demo content with real interview questions later.`,
      },
    ],
  };
}

export default interviewQuestions;