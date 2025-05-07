import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Experience } from '../../api/experienceApi';
import BookingForm from '../BookingForm';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  experience: Experience;
}

const BookingModal = ({ open, onClose, experience }: BookingModalProps) => {
  const handleSubmit = async (bookingData: any) => {
    try {
      // Ici, vous pourriez appeler votre API pour créer une réservation
      console.log('Booking data:', bookingData);
      
      // Fermer la modale après soumission réussie
      onClose();
      
      // Afficher un message de succès ou rediriger l'utilisateur
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, fontWeight: 600 }}>
        Réserver cette expérience
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent dividers>
        <Box sx={{ py: 1 }}>
          <BookingForm 
            experienceId={experience.id} 
            availableDates={experience?.availableDates || []} 
            onSubmit={handleSubmit}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal; 