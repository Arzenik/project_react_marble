import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'inherit',
                            fontWeight: 'bold'
                        }}
                    >
                        MARBLE
                    </Typography>
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/experiences"
                        sx={{ ml: 2 }}
                    >
                        Expériences
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation; 