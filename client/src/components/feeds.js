import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEEDS } from '../queries/getFeeds';
import FeedCard from './FeedCard';
import { Link } from 'react-router-dom';

function Feeds() {
  const { loading, error, data } = useQuery(GET_FEEDS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div style={{ margin: 20 }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {data.getFeeds.map((feed) => (
          <return>
            <Link
              to={`/feed/${feed.id}`}
              style={{ textDecoration: 'none' }}
            >
              <FeedCard title={feed.title} content={feed.content} />
            </Link>
          </return>
        ))}
      </div>
    </div>
  );
}

export default Feeds;
