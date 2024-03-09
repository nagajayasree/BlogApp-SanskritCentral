import { gql } from '@apollo/client';

export const CREATE_FEED = gql`
  mutation createFeed($title: String!, $content: String!) {
    createFeed(title: $title, content: $content) {
      title
      content
    }
  }
`;