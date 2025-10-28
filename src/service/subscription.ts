import axiosInstance from './axios-instance';
import type { PayStackWebhookInterface } from '../types/subscription';


export const subscription = async (payload: PayStackWebhookInterface) => {
    const response = await axiosInstance.post('/student/verify-subscription', payload);
    return response.data; 
};

export const history = async (userId: number) => {
    const response = await axiosInstance.get(`/student/transaction-history?userId=${userId}&program=Jupeb`, );
    return response.data; 
};