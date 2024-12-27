// Navbar.jsx
import React from 'react';
import { Button, Grid, Box } from '@mui/material';
import { Link } from 'react-dom'; // If using react-router

const NavBar = () => {
  return (
    <Box sx={{ backgroundColor: 'white', padding: '10px 0' ,marginbottom:'150%', width:'100%',marginLeft:'-10%'}}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button component={Link} to="/" variant="text" sx={{ color: 'black' }}>
            All Category
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/hot-offers" variant="text" sx={{ color: 'black' }}>
            Hot Offers
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/gift-boxes" variant="text" sx={{ color: 'black' }}>
            Gift Boxes
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/projects" variant="text" sx={{ color: 'black' }}>
            Projects
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/help" variant="text" sx={{ color: 'black' }}>
            Help
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
