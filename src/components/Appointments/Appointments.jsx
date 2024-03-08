import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Data from "../../Data.json"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Appointments = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={5} style={{ marginTop: "20px" }}>
                {Data.map((result, index) => (
                    <Grid item xs={12} sm={3} ms={4} key={index}>
                        <Card sx={{ maxWidth: 345, borderRadius: '10px', marginBottom: "30px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={result.img}
                                    alt={result.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {result.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" >
                                        {result.des}

                                    </Typography>
                                    <Typography variant="body2" className='date' sx={{ display: 'flex', alignItems: 'center', fontWeight: "700", justifyContent: 'space-between', marginTop: "3px" }}>
                                        {result.date}
                                        <ChevronRightIcon sx={{ fontSize: 25 }} />
                                    </Typography>
                                </CardContent>
                                <NotificationsIcon sx={{ position: 'absolute', top: '8px', right: '8px', color: 'white', backgroundColor: 'gray', borderRadius: '50%', padding: '4px' }} />
                            </CardActionArea>
                        </Card>
                    </Grid >
                ))}
            </Grid>
        </Container>
    );
};

export default Appointments;
