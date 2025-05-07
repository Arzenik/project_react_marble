import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperienceList from './pages/ExperienceList';
import ExperienceDetail from './pages/ExperienceDetail';
import Booking from './pages/Booking';
import Header from './components/Header';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42',
    },
    secondary: {
      main: '#8D99AE',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<ExperienceList />} />
                <Route path="/experience/:id" element={<ExperienceDetail />} />
                <Route path="/booking/:experienceId" element={<Booking />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
