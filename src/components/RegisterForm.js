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

var passwordValidationRegex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

const headers = {
  'Content-Type': 'application/json',
  // Authorization: 'JWT fefege...',
};

const profileIconsStyles = { fontSize: '40px', display: 'flex', ml: 'auto', mr: 'auto', color: '#1976d2' };
const loginCardStyles = { width: '400px', height: '400px', pt: '10px', pr: '10px' };

const fieldBoxesStyles = { display: 'flex', columnGap: '5px', mt: '20px' };

const closeIconStyles = {
  display: 'flex',
  ml: 'auto',
  cursor: 'pointer',
};

export default function RegisterCard({ handleClose }) {
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const registerEmail = () => {
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
      <CloseIcon sx={{ ...closeIconStyles }} onClick={() => handleClose()} />

      <AccountCircleIcon sx={{ ...profileIconsStyles }} />
      <Typography variant='p' sx={{ display: 'flex', justifyContent: 'center' }}>
        Register
      </Typography>
      <CardContent>
        <Box sx={{ ...fieldBoxesStyles, mt: 'auto' }}>
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
        <Box sx={{ ...fieldBoxesStyles }}>
          <TextField
            type='email'
            id='outlined-required'
            label='my_username'
            fullWidth
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline': {
                borderColor:
                  (formData.username === '' || formData.username.length < 5 || !formData.username.includes('_')) &&
                  'red',
              },
            }}
          />
          <Tooltip title='Username Field' sx={{ mt: 'auto', mb: 'auto' }}>
            <QuestionMarkIcon />
          </Tooltip>
        </Box>

        <Box sx={{ ...fieldBoxesStyles, mb: 'auto' }}>
          <TextField
            type='password'
            id='outlined-required'
            label='password'
            fullWidth
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root  .MuiOutlinedInput-notchedOutline': {
                borderColor:
                  (formData.password === '' ||
                    formData.password.length < 5 ||
                    passwordValidationRegex.test(formData.password) === false) &&
                  'red',
              },
            }}
          />
          <Tooltip title='Password Field' sx={{ mt: 'auto', mb: 'auto' }}>
            <QuestionMarkIcon sx={{ marginTop: 'auto', mb: 'auto' }} />
          </Tooltip>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant='contained'
          size='small'
          onClick={() => registerEmail()}
          disabled={
            (!formData.email.length === 0 ||
              !formData.email.includes('@') ||
              formData.password.length === 0 ||
              formData.password.length < 5 ||
              passwordValidationRegex.test(formData.password) === false ||
              formData.username.length === 0 ||
              formData.username.length < 5 ||
              !formData.username.includes('_')) &&
            true
          }>
          Sign up
        </Button>
      </CardActions>
    </Card>
  );
}
