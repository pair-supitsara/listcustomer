import React from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to App.tsx</h1>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;