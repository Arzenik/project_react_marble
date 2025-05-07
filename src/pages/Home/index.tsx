import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import BestExperiences from '../../components/BestExperiences';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Home = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    height: { xs: '70vh', md: '80vh' },
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    px: 2
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                >
                    Découvrez des Expériences Uniques
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: 800,
                        mb: 5,
                        fontWeight: 400
                    }}
                >
                    Explorez notre sélection d'activités exceptionnelles et créez des souvenirs inoubliables
                </Typography>
                <Button
                    component={Link}
                    to="/experiences"
                    variant="contained"
                    size="large"
                    sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 2,
                        textTransform: 'none',
                        boxShadow: 3
                    }}
                >
                    Voir les expériences
                </Button>
            </Box>

            {/* Pourquoi Marble Section - Améliorée */}
            <Box sx={{ py: 8, backgroundColor: '#fff' }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        component="h2"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            mb: 5,
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -12,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 80,
                                height: 3,
                                backgroundColor: 'primary.main',
                                borderRadius: 2
                            }
                        }}
                    >
                        L'Expérience Marble
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 3 }}>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                    Sélection Rigoureuse
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Nous sélectionnons méticuleusement chaque expérience pour vous garantir des moments d'exception.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <StarIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                    Qualité Garantie
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Toutes nos expériences sont évaluées et approuvées par notre communauté de voyageurs exigeants.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <SupportAgentIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                    Service Personnalisé
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Notre équipe est à votre disposition pour vous aider à trouver et réserver l'expérience parfaite.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Espacement entre les sections */}
            <Box sx={{ py: 4, backgroundColor: '#fff' }} />

            {/* Best Experiences Section */}
            <BestExperiences />

            {/* Espace avant le footer */}
            <Box sx={{ py: 6 }} />
        </Box>
    );
};

export default Home; 