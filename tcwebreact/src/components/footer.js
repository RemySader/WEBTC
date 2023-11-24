import React from 'react';
import { Paper, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Paper style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333333', color: '#fff' }}>
      <Container>
        <Typography variant="body2" align="center">
          Your Footer Content © {new Date().getFullYear()}
          {' | '}
          <Link href="#" color="inherit" rel="noopener noreferrer">
            Terms of Service
          </Link>
          {' | '}
          <Link href="#" color="inherit" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit" rel="noopener noreferrer">
            Contact Us
          </Link>
          {' | '}
          <Link href="#" color="inherit" rel="noopener noreferrer">
            FAQs
          </Link>
        </Typography>
        <Typography variant="body2" align="center">
          Follow us on:
          {' '}
          <IconButton color="inherit" href="#" rel="noopener noreferrer">
            <FacebookIcon />
          </IconButton>
          {' | '}
          <IconButton color="inherit" href="#" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
          {' | '}
          <IconButton color="inherit" href="#" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
