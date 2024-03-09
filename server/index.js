const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

app.use(cors());

mongoose.connect(
  'mongodb+srv://jayasree:jayasree@sanskritcentral.h8exang.mongodb.net/sanskritCentral'
);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000/');
});
