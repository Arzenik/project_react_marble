import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Rating, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Experience, experienceApi } from '../api/experienceApi';

const BestExperiences = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBestExperiences = async () => {
            try {
                const data = await experienceApi.getBestExperiences(3);
                setExperiences(data);
            } catch (error) {
                console.error('Erreur lors du chargement des meilleures expériences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBestExperiences();
    }, []);

    return (
        <Box sx={{ py: 6, px: { xs: 2, md: 4 }, backgroundColor: '#f8f9fa' }}>
            <Typography 
                variant="h4" 
                component="h2" 
                align="center" 
                gutterBottom
                sx={{ 
                    fontWeight: 700, 
                    mb: 4,
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 80,
                        height: 3,
                        backgroundColor: 'primary.main',
                        borderRadius: 2
                    }
                }}
            >
                Nos Meilleures Expériences
            </Typography>
            
            <Typography 
                variant="subtitle1" 
                align="center" 
                color="text.secondary" 
                sx={{ mb: 5, maxWidth: 800, mx: 'auto' }}
            >
                Découvrez notre sélection d'expériences exceptionnelles, plébiscitées par nos voyageurs pour leur authenticité et leur qualité.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {loading
                    ? Array.from(new Array(3)).map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
                                <Skeleton variant="rectangular" height={200} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Skeleton variant="text" height={32} width="80%" />
                                    <Skeleton variant="text" height={20} width="40%" />
                                    <Skeleton variant="text" height={20} width="60%" />
                                    <Skeleton variant="rectangular" height={36} width="100%" sx={{ mt: 2 }} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                    : experiences.map((experience) => (
                        <Grid item xs={12} sm={6} md={4} key={experience.id}>
                            <Card 
                                sx={{ 
                                    height: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6,
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={experience.image}
                                    alt={experience.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                        {experience.title}
                                    </Typography>
                                    
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Rating value={experience.rating} precision={0.5} readOnly size="small" />
                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                            {experience.rating.toFixed(1)}
                                        </Typography>
                                    </Box>
                                    
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {experience.location}
                                    </Typography>
                                    
                                    <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                                        {experience.price} € par personne
                                    </Typography>
                                    
                                    <Button 
                                        component={Link} 
                                        to={`/experience/${experience.id}`} 
                                        variant="contained" 
                                        fullWidth
                                        sx={{ 
                                            mt: 'auto',
                                            py: 1.2,
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: 2
                                        }}
                                    >
                                        Découvrir
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Button 
                    component={Link} 
                    to="/experiences" 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                        px: 4, 
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    Voir toutes nos expériences
                </Button>
            </Box>
        </Box>
    );
};

export default BestExperiences; 