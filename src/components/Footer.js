import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import useStyles from '../styles/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const tabsStyles = { fontSize: '13px', color: 'white' };
const gridItemsStyles={
  display:'grid',
  alignItems: 'center'
}

const footerDescriptionSection=
{display: 'flex', justifyContent: 'space-between', pt: '10px', pb: '10px'}

const footerMainContainerStyles={      right: '0',
left: '0',
bottom: '0',
display: 'flex',
justifyContent: 'space-between',
background: '#454545',}

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: window.location.pathname.includes('pricing') && 'absolute',
        ...footerMainContainerStyles
  
      }}>
      <Container>
        <Box sx={{ ...footerDescriptionSection }}>
          <Typography variant='p' sx={{ fontSize: '13px', color: 'white' }}>
            Medical <br />
            © 2022 Medical Clinic || Created for <br />
            free using Wordpress and{' '}
            <a href='' style={{ color: 'blue' }}>
              Collibri
            </a>
          </Typography>
          {/* <Typography className={classes.footerDate}>Open-Source Sample - Buit with MUI</Typography> */}
          <Box sx={{ ...gridItemsStyles, gridTemplateColumns: 'repeat(5,auto)',  columnGap: '20px' }}>
            <Typography variant='p' sx={{ ...tabsStyles }}>
              Home{' '}
            </Typography>

            <Typography variant='p' sx={{ ...tabsStyles }}>
              Departments
            </Typography>

            <Typography variant='p' sx={{ ...tabsStyles }}>
              About
            </Typography>
            <Typography variant='p' sx={{ ...tabsStyles }}>
              Blog
            </Typography>
            <Typography variant='p' sx={{ ...tabsStyles }}>
              Appointment
            </Typography>
          </Box>

          <Box
            sx={{
              ...gridItemsStyles,
              columnGap: '10px',
              gridTemplateColumns: 'repeat(4,auto)',
              
              
            }}>
            <FacebookIcon sx={{ fontSize: '20px' }} />
            <TwitterIcon sx={{ fontSize: '20px' }} />
            <YouTubeIcon sx={{ fontSize: '20px' }} />
            <Box component='img' src='/icons/vimeo.svg' sx={{ height: '20px', weight: '20px' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
