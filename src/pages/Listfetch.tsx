import React, { useState, useEffect } from "react";
import Listcustomer from '../components/Listcustomer.tsx';

interface list {
  id: string;
  name: string;
}

const Listfetch: React.FC = () => {
  const [data, setData] = useState<list[]>([]);  // State to store API data
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null);  // State to handle errors
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())  // Parse JSON data
      .then(data => {
        setData([
          {
            id: '222',
            name: 'ทดสอบ fetch'
          },
          {
            id: '333',
            name: 'ทดสอบ fetch2'
          },
          {
            id: '444',
            name: 'ทดสอบ fetch3'
          }
        ]);  // Set the data state
        setLoading(false);  // Set loading to false
      })
      .catch(error => {
        setError(error);  // Set error if any occurs
        setLoading(false);  // Set loading to false
      });
  }, [])

  if (loading) {
    return <div>Loading...</div>;  // Show loading text while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if there's an issue
  }
  
  return (
    <div>
      <h1>Listfetch</h1>
      <Listcustomer lists={data}/>
    </div>
  );
};

export default Listfetch;