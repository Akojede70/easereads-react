import axiosInstance from './axios-instance';
import type { PayStackWebhookInterface } from '../types/subscription';


export const subscription = async (payload: PayStackWebhookInterface) => {
    const response = await axiosInstance.post('/student/verify-subscription', payload);
    return response.data; 
};
