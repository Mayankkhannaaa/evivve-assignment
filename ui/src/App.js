import { useEffect, useState } from 'react';
import './App.css';
import { RootProvider } from './context/RootContext';
import AppRoutes from './routes/Routes';
import JwtService from './utils/jwt.service';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const checkUser = () => {
    const tokens = JwtService.getAccessToken();
    if (tokens) {
      setIsLoggedIn(true);
    }
  };

  const getUser = () => {
    setUser();
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <RootProvider
      currentUser={user}
      updateUserData={() => getUser()}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    >
      <div className=''>
        <AppRoutes />
      </div>
    </RootProvider>
  );
}

export default App;
