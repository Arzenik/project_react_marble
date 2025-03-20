import { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, TextField, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import ExperienceCard from '../../components/ExperienceCard';
import { experienceApi, Experience } from '../../api/experienceApi';

const ExperienceList = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        const fetchExperiences = async () => {
            try {
                const data = await experienceApi.getAllExperiences();
                setExperiences(data);
                setLoading(false);
            } catch (err) {
                if (err instanceof Error && err.name === 'AbortError') {
                    return;
                }
                setError('Une erreur est survenue lors du chargement des expériences.');
                setLoading(false);
            }
        };

        fetchExperiences();

        return () => {
            controller.abort();
        };
    }, []);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(experiences.map(exp => exp.category));
        return Array.from(uniqueCategories);
    }, [experiences]);

    const filteredExperiences = useMemo(() => {
        return experiences.filter(experience => {
            const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                experience.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = !selectedCategory || experience.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [experiences, searchTerm, selectedCategory]);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleCategoryChange = useCallback((e: SelectChangeEvent) => {
        setSelectedCategory(e.target.value);
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography color="error" align="center">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
                Nos Expériences
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
                <TextField
                    label="Rechercher une expérience"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ flex: 2 }}
                />
                <FormControl sx={{ flex: 1 }}>
                    <InputLabel>Catégorie</InputLabel>
                    <Select
                        value={selectedCategory}
                        label="Catégorie"
                        onChange={handleCategoryChange}
                        fullWidth
                    >
                        <MenuItem value="">Toutes</MenuItem>
                        {categories.map(category => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={4}>
                {filteredExperiences.map((experience) => (
                    <Grid item key={experience.id} xs={12} sm={6} md={4}>
                        <ExperienceCard experience={experience} />
                    </Grid>
                ))}
            </Grid>

            {filteredExperiences.length === 0 && (
                <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                    Aucune expérience ne correspond à votre recherche
                </Typography>
            )}
        </Container>
    );
};

export default ExperienceList; 