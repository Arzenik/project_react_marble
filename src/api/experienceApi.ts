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

export interface BookingRequest {
    experienceId: string;
    userName: string;
    userEmail: string;
    reservationDate: string;
    notes?: string;
}

export const experienceApi = {
    getAllExperiences: async (): Promise<Experience[]> => {
        const response = await axios.get(`${BASE_URL}/experiences`);
        return response.data.results;
    },

    getExperienceById: async (id: string): Promise<Experience> => {
        const response = await axios.get(`${BASE_URL}/experiences/${id}`);
        return response.data;
    },

    createBooking: async (booking: BookingRequest) => {
        const response = await axios.post(`${BASE_URL}/reservations`, booking);
        return response.data;
    }
};

export default experienceApi; 