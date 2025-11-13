// components/TopBar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Box,
  InputBase,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';

const TopBar = ({ onMenuToggle }) => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuToggle}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        {/* Search Bar */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 2,
          px: 2,
          py: 0.5,
          mr: 2,
        }}>
          <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', mr: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ color: 'white' }}
          />
        </Box>

        {/* Notifications */}
        <IconButton sx={{ mr: 1 }}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Theme Toggle */}
        <IconButton sx={{ mr: 2 }}>
          <DarkModeIcon />
        </IconButton>

        {/* User Avatar */}
        <Avatar
          sx={{
            width: 40,
            height: 40,
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          }}
        >
          A
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;