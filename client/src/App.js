import { Outlet } from 'react-router';
import Navbar from './components/navbar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
