import { gql } from '@apollo/client';

export const GET_FEED = gql`
  query getFeed($id: ID!) {
    getFeed(id: $id) {
      title
      content
    }
  }
`;
