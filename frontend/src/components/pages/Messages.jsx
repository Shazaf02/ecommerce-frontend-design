import React, { useState } from 'react';
import { Box, Container, Card, CardContent, Typography, Grid, Button, Divider, Avatar, List, ListItem, ListItemText, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { MailOutline as MailIcon, Delete as DeleteIcon, Reply as ReplyIcon } from '@mui/icons-material';

const Message = () => {
  // Sample messages data
  const messages = [
    { id: 1, sender: 'John Doe', subject: 'Meeting Reminder', body: 'Reminder for our meeting tomorrow at 10AM.', date: '2024-12-27' },
    { id: 2, sender: 'Jane Smith', subject: 'Project Update', body: 'The latest update on the project is attached.', date: '2024-12-26' },
    { id: 3, sender: 'Alice Johnson', subject: 'Invoice #12345', body: 'Please find your invoice for the month of December attached.', date: '2024-12-25' },
  ];

  // State to manage the dialog
  const [openReplyDialog, setOpenReplyDialog] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setOpenReplyDialog(true);  // Open the reply dialog
  };

  const handleCloseDialog = () => {
    setOpenReplyDialog(false);
    setReplyContent('');  // Clear the reply content when closing the dialog
  };

  const handleReplySubmit = () => {
    // Logic to send the reply (e.g., API call)
    console.log('Replying to:', selectedMessage);
    console.log('Reply Content:', replyContent);

    // Close the dialog and reset
    handleCloseDialog();
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f4f6f8', 
      minHeight: '100vh', 
      paddingBottom: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center', 
      paddingTop: '2rem' ,
      width:'100%',
    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Messages
        </Typography>

        {/* Message List */}
        <List sx={{ width: '100%' }}>
          {messages.map((message) => (
            <ListItem key={message.id} sx={{ marginBottom: '1rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Sender Avatar and Info */}
                <Grid item>
                  <Avatar>{message.sender.charAt(0)}</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" fontWeight="bold">
                    {message.sender}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {message.subject}
                  </Typography>
                  <Typography variant="body2">{message.body}</Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ display: 'block', marginTop: '8px' }}>
                    {message.date}
                  </Typography>
                </Grid>
                {/* Action Buttons */}
                <Grid item>
                  <IconButton color="primary" sx={{ marginRight: 1 }} onClick={() => handleReplyClick(message)}>
                    <ReplyIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ margin: '2rem 0' }} />

        {/* Floating Action Button to Compose a New Message */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            borderRadius: '50%',
            padding: '16px',
            boxShadow: 3,
            '&:hover': {
              backgroundColor: '#1976d2', // Darker blue on hover
            },
          }}
        >
          <MailIcon />
        </Button>
      </Container>

      {/* Reply Dialog */}
      <Dialog open={openReplyDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ fontWeight: 'bold', color: '#1976d2' }}>Reply to {selectedMessage?.sender}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '1rem' }}>
            Subject: {selectedMessage?.subject}
          </Typography>
          <TextField
            label="Write your reply"
            fullWidth
            multiline
            rows={4}
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            variant="outlined"
            sx={{
              marginBottom: '1rem',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#f5f5f5',
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="default">
            Cancel
          </Button>
          <Button
            onClick={handleReplySubmit}
            color="primary"
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1565c0', // Darker blue on hover
              },
            }}
          >
            Send Reply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Message;
