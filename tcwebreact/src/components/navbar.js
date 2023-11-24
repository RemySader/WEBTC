import React, { useRef } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ onAdminClick, onUserClick }) => {
  const adminRef = useRef(null);
  const userRef = useRef(null);

  const handleAdminClick = () => {
    if (adminRef.current) {
      adminRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    onAdminClick();
  };

  const handleUserClick = () => {
    if (userRef.current) {
      userRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    onUserClick();
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div>
        <Button color="inherit" onClick={handleAdminClick} style={{ fontSize: '18px' }}>
            Admin
        </Button>
        <Button color="inherit" onClick={handleUserClick} style={{ fontSize: '18px' }}>
            User
        </Button>

        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
            TC WEB
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
