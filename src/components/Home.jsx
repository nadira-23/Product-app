import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
//import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
//import backgroundImage from "./REACT Learnings/product-app/public/images"; // Adjust the path as necessary
import backgroundImage from '/images/backgroundImage.jpg'; // Adjust the path as necessary



const Home = () => {
    // const rows=[{
    //     empid:1034,
    //     name:"Sruthy",
    //     dept:"Developement",
    //     location:"TVM"
    // },
    // {
    //     empid:1036,
    //     name:"Archana",
    //     dept:"Marketing",
    //     location:"KOchi "
    // },
    // {
    //     empid:1037,
    //     name:"Anandh",
    //     dept:"System Anlyst",
    //     location:"TVM" 
    // }
    const [rows,setRows]=useState([]);
//connecting external Api
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{

    setRows(res.data);
  })

},[])



return (
  <>
  <div 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',}}>
<div>
  <Grid container spacing={4}> {/* Adjusted spacing for more space between cards */}
    {rows.map((row) => (
      <Grid item xs={12} sm={6} md={4} key={row.id}>
        <Card style={{ width: '70%', height: '90%',marginTop:"50px"}}> {/* Allow card to take full width/height */}
          <CardMedia
            component="img"
            style={{ height: 300, objectFit: "cover" }} // Adjust height for the image
            image={row.image}
            alt={row.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {row.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {row.rating.rate}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  </div>
  </div>
  </>
);

 };




export default Home
