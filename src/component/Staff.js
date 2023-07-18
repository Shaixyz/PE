import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
function Staff() {
    const [APIData, setAPIData] = useState([]);
    const baseURL = 'https://64b333bf38e74e386d55ee12.mockapi.io/staffManagement'; // Replace with your API base URL

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
            setAPIData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px', backgroundColor: 'rgb(245,245,220)' }} >

            <Grid container spacing={2} justifyContent="center">

                {APIData.map((data) => (
                    <Grid item key={data.id} md={4}>
                        <Card style={{ backgroundColor: 'rgb(255,228,181)' }}>
                            <CardMedia component="img" height="240" image={data.avatar} alt={data.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.age}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data.address}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button size="small" style={{ color: 'black' }}>{data.nation}</Button>
                                <Link to={`detail/${data.id}`}>
                                    <Button size="small" style={{ color: 'black', marginLeft: '-64px', border: '2px solid black',backgroundColor:'#F4A460', fontWeight: 'medium ' }}>Detail</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Link to={`/add`} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', textDecoration: 'none' }}>
                <AddIcon />
            </Link>
        </Container>
    );
}

export default Staff;
