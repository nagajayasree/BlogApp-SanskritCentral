import { createBrowserRouter } from 'react-router-dom';
import Feeds from './Feeds';
import Videos from './Videos';
import App from '../App';
import AddFeed from './AddFeed';

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
    ],
  },
]);
