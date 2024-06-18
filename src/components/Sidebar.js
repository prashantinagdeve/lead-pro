// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { Home as HomeIcon, MonetizationOn, People, Phone, Campaign, FollowTheSigns, FormatListBulleted, Message, Forum, Settings, ExitToApp } from '@mui/icons-material';
import './Sidebar.css';

const menuItems = [
  { text: 'Dashboard', icon: <HomeIcon />, path: '/' },
  { text: 'Expense Manager', icon: <MonetizationOn />, path: '/expense-categories' },
  { text: 'Staff Members', icon: <People />, path: '/staff-members' },
  { text: 'Salesmans', icon: <People />, path: '/salesmans' },
  { text: 'Call Manager', icon: <Phone />, path: '/call-manager' },
  { text: 'Campaigns', icon: <Campaign />, path: '/campaigns' },
  { text: 'Leads & Calls', icon: <Phone />, path: '/leads-calls' },
  { text: 'Lead Follow Up', icon: <FollowTheSigns />, path: '/lead-follow-up' },
  { text: 'Lead Table Fields', icon: <FormatListBulleted />, path: '/lead-table-fields' },
  { text: 'Messaging', icon: <Message />, path: '/messaging' },
  { text: 'Forms', icon: <Forum />, path: '/forms' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
  { text: 'Logout', icon: <ExitToApp />, path: '/logout' }
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      className="sidebar"
    >
      <Box className="sidebar-header">
        <Typography variant="h6" noWrap>
          LEADPRO
        </Typography>
      </Box>
      <Divider />
      <List className="sidebar-list">
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
