import React, { useState } from "react";
import Listcustomer from '../components/Listcustomer.tsx';
import useFetch from '../hooks/useFetch.ts'

const Listcustomhook: React.FC = () => {
  const { data, loading, error } = useFetch('http://192.168.110.36/api/cashier/v1.0/fnGetListCashier', { username: 'cashier8', listcolor: "all" });

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
      <h1>List Custom Hook</h1>
      <Listcustomer lists={listcustomer}/>

      <h1>Posts</h1>
      <ul>
        {data &&
          data.map((post: { id: number; title: string }) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Listcustomhook;