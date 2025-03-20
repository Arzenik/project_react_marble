import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Experience, experienceApi } from '../api/experienceApi';
import ExperienceCard from './ExperienceCard';

interface RelatedExperiencesProps {
    experienceId: string;
}

const RelatedExperiences: React.FC<RelatedExperiencesProps> = ({ experienceId }) => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSimilarExperiences = async () => {
            try {
                const data = await experienceApi.getSimilarExperiences(experienceId);
                setExperiences(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des expériences similaires:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSimilarExperiences();
    }, [experienceId]);

    if (loading || experiences.length === 0) return null;

    return (
        <Box sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Expériences similaires
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
                Vous pourriez aussi aimer ces expériences
            </Typography>
            <Grid container spacing={4}>
                {experiences.map((experience) => (
                    <Grid item key={experience.id} xs={12} sm={6} md={4}>
                        <ExperienceCard experience={experience} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RelatedExperiences; 