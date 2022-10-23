import React from 'react';
import { Grid, Typography, Button, Box, Card } from '@mui/material';
import bestTeams from '../images/bestTeams.jpg';
import useStyles from '../styles/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

const data = [0, 1];

const AboutUs = () => {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:678px)');

  return (
    <Box sx={{ marginBottom:isSmall ? '200px': '100px' }}>
      {data.map((data, index) => {
        return (
          <Container>
            <Box
              sx={{
                backgroundImage: `url(${bestTeams})`,
                width: '100%',
                display: 'grid',
                mt:isSmall && '100px',

                backgroundSize: isSmall && 'cover',
              }}>
              <Card
                sx={{
                  background: 'white',
                  ml: !isSmall ? (index === 0 || index % 2 === 0) && '50%':'0%',
                  mt:isSmall && '20%',

                  mr: !isSmall ? index % 2 !== 0 && '50%':'0%',
                  height: '100%',
                  borderRadius: '0',
                  p: '25px',
                  // ml: isSmall && '0%',
                }}>
                <Typography variant='h6'>THE BOOK OF COACHING</Typography>

                <Typography variant='p'>
                  Your business needs to be in safe hands at all times. We ensure you never run out of customers and not
                  run at loss. We are trusted by over 500+ companies to deliver quality marketing campaigns using
                  Digital marketing & Offline marketing channels.
                </Typography>
                <Button variant='contained' color='primary' sx={{ display: 'block', mt: '5px' }}>
                  Download Courses
                </Button>
              </Card>

              {/* <Box className={classes.aboutUsContainer}>
         <Grid container spacing={6} className={classes.gridContainer}>
           <Grid item xs={12} md={5}>
             <img src={bestTeams} alt="My Team" className={classes.largeImage} />
           </Grid>
   
           <Grid item xs={12} md={6}>
             <Typography variant="h3" fontWeight={700} className={classes.title}>
               We build, We revive
             </Typography>
             <Typography className={classes.aboutUsSubtitle}>
               Your business needs to be in safe hands at all times. We ensure you
               never run out of customers and not run at loss. We are trusted by
               over 500+ companies to deliver quality marketing campaigns using
               Digital marketing & Offline marketing channels.
             </Typography>
             <Button
               variant="contained"
               color="primary"
               sx={{ width: '200px', fontSize: '16px' }}
             >
               CONTACT US
             </Button>
           </Grid>
         </Grid>
       </Box> */}

              {/* <Box className={classes.aboutUsContainer}>
         <Grid container spacing={6} className={classes.gridContainer}>
           
   
           <Grid item xs={12} md={6}>
             <Typography variant="h3" fontWeight={700} className={classes.title}>
               We build, We revive
             </Typography>
             <Typography className={classes.aboutUsSubtitle}>
               Your business needs to be in safe hands at all times. We ensure you
               never run out of customers and not run at loss. We are trusted by
               over 500+ companies to deliver quality marketing campaigns using
               Digital marketing & Offline marketing channels.
             </Typography>
             <Button
               variant="contained"
               color="primary"
               sx={{ width: '200px', fontSize: '16px' }}
             >
               CONTACT US
             </Button>
           </Grid>
           <Grid item xs={12} md={5} sx={{marginTop:'0'}}>
             <img src={bestTeams} alt="My Team" className={classes.largeImage} />
           </Grid>
         </Grid>
       </Box> */}
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default AboutUs;
