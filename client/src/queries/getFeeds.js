import { gql } from '@apollo/client';

export const GET_FEEDS = gql`
  query getFeeds {
    getFeeds {
      id
      title
      content
    }
  }
`;
