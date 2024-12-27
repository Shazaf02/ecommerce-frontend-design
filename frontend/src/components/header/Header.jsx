import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, InputAdornment, Grid, Divider } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'; // Import Link for routing
import NavBar from './NavBar';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        padding: '10px 20px',
        width: '174%',
        margin: '0 auto',
        marginBottom: '100%',
        marginLeft: '-1%' // Center align for the entire header
      }}
    >
      <Toolbar>
        {/* Left Section: Brand Icon and Name */}
        <Grid container alignItems="center" spacing={1} sx={{ flexGrow: 0 }}>
          <Grid item>
            <IconButton edge="start" color="inherit">
              <ShoppingBagIcon sx={{ color: 'black' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Brand
            </Typography>
          </Grid>
        </Grid>

        {/* Center Section: Search Bar */}
        <Grid container justifyContent="center" sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{
              width: '100%',
              maxWidth: '600px',
              backgroundColor: '#f0f0f0',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'blue' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Right Section: Profile, Messages, Favorites */}
        <Grid container justifyContent="flex-end" spacing={1} sx={{ flexGrow: 0 }}>
          <Grid item>
            <Link to="/messages">
              <IconButton color="inherit">
                <MessageIcon sx={{ color: '#333' }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/cart">
              <IconButton color="inherit">
                <ShoppingCartIcon sx={{ color: '#333' }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/account">
              <IconButton color="inherit">
                <AccountCircleIcon sx={{ color: '#333' }} />
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/favorites">
              <IconButton color="inherit">
                <FavoriteIcon sx={{ color: '#333' }} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider sx={{ backgroundColor: 'grey' }} />

      {/* Include NavBar Component */}
      <NavBar />
    </AppBar>
  );
};

export default Header;
