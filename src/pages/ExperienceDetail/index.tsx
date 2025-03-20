import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Box,
    Button,
    CircularProgress,
    Paper,
    Rating,
    Divider,
    Grid,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { experienceApi, Experience } from '../../api/experienceApi';

const ExperienceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [experience, setExperience] = useState<Experience | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                if (!id) throw new Error('ID non spécifié');
                const data = await experienceApi.getExperienceById(id);
                setExperience(data);
                setLoading(false);
            } catch (err) {
                setError("Une erreur est survenue lors du chargement de l'expérience.");
                setLoading(false);
            }
        };

        fetchExperience();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !experience) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography color="error" align="center">
                    {error || 'Expérience non trouvée'}
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ position: 'relative', mb: 6 }}>
                <Box
                    component="img"
                    src={experience.image}
                    alt={experience.title}
                    sx={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: 2,
                    }}
                />
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {experience.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon sx={{ color: 'text.secondary', mr: 1 }} />
                        <Typography variant="h6" color="text.secondary">
                            {experience.location}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Rating value={experience.rating} precision={0.5} readOnly />
                        <Typography variant="body1" sx={{ ml: 1 }}>
                            {experience.rating} / 5
                        </Typography>
                    </Box>

                    <Typography variant="body1" paragraph>
                        {experience.description}
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {experience.reviews && experience.reviews.length > 0 && (
                        <Box>
                            <Typography variant="h5" gutterBottom>
                                Avis des participants
                            </Typography>
                            {experience.reviews.map((review, index) => (
                                <Paper key={index} sx={{ p: 2, mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="subtitle1">{review.user}</Typography>
                                        <Rating value={review.rating} size="small" readOnly />
                                    </Box>
                                    <Typography variant="body2">{review.comment}</Typography>
                                </Paper>
                            ))}
                        </Box>
                    )}
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
                        <Typography variant="h4" gutterBottom>
                            {experience.price}€
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            par personne
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            onClick={() => navigate(`/booking/${experience.id}`)}
                        >
                            Réserver maintenant
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExperienceDetail; 