import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box, Stack, MenuItem } from '@mui/material';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    ID: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reasons = ['Select a reason', 'Sick', 'Travel', 'Other'];

  const paperStyle = {
    padding: '30px',
    width: '600px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: '#f8f9fa', // Light background color
  };

  const btnStyle = {
    background: 'linear-gradient(45deg, #ffc857 30%, #ff8c33 90%)', // Orange gradient
    color: '#000',
    fontWeight: '700',
    fontSize: '18px',
    width: '150px',
    borderRadius: '25px',
    margin: '20px auto',
    textTransform: 'none',
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#007bff' }}> {/* Blue color */}
          User Interface
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="column">
            <TextField
              label="First Name"
              variant="outlined"
              placeholder="Enter First Name"
              fullWidth
              required
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              placeholder="Enter Last Name"
              fullWidth
              required
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            <TextField
              label="ID"
              variant="outlined"
              placeholder="Enter ID"
              fullWidth
              required
              name="ID"
              value={formData.ID}
              onChange={handleChange}
            />
            <TextField
              select
              label="Reason"
              variant="outlined"
              fullWidth
              required
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              {reasons.map((option, index) => (
                <MenuItem key={index} value={option} disabled={index === 0}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="contained" style={btnStyle}>
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default UserForm;
