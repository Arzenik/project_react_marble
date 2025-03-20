import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, CircularProgress, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookingForm from '../../components/BookingForm';
import { experienceApi, Experience, BookingRequest } from '../../api/experienceApi';

const Booking = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [experience, setExperience] = useState<Experience | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                if (!id) throw new Error('ID non spécifié');
                const data = await experienceApi.getExperienceById(id);
                setExperience(data);
                setLoading(false);
            } catch (err) {
                setError("Une erreur est survenue lors du chargement de l'expérience");
                setLoading(false);
            }
        };

        fetchExperience();
    }, [id]);

    const handleBookingSubmit = async (booking: BookingRequest) => {
        try {
            await experienceApi.createBooking(booking);
            setBookingSuccess(true);
        } catch (err) {
            throw new Error("Une erreur est survenue lors de la création de la réservation");
        }
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
                <Typography color="error" align="center">
                    {error || 'Expérience non trouvée'}
                </Typography>
            </Container>
        );
    }

    if (bookingSuccess) {
        return (
            <Container maxWidth="sm" sx={{ py: 8 }}>
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom color="primary">
                        Réservation confirmée !
                    </Typography>
                    <Typography paragraph>
                        Votre réservation pour {experience.title} a été enregistrée avec succès.
                        Vous recevrez bientôt un email de confirmation.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/experiences')}
                        sx={{ mt: 2 }}
                    >
                        Retour aux expériences
                    </Button>
                </Paper>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(`/experiences/${id}`)}
                sx={{ mb: 4 }}
            >
                Retour aux détails
            </Button>

            <Paper sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Réserver {experience.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                    {experience.location}
                </Typography>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Prix : {experience.price}€ par personne
                    </Typography>

                    <BookingForm
                        experienceId={experience.id}
                        availableDates={experience.availableDates || []}
                        onSubmit={handleBookingSubmit}
                    />
                </Box>
            </Paper>
        </Container>
    );
};

export default Booking; 