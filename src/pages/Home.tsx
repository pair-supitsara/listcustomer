import React from "react";
import { useSelector } from "react-redux";


const Home: React.FC = () => {
  const isAuthen = useSelector((state: any) => state.authen.isAuthen);

  return (
    <div>
      <h1>Home</h1>
      <span>isAuthen : { isAuthen ? 'true' : 'false' }</span>
    </div>
  );
};

export default Home;