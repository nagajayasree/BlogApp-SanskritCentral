const Feed = require('../models/Feed');

const resolvers = {
  getFeed: async ({ id }) => {
    try {
      const feed = await Feed.findById(id);
      return feed;
    } catch (err) {
      throw new Error('Error retrieving feed');
    }
  },
  getFeeds: async () => {
    try {
      const feeds = await Feed.find();
      return feeds;
    } catch (err) {
      throw new Error('Error retrieving feeds');
    }
  },
  createFeed: async ({ title, content }) => {
    try {
      const feed = new Feed({ title, content });
      await feed.save();
      return feed;
    } catch (err) {
      throw new Error('Error creating feed');
    }
  },
  deleteFeed: async ({ id }) => {
    try {
      const feed = await Feed.findByIdAndDelete(id);
      return feed;
    } catch (err) {
      throw new Error('Error deleting feed');
    }
  },
};

module.exports = resolvers;
