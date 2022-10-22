import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  // Authorization: 'JWT fefege...',
};

const profileIconsStyles = { fontSize: '40px', display: 'flex', ml: 'auto', mr: 'auto', color: '#1976d2' };
const loginCardStyles = { width: '400px', height: '400px', pt: '10px', pr: '10px' };

export default function RegisterCard({ handleClose }) {
  const [email, setEmail] = useState('');
  const registerEmail = () => {
    console.log(process.env.REACT_APP_API_URL);

    if (!email.includes('@')) {
      toast.error('This is not a Valid Email');

      return 0;
    }
    const data = {
      email: email,
      password: 'TopSecret!',
      setting: {},
    };
    axios
      .post(process.env.REACT_APP_API_URL, data, {
        headers: headers,
      })
      .then((response) => {
        toast.success('Details Sent on email');
      })
      .catch((error) => {
        toast.error('Some Error Occurred');
      });
  };
  return (
    <Card variant='outlined' sx={{ ...loginCardStyles }}>
      <Toaster position='top-center' reverseOrder={false} />
      <CloseIcon sx={{ display: 'flex', ml: 'auto', cursor: 'pointer' }} onClick={() => handleClose()} />

      <AccountCircleIcon sx={{ ...profileIconsStyles }} />
      <Typography variant='p' sx={{ display: 'flex', justifyContent: 'center' }}>
        Register
      </Typography>
      <CardContent>
        <TextField
          type='email'
          id='outlined-required'
          label='Email'
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => registerEmail()}>
          Register
        </Button>
      </CardActions>
    </Card>
  );
}
