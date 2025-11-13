// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Components
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Products from './pages/Products';
import Settings from './pages/Settings';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4338ca',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Sidebar open={sidebarOpen} onToggle={setSidebarOpen} />
          <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <TopBar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="content-area">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;