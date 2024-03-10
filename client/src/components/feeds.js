import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEEDS } from '../queries/getFeeds';
import FeedCard from './FeedCard';
import { Space } from 'antd';

function Feeds() {
  const { loading, error, data } = useQuery(GET_FEEDS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div style={{ alignContent: 'center', margin: 20 }}>
      <Space direction="vertical" size={16}>
        {data.getFeeds.map((feed) => (
          <return>
            <FeedCard title={feed.title} content={feed.content} />
          </return>
        ))}
      </Space>
    </div>
  );
}

export default Feeds;
