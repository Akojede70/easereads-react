import axiosInstance from './axios-instance';
import type { RegisterFormData, LoginFormData, StudentProfileFormData } from '../types/auth';



export const registerUser = async (payload: RegisterFormData) => {
    const response = await axiosInstance.post('/student/register', payload);
        // const { accessToken } = response.data.data;
        // localStorage.setItem('token', accessToken); 
    return response.data;
};


export const loginUser = async (payload: LoginFormData) => {
    const response = await axiosInstance.post('/student/login', payload);
    if (response.data && response.data.user) {
        // const { accessToken, refreshToken } = response.data.user; 
        // localStorage.setItem('token', accessToken); 
        // localStorage.setItem('refreshToken', refreshToken); 
    }
    
    return response.data; 
};

// reset Password

export const passwordReset = async (payload: {email: string, password: string, otp: string}) => {
    const response = await axiosInstance.put('/student/reset-password', payload);
    return response.data; 
};

// forget password

export const ForgetPassword = async (email: string) => {
    const response = await axiosInstance.get(`/student/forgot-password/${email}`,);
    
    return response.data; 
};

// verify email

export const verification = async (payload: {email: string, otp: string}) => {
    const response = await axiosInstance.put('/student/verify-email', payload);
    return response.data; 
};

export const verifyPassword = async (payload: {email: string, otp: string}) => {
    const response = await axiosInstance.post('/student/reset-password-otp', payload);
    return response.data; 
};

export const resendEmail = async (email: string, ) => {
    const response = await axiosInstance.get(`/student/resend-email/${email}`);
    return response.data; 
};

export const studentProfile = async (payload: StudentProfileFormData) => {
    const response = await axiosInstance.post('/student/profile', payload);
    return response.data; 
};
