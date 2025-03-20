import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperienceList from './pages/ExperienceList';
import ExperienceDetail from './pages/ExperienceDetail';
import Booking from './pages/Booking';

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
      <Router>
        <div className="App">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<ExperienceList />} />
              <Route path="/experiences/:id" element={<ExperienceDetail />} />
              <Route path="/booking/:id" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
