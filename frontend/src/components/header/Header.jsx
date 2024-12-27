import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, InputAdornment, Grid, Divider } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
        width: '200%', // Full width for responsiveness
        margin: '0 auto',
        marginBottom:'100%',
        marginLeft:'-50%' // Center align for the entire header
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
              maxWidth: '600px', // Limit the max width of the search bar
              backgroundColor: '#f0f0f0', // Light gray background
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'blue' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      borderRadius: '10px',
                      marginLeft: '8px',
                      backgroundColor: 'lightgrey',
                    }}
                  >
                    <Typography
                      sx={{ color: 'black', marginRight: '6px', fontSize: '14px' }}
                    >
                      Search
                    </Typography>
                    <SearchIcon sx={{ color: 'black' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Right Section: Profile, Messages, Favorites */}
        <Grid container justifyContent="flex-end" spacing={1} sx={{ flexGrow: 0 }}>
          <Grid item>
            <IconButton color="inherit">
              <MessageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>
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
