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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Tooltip from '@mui/material/Tooltip';

import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  // Authorization: 'JWT fefege...',
};

const profileIconsStyles = { fontSize: '40px', display: 'flex', ml: 'auto', mr: 'auto', color: '#1976d2' };
const loginCardStyles = { width: '400px', height: '400px', pt: '10px', pr: '10px' };

export default function RegisterCard({ handleClose }) {
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const registerEmail = () => {
    console.log(process.env.REACT_APP_API_URL);

    if (!formData.email.includes('@')) {
      toast.error('This is not a Valid Email');

      return 0;
    }
    const data = {
      email: formData.email,
      password: formData.password,
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
        <Box sx={{ display: 'flex', columnGap: '5px' }}>
          <TextField
            type='email'
            id='outlined-required'
            label={isEmailFocused ? 'Email' : 'example@domain.com'}
            fullWidth
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => {
              formData?.email === '' && setIsEmailFocused(false);
            }}
            sx={{
              '& .MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline': {
                borderColor: (formData?.email === '' || !formData?.email.includes('@')) && 'red',
              },
            }}
          />
          <Tooltip title='Email field @ is required' sx={{ mt: 'auto', mb: 'auto' }}>
            <QuestionMarkIcon />
          </Tooltip>
        </Box>
        <Box sx={{ display: 'flex', columnGap: '5px', mt: '20px' }}>
          <TextField
            type='email'
            id='outlined-required'
            label='my_username'
            fullWidth
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline': {
                borderColor: formData.username === '' && 'red',
              },
            }}
          />
          <Tooltip title='Username Field' sx={{ mt: 'auto', mb: 'auto' }}>
            <QuestionMarkIcon />
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', columnGap: '5px', mt: '20px', mb: 'auto' }}>
          <TextField
            type='password'
            id='outlined-required'
            label='password'
            fullWidth
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline': {
                borderColor: formData.password === '' && 'red',
              },
            }}
          />
          <Tooltip title='Password Field' sx={{ mt: 'auto', mb: 'auto' }}>
          
            <QuestionMarkIcon sx={{ marginTop: 'auto', mb: 'auto' }} />
          </Tooltip>
        </Box>

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
      <CardActions sx={{justifyContent:'center'}}>
        <Button
          variant='contained'
          size='small'
          onClick={() => registerEmail()}
          disabled={
            (!formData.email.length === 0 ||
              !formData.email.includes('@') ||
              formData.password.length === 0 ||
              formData.username.length === 0) &&
            true
          }>
          Sign up
        </Button>
      </CardActions>
    </Card>
  );
}
