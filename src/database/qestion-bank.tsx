const questionBank = [
  {
    id: 1,
    question: "What is the correct command to create a new React project?",
    options: [
      "npx create-react-app myReactApp",
      "npm create-react-app myReactApp",
      "npx create-react-app",
      "npm create-react-app",
    ],
    answer: "npx create-react-app myReactApp",
  },
  {
    id: 2,
    question:
      "What command is used to start the React local development server?",
    options: ["npm start", "npm run dev", "npm serve", "npm build"],
    answer: "npm start",
  },
  {
    id: 3,
    question:
      "What is the default local host port that a React development server uses?",
    options: ["8080", "3000", "5000", "3500"],
    answer: "3000",
  },
  {
    id: 4,
    question: "What is the children prop?",
    options: [
      "A Property that adds child alues to state",
      "A property that lets you pass data to child components",
      "A property that lets you set an object as a property",
      "A property that lets you nest components in other components",
    ],
    answer: "A property that lets you nest components in other components",
  },
  {
    id: 5,
    question: "Which keyword creates a constant in JavaScript?",
    options: ["var", "constant", "let", "const"],
    answer: "const",
  },
  {
    id: 6,
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    options: ["Shadow DOM", "DOM", "Virtual DOM", "React DOM"],
    answer: "Virtual DOM",
  },
  {
    id: 7,
    question:
      "Which operator can be used to conditionally render a React component?",
    options: ["||", "::", "&&", "??"],
    answer: "&&",
  },
  {
    id: 8,
    question:
      "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    options: ["data", "id", "key", "index"],
    answer: "key",
  },
  {
    id: 9,
    question: "What tool does React use to compile JSX?",
    options: ["JSX Compiler", "React Router", "Babel", "ReactDOM"],
    answer: "Babel",
  },
  {
    id: 10,
    question: "What is a common use case for ref?",
    options: [
      "To directly access a DOM node",
      "To refer to another JavaScript file",
      "To bind the function",
      "To directly access a DOM node",
    ],
    answer: "To directly access a DOM node",
  },
];

export default questionBank;
