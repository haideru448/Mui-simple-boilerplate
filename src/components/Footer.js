import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';


const tabsStyles = { fontSize: '13px', color: 'white', cursor: 'pointer' };

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

const footerLinksStyles = {
  gridTemplateColumns: 'repeat(5,auto)',
  columnGap: '20px',
};

const socialMediaLinkStyles = {
  cursor: 'pointer',
  fontSize: '20px',
};

const socialMediaLinks = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  vimeo: 'https://vimeo.com',
  youtube: 'https://youtube.com',
};

const Footer = () => {
  const isSmall = useMediaQuery('(max-width:978px)');

  const navigateToSection = () => {
    document.getElementById('hero').scrollIntoView();
    // objDiv.scrollTop = objDiv.scrollHeight;
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: window.location.pathname.includes('pricing') && 'absolute',
        ...footerMainContainerStyles,
      }}>
      <Container>
        <Box sx={{ ...footerDescriptionSection, flexDirection: isSmall && 'column' }}>
          {isSmall && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                sx={{
                  ...gridItemsStyles,
                  ...footerLinksStyles,

                  justifyContent: isSmall && 'center',
                  mt: isSmall && '10px',
                }}>
                <Typography variant='p' sx={{ ...tabsStyles }} onClick={() => navigateToSection()}>
                  Home{' '}
                </Typography>

                <a href='#pricing-table' style={{ position: 'relative', bottom: '1.5px', textDecoration: 'none' }}>
                  <Typography variant='p' sx={{ ...tabsStyles }}>
                    Pricing
                  </Typography>
                </a>
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
                    sx={{ ...socialMediaLinkStyles }}
                  />
                )}
                {socialMediaLinks?.twitter && (
                  <TwitterIcon
                    onClick={() => (window.location = socialMediaLinks.twitter)}
                    sx={{ ...socialMediaLinkStyles }}
                  />
                )}
                {socialMediaLinks?.youtube && (
                  <YouTubeIcon
                    onClick={() => (window.location = socialMediaLinks.youtube)}
                    sx={{ ...socialMediaLinkStyles }}
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
          )}

          <Typography variant='p' sx={{ fontSize: '13px', color: 'white', textAlign: isSmall && 'center' }}>
            Medical <br />
            © 2022 Medical Clinic || Created for <br />
            free using Wordpress and{' '}
            <a href='https://google.com/' style={{ color: 'blue' }}>
              Collibri
            </a>
          </Typography>

          {!isSmall && (
            <Box
              sx={{
                ...gridItemsStyles,
                ...footerLinksStyles,
                justifyContent: isSmall && 'center',
                mt: isSmall && '10px',
              }}>
              <Typography variant='p' sx={{ ...tabsStyles }} onClick={() => navigateToSection()}>
                Home{' '}
              </Typography>
              <a href='#pricing-table' style={{ textDecoration: 'none', position: 'relative', bottom: '1.5px' }}>
                <Typography variant='p' sx={{ ...tabsStyles }}>
                  Pricing
                </Typography>
              </a>
            </Box>
          )}

          {!isSmall && (
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
                  sx={{ ...socialMediaLinkStyles }}
                />
              )}
              {socialMediaLinks?.twitter && (
                <TwitterIcon
                  onClick={() => (window.location = socialMediaLinks.twitter)}
                  sx={{ ...socialMediaLinkStyles }}
                />
              )}
              {socialMediaLinks?.youtube && (
                <YouTubeIcon
                  onClick={() => (window.location = socialMediaLinks.youtube)}
                  sx={{ ...socialMediaLinkStyles }}
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
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
