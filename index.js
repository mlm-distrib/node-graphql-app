const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL schema

let schema = buildSchema(`type Query {
  message: String
}`);

// Root resolver

let root = {
  message: () => "Hello World!"
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
