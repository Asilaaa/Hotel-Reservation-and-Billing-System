import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Analytics = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom fontWeight="bold" className="gradient-text">
        Analytics
      </Typography>
      <Card className="glass">
        <CardContent>
          <Typography variant="h6">Analytics Dashboard Coming Soon</Typography>
          <Typography>Charts and graphs will be displayed here.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Analytics;