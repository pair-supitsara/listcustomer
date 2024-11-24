import React from 'react';
import classes from './App.module.css';
import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation.tsx';

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1>Welcome to App.tsx</h1>
      <nav className={classes.menu}>
        <Navigation />
      </nav>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;