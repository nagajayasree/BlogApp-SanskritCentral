import { gql } from '@apollo/client';

export const GET_VIDEO = gql`
  query getVideo($id: ID!) {
    getVideo(id: $id) {
      title
      description
      videoUrl
    }
  }
`;
