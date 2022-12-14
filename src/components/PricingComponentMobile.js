import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
}));

export default function Pricing(props) {
  const classes = useStyles();

  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.', 
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'Lorem ipsum',
    '01_price': '$9',
    '01_suffix': ' / mo',
    '01_benefit1': '3 Emails',
    '01_benefit2': '1 Database',
    '01_benefit3': 'Unlimited Domains',
    '01_benefit4': '10 GB Storage',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    '02_title': 'Dolor sit amet',
    '02_price': '$49',
    '02_suffix': ' / mo',
    '02_benefit1': '6 Emails',
    '02_benefit2': '2 Database',
    '02_benefit3': 'Unlimited Domains',
    '02_benefit4': '25 GB Storage',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    '03_title': 'Consectuter',
    '03_price': '$499',
    '03_suffix': ' / mo',
    '03_benefit1': '9 Emails',
    '03_benefit2': '3 Database',
    '03_benefit3': 'Unlimited Domains',
    '03_benefit4': '50 GB Storage',
    '03_primary-action': 'Select plan',
    '03_secondary-action': 'Learn more',
    ...props.content
  };


  

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['01_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" className={classes.primaryAction}>{content['01_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['02_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button variant="contained" color="primary">{content['02_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['03_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}