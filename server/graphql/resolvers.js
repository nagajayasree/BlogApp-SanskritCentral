const Feed = require('../models/Feed');
const Video = require('../models/Video');

const resolvers = {
  //get feed
  getFeed: async ({ id }) => {
    try {
      const feed = await Feed.findById(id);
      return feed;
    } catch (err) {
      throw new Error('Error retrieving feed');
    }
  },
  //get video
  getVideo: async ({ id }) => {
    try {
      const video = await Video.findById(id);
      return video;
    } catch (err) {
      throw new Error('Error retrieving video');
    }
  },
  //get feeds
  getFeeds: async () => {
    try {
      const feeds = await Feed.find();
      return feeds;
    } catch (err) {
      throw new Error('Error retrieving feeds');
    }
  },
  //get videos
  getVideos: async () => {
    try {
      const videos = await Video.find();
      return videos;
    } catch (err) {
      throw new Error('Error retrieving videos');
    }
  },
  //create feed
  createFeed: async ({ title, content }) => {
    try {
      const feed = new Feed({ title, content });
      await feed.save();
      return feed;
    } catch (err) {
      throw new Error('Error creating feed');
    }
  },
  //delete feed
  deleteFeed: async ({ id }) => {
    try {
      const feed = await Feed.findByIdAndDelete(id);
      return feed;
    } catch (err) {
      throw new Error('Error deleting feed');
    }
  },
  //delete video
  deleteVideo: async ({ id }) => {
    try {
      const video = await Video.findByIdAndDelete(id);
      return video;
    } catch (err) {
      throw new Error('Error deleting video');
    }
  },
};

module.exports = resolvers;
