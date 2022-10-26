import React from 'react';
import { Grid, Typography, Button, Box, Card } from '@mui/material';
import bestTeams from '../images/bestTeams.jpg';
import useStyles from '../styles/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const data = [
  {
    id: 0,
    title: 'THE BOOK OF COACHING',
    description: 'blah blah blah',
    image: 'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg',
  },
  {
    id: 1,
    title: 'THE BOOK OF COACHING',
    description: 'blah blah blah',
    image: 'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg',
  },
];

const AboutUs = () => {
  const classes = useStyles();
  const isSmall = useMediaQuery('(max-width:678px)');
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: isSmall ? '200px' : '100px' }}>
      {data.map((data, index) => {
        return (
          <Container>
            
              <Card sx={{ display: 'flex', flexDirection:!isSmall? (index === 0 || index % 2 === 0) && 'row-reverse':'column-reverse' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width:!isSmall? '50%':'100%' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h6'>
                      {data?.title}
                    </Typography>
                    <Typography variant='p' color='text.secondary' component='div'>
                      {data?.description}
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component='img'
                  sx={{ width:!isSmall? '50%':'100%' }}
                  image={data?.image}
                  alt='Live from space album cover'
                />
              </Card>
             
          </Container>
        );
      })}
    </Box>
  );
};

export default AboutUs;
