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
            backgroundColor: '#A7A1D6',
            width: '20%',
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
