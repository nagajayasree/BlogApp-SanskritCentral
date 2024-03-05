const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Feed {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    getFeed(id: ID!): Feed
    getFeeds: [Feed]
  }

  type Mutation {
    createFeed(title: String!, content: String!): Feed
	  deleteFeed(id: String!): Feed
  }
`);

module.exports = schema;
