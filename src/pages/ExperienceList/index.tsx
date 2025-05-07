import { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, TextField, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Pagination } from '@mui/material';
import ExperienceCard from '../../components/ExperienceCard';
import { experienceApi, Experience, PaginatedResponse } from '../../api/experienceApi';

const ExperienceList = () => {
    const [allExperiences, setAllExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const ITEMS_PER_PAGE = 9;

    // Charger toutes les expériences une seule fois
    useEffect(() => {
        const fetchAllExperiences = async () => {
            try {
                // Récupérer toutes les expériences sans pagination
                const data = await experienceApi.getAllExperiences(1, 1000); // Nombre suffisamment grand pour tout récupérer
                setAllExperiences(data.results);
                setTotalItems(data.total);
                setLoading(false);
            } catch (err) {
                setError('Une erreur est survenue lors du chargement des expériences.');
                setLoading(false);
            }
        };

        fetchAllExperiences();
    }, []);

    const categories = useMemo(() => {
        const uniqueCategories = new Set(allExperiences.map(exp => exp.category));
        return Array.from(uniqueCategories);
    }, [allExperiences]);

    // Filtrer toutes les expériences selon les critères
    const filteredExperiences = useMemo(() => {
        return allExperiences.filter(experience => {
            const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                experience.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = !selectedCategory || experience.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [allExperiences, searchTerm, selectedCategory]);

    // Calculer le nombre total de pages après filtrage
    const totalPages = useMemo(() => {
        return Math.ceil(filteredExperiences.length / ITEMS_PER_PAGE);
    }, [filteredExperiences, ITEMS_PER_PAGE]);

    // Paginer les résultats filtrés
    const paginatedExperiences = useMemo(() => {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        return filteredExperiences.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredExperiences, page, ITEMS_PER_PAGE]);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setPage(1); // Réinitialiser la page lors d'une recherche
    }, []);

    const handleCategoryChange = useCallback((e: SelectChangeEvent) => {
        setSelectedCategory(e.target.value);
        setPage(1); // Réinitialiser la page lors d'un changement de catégorie
    }, []);

    const handlePageChange = useCallback((_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
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
                {paginatedExperiences.map((experience) => (
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

            {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}
        </Container>
    );
};

export default ExperienceList; 