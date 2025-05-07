import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { Experience } from '../api/experienceApi';

interface SimilarExperienceCardProps {
    experience: Experience;
}

const SimilarExperienceCard = ({ experience }: SimilarExperienceCardProps) => {
    return (
        <Card 
            sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: 2,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                }
            }}
        >
            <CardMedia
                component="img"
                height="140"
                image={experience.image}
                alt={experience.title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ 
                flexGrow: 1, 
                p: 1.5,
                pt: 1,
                pb: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '140px',
                position: 'relative'
            }}>
                <Box>
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                            fontWeight: 600, 
                            fontSize: '0.95rem',
                            lineHeight: 1.2,
                            mb: 0.5,
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
                        mb: 0.25
                    }}>
                        <Rating value={experience.rating} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, fontSize: '0.8rem' }}>
                            {experience.rating.toFixed(1)}
                        </Typography>
                    </Box>
                    
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            fontSize: '0.8rem',
                            mb: 1
                        }}
                    >
                        {experience.location}
                    </Typography>
                </Box>
                
                <Box 
                    sx={{ 
                        position: 'absolute',
                        bottom: 6,
                        left: 6,
                        right: 6,
                        width: 'calc(100% - 12px)',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button 
                        component={Link} 
                        to={`/experience/${experience.id}`} 
                        variant="outlined" 
                        fullWidth
                        size="small"
                        sx={{ 
                            py: 0.25,
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: 1.5,
                            fontSize: '0.8rem'
                        }}
                    >
                        Voir les détails
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default SimilarExperienceCard; 