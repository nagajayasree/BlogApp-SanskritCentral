import { createBrowserRouter } from 'react-router-dom';
import Feeds from './Feeds';
import Videos from './Videos';
import App from '../App';
import AddFeed from './AddFeed';
import FeedDetails from './FeedDetails';
import VideoDetails from './VideoDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Feeds />,
      },
      {
        path: 'feeds',
        element: <Feeds />,
      },
      {
        path: 'videos',
        element: <Videos />,
      },
      {
        path: 'add-feed',
        element: <AddFeed />,
      },
      {
        path: 'feed/:id',
        element: <FeedDetails />,
      },
      {
        path: 'video/:id',
        element: <VideoDetails />,
      },
    ],
  },
]);
