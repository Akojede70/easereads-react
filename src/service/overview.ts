import axiosInstance from './axios-instance';


export const overviewDetails = async (userId: number | string, ) => {
    const response = await axiosInstance.get(`/student/overview/${userId}/Jupeb`);
    return response.data; 
};

export const percentageProgress = async (userId: number | string, ) => {
    const response = await axiosInstance.get(`/student/continue-learning/${userId}/program`);
    return response.data; 
};