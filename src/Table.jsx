// import React from "react";
// import axios from 'axios';
// import { useEffect, useState } from "react";
// export default function Table(){
//     const[users, setUsers] = useState([]);
//     useEffect(()=>{
//         axios.get("https://reqres.in/api/users")
//         .then((response)=>{
//             console.log("My Response:", response);
//             setUsers(response.data.data);
//         })
//         .catch((error)=>{
//             console.error("API call error:", error);
//         })
//     }, [])
    
// return(
//     <div>
//         <table>
//             <thead>
//             <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>           
//              </tr>
//              </thead>
//              <tbody>
//                 {users.map(user=>(
//                 <tr key={user.id}>
//                     <td>{user.id}</td>
//                     <td>{user.first_name}</td>
//                     <td>{user.last_name}</td>
//                     <td>{user.email}</td>
//                         <td>
//                             <img src={user.avatar} alt="avatar" />
//                         </td>

//                 </tr>
//                 ))}
//              </tbody>
//         </table>
//     </div>
// );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Table() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API using Axios
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // If loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the data table once loading is complete
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users List</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ width: '50px', borderRadius: '50%' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
