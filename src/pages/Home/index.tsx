import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    mb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                    >
                        Découvrez des Expériences Uniques
                    </Typography>
                    <Typography variant="h5" align="center" paragraph>
                        Explorez notre sélection d'activités exceptionnelles et créez des souvenirs inoubliables
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => navigate('/experiences')}
                        >
                            Voir les expériences
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Pourquoi choisir Marble ?
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Nous sélectionnons les meilleures expériences pour vous offrir des moments uniques.
                        Réservez en toute simplicité et profitez de moments exceptionnels.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Home; 