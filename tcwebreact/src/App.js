import React, { useState, useEffect, useRef } from 'react';
import UserForm from './components/user';
import AdminInterface from './components/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';
import axios from 'axios';
import { FloatButton } from 'antd';

const App = () => {
  const [requests, setRequests] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const userRef = useRef(null);
  const adminRef = useRef(null);


  const handleUserSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8080/submit', formData);
      setFeedbackMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setFeedbackMessage('Error submitting form. Please try again.');
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/approve/${id}`);
      const response = await axios.get('http://localhost:8080/submissions');
      setRequests(response.data);
      setFeedbackMessage('Request approved successfully.');

      // Fetch and display the user message
      const userMessageResponse = await axios.get(`http://localhost:8080/user-message/${id}`);
      setFeedbackMessage(`${feedbackMessage} ${userMessageResponse.data.message}`);
    } catch (error) {
      console.error('Error approving request:', error.message);
      setFeedbackMessage('Error approving request. Please try again.');
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/reject/${id}`);
      const response = await axios.get('http://localhost:8080/submissions');
      setRequests(response.data);
      setFeedbackMessage('Request rejected.');
    } catch (error) {
      console.error('Error rejecting request:', error.message);
      setFeedbackMessage('Error rejecting request. Please try again.');
    }
  };

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/submissions');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching submissions:', error.message);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div>
      <Navbar
        onAdminClick={() => {
          if (adminRef.current) {
            adminRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onUserClick={() => {
          if (userRef.current) {
            userRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <div ref={userRef} style={{ paddingTop: '20px', textAlign: 'center' }}>
        <UserForm onSubmit={handleUserSubmit} />
        {feedbackMessage && <p style={{ fontSize: '18px' }}>{feedbackMessage}</p>}
      </div>

      <div ref={adminRef} style={{ paddingTop: '20px' }}>
        <AdminInterface requests={requests} onApprove={handleApprove} onReject={handleReject} />
      </div>
      <Footer />

      <FloatButton.BackTop style={ { marginRight: '2%'} }/>
    </div>
  );
};

export default App;
