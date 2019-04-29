const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

let schema = buildSchema(`
type Query {
  course(id: Int!): Course
  courses(topic: String): [Course]
},
type Course {
  id: Int
  title: String
  author: String
  description: String
  topic: String
  url: String
}`);

let coursesData = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs/"
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/"
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://codingthesmartway.com/courses/understand-javascript/"
  }
];

// Root resolver

let getCourse = args => {
  let id = args.id;
  return coursesData.filter(course => {
    return (course.id = id);
  })[0];
};

let getCourses = args => {
  if (args.topic) {
    let topic = args.topic;
    return coursesData.filter(course => course.topic === topic);
  } else {
    return coursesData;
  }
};

let root = {
  course: getCourse,
  courses: getCourses
};

const app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("Express GraphQL server running at localhost:5000/graphql");
});
