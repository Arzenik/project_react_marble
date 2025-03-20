import axios from 'axios';

const BASE_URL = 'https://marble.b2.celiabourial.com/api/v1';

export interface Experience {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
    category: string;
    price: number;
    rating: number;
    availableDates?: string[];
    reviews?: Array<{
        user: string;
        rating: number;
        comment: string;
    }>;
}

export interface PaginatedResponse<T> {
    results: T[];
    total: number;
    page: number;
    totalPages: number;
}

export interface BookingRequest {
    experienceId: string;
    userName: string;
    userEmail: string;
    reservationDate: string;
    notes?: string;
}

export const experienceApi = {
    getAllExperiences: async (page = 1, limit = 9): Promise<PaginatedResponse<Experience>> => {
        const response = await axios.get(`${BASE_URL}/experiences`);
        const allResults = response.data.results;
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedResults = allResults.slice(start, end);

        return {
            results: paginatedResults,
            total: allResults.length,
            page: page,
            totalPages: Math.ceil(allResults.length / limit)
        };
    },

    getExperienceById: async (id: string): Promise<Experience> => {
        const response = await axios.get(`${BASE_URL}/experiences/${id}`);
        return response.data;
    },

    createBooking: async (booking: BookingRequest) => {
        const response = await axios.post(`${BASE_URL}/reservations`, booking);
        return response.data;
    },

    getBestExperiences: async (limit = 3): Promise<Experience[]> => {
        const response = await axios.get(`${BASE_URL}/experiences`);
        return response.data.results
            .sort((a: Experience, b: Experience) => b.rating - a.rating)
            .slice(0, limit);
    },

    getSimilarExperiences: async (experienceId: string, limit = 3): Promise<Experience[]> => {
        const response = await axios.get(`${BASE_URL}/experiences`);
        const currentExperience = response.data.results.find((exp: Experience) => exp.id === experienceId);
        if (!currentExperience) return [];

        interface ExperienceWithScore extends Experience {
            similarityScore: number;
        }

        // Calculer un score de similarité pour chaque expérience
        const experiencesWithScores = response.data.results
            .filter((exp: Experience) => exp.id !== experienceId)
            .map((exp: Experience) => {
                let score = 0;

                // Même catégorie (40% du score)
                if (exp.category === currentExperience.category) {
                    score += 40;
                }

                // Prix similaire (30% du score)
                const priceDiff = Math.abs(exp.price - currentExperience.price);
                if (priceDiff <= 20) score += 30;
                else if (priceDiff <= 50) score += 20;
                else if (priceDiff <= 100) score += 10;

                // Note similaire (20% du score)
                const ratingDiff = Math.abs(exp.rating - currentExperience.rating);
                if (ratingDiff <= 0.5) score += 20;
                else if (ratingDiff <= 1) score += 15;
                else if (ratingDiff <= 1.5) score += 10;

                // Même région/ville (10% du score)
                if (exp.location.toLowerCase().includes(currentExperience.location.toLowerCase()) ||
                    currentExperience.location.toLowerCase().includes(exp.location.toLowerCase())) {
                    score += 10;
                }

                return { ...exp, similarityScore: score } as ExperienceWithScore;
            });

        // Trier par score de similarité et retourner les plus similaires
        return experiencesWithScores
            .filter((exp: ExperienceWithScore) => exp.similarityScore >= 30) // Au moins 30% de similarité
            .sort((a: ExperienceWithScore, b: ExperienceWithScore) => b.similarityScore - a.similarityScore)
            .slice(0, limit)
            .map(({ similarityScore, ...exp }: ExperienceWithScore) => exp);
    }
};

export default experienceApi; 