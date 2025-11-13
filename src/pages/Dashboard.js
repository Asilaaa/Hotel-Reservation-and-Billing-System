// pages/Dashboard.js
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, change, icon, color }) => (
  <Card className="glass pulse-glow" sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography color="textSecondary" gutterBottom variant="overline">
            {title}
          </Typography>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
          <Chip 
            label={change} 
            size="small" 
            color={change.includes('+') ? 'success' : 'error'}
            sx={{ mt: 1 }}
          />
        </Box>
        <Box
          sx={{
            background: `linear-gradient(135deg, ${color}30 0%, ${color}10 100%)`,
            borderRadius: 3,
            p: 1,
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const stats = [
    {
      title: 'TOTAL REVENUE',
      value: '$42,567',
      change: '+12.5%',
      icon: <MoneyIcon sx={{ color: '#10b981', fontSize: 32 }} />,
      color: '#10b981'
    },
    {
      title: 'ACTIVE USERS',
      value: '12,458',
      change: '+8.2%',
      icon: <PeopleIcon sx={{ color: '#6366f1', fontSize: 32 }} />,
      color: '#6366f1'
    },
    {
      title: 'ORDERS',
      value: '1,245',
      change: '+15.3%',
      icon: <ShoppingCartIcon sx={{ color: '#ec4899', fontSize: 32 }} />,
      color: '#ec4899'
    },
    {
      title: 'GROWTH',
      value: '32.8%',
      change: '+5.7%',
      icon: <TrendingUpIcon sx={{ color: '#f59e0b', fontSize: 32 }} />,
      color: '#f59e0b'
    },
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom fontWeight="bold" className="gradient-text">
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}

        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Card className="glass" sx={{ height: 400 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Performance Metrics
              </Typography>
              <Box sx={{ mt: 3 }}>
                {['Website Visits', 'Conversion Rate', 'Bounce Rate', 'Avg. Session'].map((metric, index) => (
                  <Box key={metric} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{metric}</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {[12543, 3.2, 42.1, '00:03:45'][index]}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={[75, 32, 42, 60][index]} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: `linear-gradient(90deg, #6366f1, #ec4899)`,
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="glass" sx={{ height: 400 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ mt: 2 }}>
                {['Add New User', 'Create Report', 'Update Settings', 'View Analytics'].map((action) => (
                  <Box
                    key={action}
                    sx={{
                      p: 2,
                      mb: 1,
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(99, 102, 241, 0.2)',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <Typography>{action}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;