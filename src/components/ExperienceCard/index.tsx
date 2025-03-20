import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Experience } from '../../api/experienceApi';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                },
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
                <Typography gutterBottom variant="h5" component="h2">
                    {experience.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ color: 'text.secondary', mr: 0.5 }} fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                        {experience.location}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                    {experience.description.slice(0, 120)}...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={experience.rating} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            {experience.rating}
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="primary">
                        {experience.price}€
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard; 