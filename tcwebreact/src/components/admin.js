import React from 'react';
import { Typography, Button, List, ListItem, Paper, Grid } from '@mui/material';

const AdminInterface = ({ requests, onApprove, onReject }) => {
  const adminPaperStyle = {
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: '#f8f9fa', // Light background color
  };

  const listItemStyle = {
    marginBottom: '20px',
    borderBottom: '1px solid #ced4da', // Light border color
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#fff', // White background color
  };

  const approveBtnStyle = {
    background: 'linear-gradient(45deg, #28a745 30%, #218838 90%)', // Green gradient
    color: '#fff',
    fontWeight: '700',
    borderRadius: '25px',
  };

  const rejectBtnStyle = {
    background: 'linear-gradient(45deg, #dc3545 30%, #c82333 90%)', // Red gradient
    color: '#fff',
    fontWeight: '700',
    borderRadius: '25px',
    marginLeft: '10px',
  };

  return (
    <Paper elevation={3} style={adminPaperStyle}>
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#007bff' }}> {/* Blue color */}
        Admin Interface
      </Typography>
      <List>
        {requests.map((request) => (
          <ListItem key={request.id} style={listItemStyle}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Typography variant="body1">
                  <strong>First Name:</strong> {request.firstname}
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="body1">
                  <strong>Last Name:</strong> {request.lastname}
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="body1">
                  <strong>ID:</strong> {request.ID}
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="body1">
                  <strong>Reason:</strong> {request.reason}
                </Typography>
              </Grid>
            </Grid>
            {request.status ? (
              <Typography variant="body1" style={{ marginTop: '10px', color: '#6c757d' }}> {/* Gray color */}
                <strong>Status:</strong> {request.status}
              </Typography>
            ) : (
              <div style={{ marginTop: '10px' }}>
                <Button
                  className="approve"
                  variant="contained"
                  style={approveBtnStyle}
                  onClick={() => onApprove(request.id)}
                >
                  Approve
                </Button>
                <Button
                  className="reject"
                  variant="contained"
                  style={rejectBtnStyle}
                  onClick={() => onReject(request.id)}
                >
                  Reject
                </Button>
              </div>
            )}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AdminInterface;
