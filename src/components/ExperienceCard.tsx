import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { Experience } from '../api/experienceApi';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
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
    );
};

export default ExperienceCard; 