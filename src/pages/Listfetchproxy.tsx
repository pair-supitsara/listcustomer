import React, { useState } from "react";
import Listcustomer from '../components/Listcustomer.tsx';

const Listthunkredux: React.FC = () => {
  const [listcustomer, setListcustomer] = useState([{
      id: '111',
      name: 'firstname1 lastname1'
    },
    {
      id: '112',
      name: 'firstname2 lastname2'
    },
    {
      id: '113',
      name: 'firstname3 lastname3'
    }
  ])

  return (
    <div>
      <h1>List thunk Redux</h1>
      <Listcustomer lists={listcustomer}/>
    </div>
  );
};

export default Listthunkredux;