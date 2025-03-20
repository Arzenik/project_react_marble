import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Rating, useTheme } from '@mui/material';
import { Experience, experienceApi } from '../api/experienceApi';
import { useNavigate } from 'react-router-dom';

const BestExperiences: React.FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBestExperiences = async () => {
            try {
                const data = await experienceApi.getBestExperiences(3);
                setExperiences(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des meilleures expériences:', error);
            }
        };

        fetchBestExperiences();
    }, []);

    return (
        <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Nos meilleures expériences
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
                Découvrez nos expériences les mieux notées par nos clients
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2, px: { xs: 2, md: 4 } }}>
                {experiences.map((experience) => (
                    <Grid item key={experience.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    transition: 'transform 0.2s ease-in-out'
                                }
                            }}
                            onClick={() => navigate(`/experiences/${experience.id}`)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={experience.image}
                                alt={experience.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="h3">
                                    {experience.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {experience.description.length > 100
                                        ? `${experience.description.substring(0, 100)}...`
                                        : experience.description}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Rating value={experience.rating} precision={0.5} readOnly />
                                    <Typography variant="body2" color="text.secondary">
                                        ({experience.rating})
                                    </Typography>
                                </Box>
                                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                                    {experience.price}€
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BestExperiences; 