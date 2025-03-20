import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.grey[200],
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Marble - Plateforme de réservation d'expériences
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer; 