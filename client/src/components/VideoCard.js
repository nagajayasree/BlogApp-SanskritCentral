import React from 'react';
import { Card } from 'antd';
import './VideoCard.css';

const VideoCard = ({ title, description, url, thumbnailUrl }) => (
  <Card
    style={{
      width: 380,
      height: 360,
    }}
    hoverable
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      key={title}
    >
      <div>
        <img
          style={{
            width: '320px',
            height: '180px',
            objectFit: 'fill',
          }}
          alt="example"
          src={thumbnailUrl}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="truncate-line-clamp">{description}</p>
      </div>
    </div>
  </Card>
);

export default VideoCard;
