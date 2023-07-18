import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';
function DetailPage() {
  const [Data, setData] = useState(null);
  const { id } = useParams();
  const baseURL = `https://64b333bf38e74e386d55ee12.mockapi.io/staffManagement/${id}`; // Replace with your API endpoint for individual player detail

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error(`HTTP Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (!Data) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Card style={{ backgroundColor: 'rgb(245,245,220)' }}>
        <CardMedia component="img" height="550" image={Data.avatar} alt={Data.name} style={{ objectFit: 'cover' }} />
       
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom style={{ color: 'black' }} >
            {Data.name}
          </Typography>
          <Divider />
          <Typography variant="body1" color="text.secondary" style={{ color: 'black' }}>
            Address: {Data.address}
          </Typography>
          
          <Typography variant="body1" color="text.secondary" style={{ color: 'black' }}>
            Age: {Data.age}
          </Typography>
          
          <Typography variant="body1" color="text.secondary" style={{ color: 'black' }}>
            Create Date: {Data.createdAt}
          </Typography>
          <Divider />
        </CardContent>
      </Card>
    </Container>
  );
}

export default DetailPage;
