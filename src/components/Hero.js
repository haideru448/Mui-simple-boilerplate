import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import myteam from '../images/myteam.jpg';
import useStyles from '../styles/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Backdrop from '@mui/material/Backdrop';
import RegisterForm from '../components/RegisterForm';

const Hero = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box className={classes.heroBox} id="hero">
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant='h3' fontWeight={700} className={classes.title}>
            Let's scale your business
          </Typography>
          <Typography variant='h6' className={classes.subtitle}>
            Hire professionals who will help your business make 10X your previous income. With over 5years experience in
            Marketing & Business strategy, we are your best client.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={() => setOpen(true)}>
            Try Now
          </Button>{' '}
          <br />
          <br />
          <Button variant='text' color='primary' sx={{ width: '200px', fontSize: '16px', background: 'lightgrey' }}>
            <YouTubeIcon sx={{ mr: '20px', fontSize: '30px', color: 'red' }} /> Video
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt='My Team' className={classes.largeImage} />
        </Grid>
      </Grid>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <RegisterForm handleClose={handleClose} />
      </Backdrop>
    </Box>
  );
};

export default Hero;
