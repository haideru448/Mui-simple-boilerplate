import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import useStyles from '../styles/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';

const tabsStyles = { fontSize: '13px', color: 'white' };
const gridItemsStyles = {
  display: 'grid',
  alignItems: 'center',
};

const footerDescriptionSection = { display: 'flex', justifyContent: 'space-between', pt: '10px', pb: '10px' };

const footerMainContainerStyles = {
  right: '0',
  left: '0',
  bottom: '0',
  display: 'flex',
  justifyContent: 'space-between',
  background: '#454545',
};

const socialMediaLinks = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  vimeo: 'https://vimeo.com',
  youtube: 'https://youtube.com',
};

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:978px)');

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: window.location.pathname.includes('pricing') && 'absolute',
        ...footerMainContainerStyles,
      }}>
      <Container>
        <Box sx={{ ...footerDescriptionSection, flexDirection: isSmall && 'column' }}>
          <Typography variant='p' sx={{ fontSize: '13px', color: 'white' }}>
            Medical <br />
            © 2022 Medical Clinic || Created for <br />
            free using Wordpress and{' '}
            <a href='' style={{ color: 'blue' }}>
              Collibri
            </a>
          </Typography>
          {/* <Typography className={classes.footerDate}>Open-Source Sample - Buit with MUI</Typography> */}
          <Box
            sx={{
              ...gridItemsStyles,
              gridTemplateColumns: 'repeat(5,auto)',
              columnGap: '20px',
              justifyContent: isSmall && 'center',
              mt: isSmall && '10px',
            }}>
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
              justifyContent: isSmall && 'center',
              mt: isSmall && '10px',
            }}>
            {socialMediaLinks?.facebook && (
              <FacebookIcon
                onClick={() => (window.location = socialMediaLinks.facebook)}
                sx={{ cursor: 'pointer', fontSize: '20px' }}
              />
            )}
            {socialMediaLinks?.twitter && (
              <TwitterIcon
                onClick={() => (window.location = socialMediaLinks.twitter)}
                sx={{ cursor: 'pointer', fontSize: '20px' }}
              />
            )}
            {socialMediaLinks?.youtube && (
              <YouTubeIcon
                onClick={() => (window.location = socialMediaLinks.youtube)}
                sx={{ cursor: 'pointer', fontSize: '20px' }}
              />
            )}
            {socialMediaLinks?.youtube && (
              <Box
                component='img'
                src='/icons/vimeo.svg'
                onClick={() => (window.location = socialMediaLinks.vimeo)}
                sx={{ cursor: 'pointer', height: '20px', weight: '20px' }}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
