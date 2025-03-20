import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Alert,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import { BookingRequest } from '../../api/experienceApi';

interface BookingFormProps {
    experienceId: string;
    availableDates: string[];
    onSubmit: (booking: BookingRequest) => Promise<void>;
}

const BookingForm = ({ experienceId, availableDates, onSubmit }: BookingFormProps) => {
    const [formData, setFormData] = useState<Omit<BookingRequest, 'experienceId'>>({
        userName: '',
        userEmail: '',
        reservationDate: '',
        notes: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (e: SelectChangeEvent<string>) => {
        setFormData((prev) => ({ ...prev, reservationDate: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validation
        if (!formData.userName.trim()) {
            setError('Le nom est requis');
            return;
        }
        if (!formData.userEmail.trim()) {
            setError('L\'email est requis');
            return;
        }
        if (!formData.reservationDate) {
            setError('La date de réservation est requise');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.userEmail)) {
            setError('L\'email n\'est pas valide');
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit({
                ...formData,
                experienceId,
            });
        } catch (err) {
            setError('Une erreur est survenue lors de la réservation');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <TextField
                fullWidth
                label="Nom"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                margin="normal"
                required
            />

            <TextField
                fullWidth
                label="Email"
                name="userEmail"
                type="email"
                value={formData.userEmail}
                onChange={handleChange}
                margin="normal"
                required
            />

            <FormControl fullWidth margin="normal" required>
                <InputLabel>Date de réservation</InputLabel>
                <Select
                    value={formData.reservationDate}
                    label="Date de réservation"
                    onChange={handleDateChange}
                >
                    {availableDates.map((date) => (
                        <MenuItem key={date} value={date}>
                            {new Date(date).toLocaleDateString('fr-FR', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                label="Notes (optionnel)"
                name="notes"
                multiline
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                margin="normal"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{ mt: 3 }}
            >
                {isSubmitting ? 'Réservation en cours...' : 'Confirmer la réservation'}
            </Button>
        </Box>
    );
};

export default BookingForm; 