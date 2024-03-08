import React from 'react';
import { Container, Grid } from '@mui/material';
import SliderImage from "../../../assets/slider.png"
import "./Slider.scss"

const Slider = () => {
    return (
        <div className='grid-container'>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ position: 'relative' }}>
                        <div className="image-container">
                            <img src={SliderImage} alt="Slider Resmi" style={{ width: '100%', maxHeight: "250px", objectFit: "cover", borderRadius: "30px", }} />
                            <div className="image-overlay"></div>
                            <div className="text-container">
                                <h2 className="overlay-title">En Erken Vize Tarihini Bul</h2>
                                <p className='overlay-text'>Arayın ve anında bildirim alın!</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Slider;







//  <Container maxWidth="lg">
//             <Typography variant='h5' align='center' style={{ marginTop: "50px" }}>
//                 Material UI Responsive
//             </Typography>
//             <Grid>
//                 {Data.map((result, index) => (
//                     <Grid item xs={12} ms={4} key={index}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={result.img}
//                                     alt={result.title}
//                                 />
//                                 <CardContent> {/* CardContent bileşeni eklendi */}
//                                 <Typography gutterBottom variant="h5" component="div">
//                                 {result.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {result.des}
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                 </Card>
//             </Grid >
//         ))}
//     </Grid>
// </Container>


{/* <div className='slider'>
<div className="background-container">
    <img src="../assets/Slider.png" alt="Model1" />
    <div className='text-overlay'>
        <h1>En Erken Vize Tarihini Bul</h1>
        <p>Arayın ve anında bildirim alın!</p>
    </div>
</div>
</div> */}