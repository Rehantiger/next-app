
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme for styling
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // Custom blue color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

const Navbar = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" component="div">
              Techozon
            </Typography>
          </Grid>
          <Grid item>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <Link href="/" underline="none" color="inherit">
                  Home
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link href="/about" underline="none" color="inherit">
                  About
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link href="/blog" underline="none" color="inherit">
                  Blog
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link href="/contact" underline="none" color="inherit">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

const styles = {
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginRight: '2rem',
    fontSize: '1rem',
  },
};

export default Navbar;
