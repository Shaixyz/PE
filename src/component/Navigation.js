import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
function ResponsiveAppBar() {

  return (
    <AppBar position="static" style={{ backgroundColor: '#f05123' }}>
      
      <Container maxWidth="xl" color="black">
        <Toolbar disableGutters>
          <Box display="flex" flexGrow={1}>
          <Link to="/">
              <img
                src="https://fpt.edu.vn/Content/images/assets/2017-FE-White-Min.webp"
                alt="logo"
                width="150"
                height="40"
              />
            </Link>
            <Box>
              <Button color="inherit" component={Link} to="/">
                <HomeIcon />
                Home
              </Button>
              <Button color="inherit" component={Link} to="/dashboard">
                <DashboardIcon />
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                <ContactsIcon />
                Contact
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

