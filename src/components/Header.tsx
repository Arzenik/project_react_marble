import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              letterSpacing: 1
            }}
          >
            MARBLE
          </Typography>
          
          <Box>
            <Button
              component={RouterLink}
              to="/experiences"
              color="inherit"
              sx={{ ml: 2 }}
            >
              EXPÉRIENCES
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 