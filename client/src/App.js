import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '20%',
            justifyContent: 'center',
          }}
        >
          <Navbar />
        </div>
        <div style={{ width: '100%' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
