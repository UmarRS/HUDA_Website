import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const sideNavStuff = (
  <React.Fragment>
    <ListItemButton component={Link} to ="/appointments">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Patient Overview" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Request">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Request Appointment" />
    </ListItemButton>
    <ListItemButton component={Link} to="/Medical">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Medical History" />
    </ListItemButton>
  </React.Fragment>
);