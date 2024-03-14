import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VIDEOS } from '../queries/getVideos';
import VideoCard from './VideoCard';

function Videos() {
  const { data, loading, error } = useQuery(GET_VIDEOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          gap: 20,
        }}
      >
        {data.getVideos.map((video) => (
          <return>
            <VideoCard
              title={video.title}
              description={video.description}
              url={video.videoUrl}
              thumbnailUrl={video.thumbnailUrl}
            />
          </return>
        ))}
      </div>
    </div>
  );
}

export default Videos;
