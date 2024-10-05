import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return( 
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor:"#333333",padding:"5px"}} position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PRODUCT APP
        </Typography>
        <Link to={'/'}><Button style={{backgroundColor:"white",marginLeft:"10px",color:"black"}} color="secondary">Home</Button></Link>
        <Link to={'/add'}><Button style={{backgroundColor:"white",marginLeft:"10px",color:"black"}} color="secondary">Add</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
  
}

export default Navbar