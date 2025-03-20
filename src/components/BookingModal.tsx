import React, { useState } from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    IconButton,
    Paper,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import CloseIcon from '@mui/icons-material/Close';
import { Experience, experienceApi, BookingRequest } from '../api/experienceApi';

interface BookingModalProps {
    open: boolean;
    onClose: () => void;
    experience: Experience;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onClose, experience }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState<dayjs.Dayjs | null>(null);
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date) {
            setStatus({
                type: 'error',
                message: 'Veuillez sélectionner une date'
            });
            return;
        }

        try {
            const bookingData: BookingRequest = {
                experienceId: experience.id,
                userName: name,
                userEmail: email,
                reservationDate: date.format('YYYY-MM-DD'),
                notes: notes
            };

            await experienceApi.createBooking(bookingData);
            setStatus({
                type: 'success',
                message: 'Votre réservation a été enregistrée avec succès !'
            });

            // Réinitialiser le formulaire après 2 secondes
            setTimeout(() => {
                setName('');
                setEmail('');
                setDate(null);
                setNotes('');
                setStatus({ type: null, message: '' });
                onClose();
            }, 2000);

        } catch (error) {
            setStatus({
                type: 'error',
                message: "Une erreur est survenue lors de la réservation. Veuillez réessayer."
            });
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="booking-modal-title"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', sm: '600px' },
                maxHeight: '90vh',
                overflow: 'auto',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
            }}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Typography id="booking-modal-title" variant="h5" component="h2" gutterBottom>
                    Réserver {experience.title}
                </Typography>

                <Paper elevation={0} sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                    <Typography variant="body1" gutterBottom>
                        {experience.location} • {experience.price}€ par personne
                    </Typography>
                </Paper>

                {status.type && (
                    <Alert severity={status.type} sx={{ mb: 2 }}>
                        {status.message}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        margin="normal"
                    />
                    <DatePicker
                        label="Date de réservation"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        disablePast
                        sx={{ width: '100%', my: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Notes complémentaires"
                        multiline
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                    >
                        Confirmer la réservation
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal; 