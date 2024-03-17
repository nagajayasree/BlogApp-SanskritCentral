import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEED } from '../queries/getFeed';
import { useParams } from 'react-router-dom';

function FeedDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_FEED, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h2>{data.getFeed.title}</h2>
      <p>{data.getFeed.content}</p>
    </>
  );
}

export default FeedDetails;
