import { gql } from '@apollo/client';

export const GET_VIDEOS = gql`
  query GetVideos {
    getVideos {
      id
      title
      description
      videoUrl
      thumbnailUrl
    }
  }
`;
