import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { sideNavStuff } from './sideNav';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';


function BottomCopyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.hudaclinic.org/">
        HUDA Clinic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#1E2A41',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function Request() {
  const [open, setOpen] = React.useState(true);
  const [reason, setReason] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dob, setDob] = React.useState(new Date());
  const [appointmentDateTime, setAppointmentDateTime] = React.useState(new Date());

  const handleSubmit = () => {
    console.log('Appointment details submitted:', {
      firstName,
      lastName,
      dob,
      reason,
      appointmentDateTime,
    });
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    const idToken = localStorage.getItem('id_token');
 
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
 
    const logoutUrl = `/`;
 
    // Redirect the user to the homepage or login page
    window.location.href = logoutUrl;

 
    handleMenuClose();
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Request Appointment
            </Typography>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Badge>
                <AccountCircleIcon />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              MenuListProps={{
               'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
           </Menu>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {sideNavStuff}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
             label="First Name"
             fullWidth
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
           />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
                  label="Last Name"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
          </Grid>
          <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={dob}
                    onChange={(date) => setDob(date)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
          </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
          <TextField
                  label="Reason for Appointment"
                  multiline
                  rows={4}
                  fullWidth
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
          </Grid>
          <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
                    label="Desired Date & Time"
                    inputFormat="MM/dd/yyyy hh:mm a"
                    value={appointmentDateTime}
                    onChange={(date) => setAppointmentDateTime(date)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
          </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          </Grid>
          </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Request