import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_VIDEO } from '../queries/getVideo';
import { useParams } from 'react-router-dom';

function VideoDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_VIDEO, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h2>{data.getVideo.title}</h2>
      <video
        src={data.getVideo.videoUrl}
        style={{ width: '800px', height: '450px' }}
      />
      <p>{data.getVideo.description}</p>
    </>
  );
}

export default VideoDetails;
