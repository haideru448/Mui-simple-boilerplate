import {
  AppBar,
  Typography,
  Link,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  Button,
} from '@mui/material';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../styles/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const links = [
    { id: 1, route: 'Features', url: '/' },
    { id: 2, route: 'login', url: '' },
  ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    setState({ ...state, [anchor]: open });
  };
  const navigateToSection = () => {
    document.getElementById('pricing-table').scrollIntoView();
    // objDiv.scrollTop = objDiv.scrollHeight;
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {links.map((link) => (
          <ListItem button key={link.id}>
            <ListItemText primary={link.route} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery('(max-width:978px)');

  return (
    <Box sx={{ marginBottom: '70px' }} id="hero">
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link href='#' underline='none'>
              <Typography variant='h5' className={classes.logo}>
                Your Logo
              </Typography>
            </Link>
            <Box>
              <a href='#pricing-table' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant='text' color='primary' sx={{ fontSize: '15px' }} onClick={() => navigateToSection()}>
                  Pricing
                </Button>
              </a>

              <Button variant='text' color='primary' sx={{ fontSize: '15px' }}>
                Text
              </Button>
            </Box>

            {matches ? (
              <Box>
                <IconButton
                  size='large'
                  edge='end'
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleDrawer('right', true)}>
                  <MenuIcon className={classes.menuIcon} fontSize='' />
                </IconButton>

                <SwipeableDrawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                  {list('right')}
                </SwipeableDrawer>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexGrow: '0.1',
                  // width: '50px',
                  
                  width:'80px',
                  minWidth:'max-content'
                }}>
                {links.map((link, index) => (
                  <Button
                    variant={index === 0 ? 'contained' : 'text'}
                    color='primary'
                    sx={{ borderRadius: '10px',  }}>
                    {link.route}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Header;
