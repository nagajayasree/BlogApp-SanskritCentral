const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Feed {
    id: ID!
    title: String!
    content: String!
  }

  type Video{
    id:ID!
    title: String!
    description: String!
    videoUrl: String!
    thumbnailUrl: String!
  }

  type Query {
    getFeed(id: ID!): Feed
    getFeeds: [Feed]
    getVideo(id: ID!): Video
    getVideos: [Video]
  }

  type Mutation {
    createFeed(title: String!, content: String!): Feed
	  deleteFeed(id: String!): Feed
    deleteVideo(id: String!): Video
  }
`);

module.exports = schema;
