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
            <CardContent sx={{ 
                flexGrow: 1, 
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '280px',
                position: 'relative'
            }}>
                <Box sx={{ height: '210px' }}>
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                            fontWeight: 600, 
                            height: '60px',
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {experience.title}
                    </Typography>
                    
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        height: '30px',
                        mb: 1
                    }}>
                        <Rating value={experience.rating} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            {experience.rating.toFixed(1)}
                        </Typography>
                    </Box>
                    
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                            height: '30px',
                            mb: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {experience.location}
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        color="primary" 
                        sx={{ 
                            height: '40px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {experience.price} € par personne
                    </Typography>
                </Box>
                
                <Box 
                    sx={{ 
                        position: 'absolute',
                        bottom: 12,
                        left: 12,
                        right: 12,
                        width: 'calc(100% - 24px)',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button 
                        component={Link} 
                        to={`/experience/${experience.id}`} 
                        variant="contained" 
                        fullWidth
                        sx={{ 
                            py: 1.2,
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: 2
                        }}
                    >
                        Découvrir
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard; 