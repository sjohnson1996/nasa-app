import { useState, useEffect } from 'react';
import './App.css';
import Space from './images/space.jpeg';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=pHaZAi1sRICSKmqkNqLIieadVr15pl6OQ8xbTKD3`)
    .then(data => setData(data));
  }, [])

  console.log(data);

  return (
    <div
      style={{
        background: `url(${Space}) no-repeat center center fixed`,
        width: '100vw',
        height: '100vh',

      }}
    >
      <h1 style={{ 
        textAlign: 'center', 
        padding: '10px', 
        backgroundColor: '#58587a', 
        color: 'white', 
        margin: '0px', 
      }}
      >
        Welcome To My Website
      </h1>
      <div
        style={{
          backgroundColor: 'white',
          display:'flex',
          flexWrap:'wrap'
        }}
      >
        {(Object.keys(data).length) ?
        <>
          {data.data.photos.map((photo, i) => {
          if (i < 50) return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={photo.img_src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
          console.log(photo.img_src)
        })}
      </>
      :
        null
      }
      </div>
    </div>
  );
}

export default App;
