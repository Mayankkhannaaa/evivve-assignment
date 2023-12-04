import { useEffect, useState } from 'react';
import './App.css';
import { RootProvider } from './context/RootContext';
import { TaskProvider } from './context/TaskContext';
import AppRoutes from './routes/Routes';

function App() {
  const [user, setUser] = useState({ name: 'XYZ' });

  const getUser = () => {
    let randomNumber = Math.random();

    // Make a random choice based on the random number
    let randomChoice = randomNumber < 0.5 ? 0 : 1;

    setUser(randomChoice === 1 ? { name: 'Mayank' } : {});
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <RootProvider currentUser={user} updateUserData={() => getUser()}>
      <TaskProvider>
        <div className=''>
          <AppRoutes />
        </div>
      </TaskProvider>
    </RootProvider>
  );
}

export default App;
