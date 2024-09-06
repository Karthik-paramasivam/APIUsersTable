import React, { useEffect, useState } from 'react';
import { Table, Avatar, Spin } from 'antd';
import axios from 'axios';

export default function ApiTable(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API using Axios
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => {
        setUsers(response.data.data); // Set the user data
        console.log(response);
        setLoading(false); // Stop loading spinner
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading spinner even on error
      });
  }, []);

  // Define table columns
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => <Avatar  src={avatar} size={50} />, // Display avatar as an image
    },
  ];

  // Show loading spinner until data is fetched
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Users List</h1>
      <Table columns={columns} dataSource={users} rowKey="id"
              pagination={{ pageSize: 4 }}
              />
    </div>
  );
};

