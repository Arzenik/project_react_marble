import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
    Chip,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EuroIcon from '@mui/icons-material/Euro';
import { experienceApi, Experience } from '../../api/experienceApi';
import BookingModal from '../../components/BookingModal';

const ExperienceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [experience, setExperience] = useState<Experience | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [similarExperiences, setSimilarExperiences] = useState<Experience[]>([]);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    useEffect(() => {
        const fetchExperience = async () => {
            if (!id) return;
            
            try {
                setLoading(true);
                const data = await experienceApi.getExperienceById(id);
                setExperience(data);
                
                // Charger les expériences similaires
                const similar = await experienceApi.getSimilarExperiences(id, 3);
                setSimilarExperiences(similar);
            } catch (err) {
                console.error('Erreur lors du chargement de l\'expérience:', err);
                setError('Impossible de charger les détails de cette expérience.');
            } finally {
                setLoading(false);
            }
        };

        fetchExperience();
    }, [id]);

    const handleOpenBookingModal = () => {
        setIsBookingModalOpen(true);
    };

    const handleCloseBookingModal = () => {
        setIsBookingModalOpen(false);
    };

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
                <Typography color="error" align="center" variant="h5">
                    {error || "Expérience non trouvée"}
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button variant="contained" onClick={() => navigate('/experiences')}>
                        Retour aux expériences
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Box
                            component="img"
                            src={experience.image}
                            alt={experience.title}
                            sx={{
                                width: '100%',
                                height: 400,
                                objectFit: 'cover',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                            {experience.title}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating value={experience.rating} precision={0.5} readOnly />
                            <Typography variant="body1" sx={{ ml: 1 }}>
                                {experience.rating.toFixed(1)} ({experience?.reviews?.length || 0} avis)
                            </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationOnIcon color="action" sx={{ mr: 1 }} />
                            <Typography variant="body1">{experience.location}</Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <EuroIcon color="action" sx={{ mr: 1 }} />
                            <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
                                {experience.price} € par personne
                            </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <CalendarTodayIcon color="action" sx={{ mr: 1 }} />
                            <Typography variant="body1">
                                {experience?.availableDates?.length || 0} dates disponibles
                            </Typography>
                        </Box>
                        
                        <Chip 
                            label={experience.category} 
                            color="primary" 
                            sx={{ mb: 3, fontWeight: 500 }} 
                        />
                        
                        <Button
                            component={Link}
                            to={`/booking/${experience.id}`}
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ 
                                py: 1.5, 
                                fontWeight: 600,
                                borderRadius: 2
                            }}
                        >
                            Réserver maintenant
                        </Button>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Divider sx={{ my: 4 }} />
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Description
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {experience.description}
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Divider sx={{ my: 4 }} />
                        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                            Avis des voyageurs
                        </Typography>
                        
                        {experience?.reviews?.map((review, index) => (
                            <Paper key={index} elevation={1} sx={{ p: 3, mb: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                    {review.user}
                                </Typography>
                                <Rating value={review.rating} precision={0.5} readOnly size="small" sx={{ my: 1 }} />
                                <Typography variant="body1">
                                    {review.comment}
                                </Typography>
                            </Paper>
                        ))}
                    </Grid>
                    
                    {similarExperiences.length > 0 && (
                        <Grid item xs={12}>
                            <Divider sx={{ my: 4 }} />
                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                                Expériences similaires
                            </Typography>
                            <Grid container spacing={3}>
                                {similarExperiences.map(similar => (
                                    <Grid item xs={12} sm={6} md={4} key={similar.id}>
                                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                                            <CardMedia
                                                component="img"
                                                height={160}
                                                image={similar.image}
                                                alt={similar.title}
                                            />
                                            <CardContent>
                                                <Typography variant="h6" component="h3" gutterBottom>
                                                    {similar.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                    <Rating value={similar.rating} precision={0.5} readOnly size="small" />
                                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                                        {similar.rating.toFixed(1)}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    {similar.location}
                                                </Typography>
                                                <Button
                                                    component={Link}
                                                    to={`/experience/${similar.id}`}
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{ mt: 2 }}
                                                >
                                                    Voir les détails
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Container>

            <BookingModal
                open={isBookingModalOpen}
                onClose={handleCloseBookingModal}
                experience={experience}
            />
        </>
    );
};

export default ExperienceDetail; 