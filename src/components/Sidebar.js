// components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  Settings as SettingsIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  { text: 'Users', icon: <PeopleIcon />, path: '/users' },
  { text: 'Products', icon: <InventoryIcon />, path: '/products' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = ({ open, onToggle }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 280 : 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 280 : 80,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {open && (
          <Typography variant="h4" className="gradient-text" fontWeight="bold">
            NEXUS
          </Typography>
        )}
        <IconButton
          onClick={() => onToggle(!open)}
          sx={{
            color: 'white',
            background: 'rgba(99, 102, 241, 0.2)',
            '&:hover': { background: 'rgba(99, 102, 241, 0.3)' },
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              margin: '0.5rem 1rem',
              borderRadius: 2,
              background: location.pathname === item.path 
                ? 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
                : 'transparent',
              '&:hover': {
                background: location.pathname === item.path 
                  ? 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
              },
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              color: 'white',
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;