import React from "react";
import { useSelector } from "react-redux";


const Home: React.FC = () => {
  const authen = useSelector((state: any) => state.authen);
  console.log('Home.tsx')
  return (
    <div>
      <h1>Home</h1>
      <p>isAuthen : { authen.isAuthen ? 'true' : 'false' }</p>
      <p>usercode : { authen.usercode }</p>
      <p>agent : cashier2</p>
      <p>permission : sup</p>
    </div>
  );
};

export default Home;