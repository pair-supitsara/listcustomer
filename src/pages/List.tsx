import React, { useState } from "react";
import Listcustomer from '../components/Listcustomer.tsx';

const List: React.FC = () => {
  const [listcustomer, setListcustomer] = useState([{
      id: '111',
      name: 'ทดสอบชื่อ ทดสอบนามสกุล'
    },
    {
      id: '112',
      name: 'ทดสอบชื่อ ทดสอบนามสกุล'
    },
    {
      id: '113',
      name: 'ทดสอบชื่อ ทดสอบนามสกุล'
    }
  ])
  console.log('List.tsx')
  return (
    <div>
      <h1>List</h1>
      <Listcustomer lists={listcustomer}/>
    </div>
  );
};

export default List;