import axiosInstance from './axios-instance';


export const overviewDetails = async (userId: number | string, ) => {
    const response = await axiosInstance.get(`/student/overview/${userId}/Jupeb`);
    return response.data; 
};

export const percentageProgress = async (userId: number | string, ) => {
    const response = await axiosInstance.get(`/student/continue-learning/${userId}/program`);
    return response.data; 
};

export const leaderboard = async () => {
    const response = await axiosInstance.get('/student/leaderboard?program=Jupeb&limit=10&offset=0');
    return response.data; 
};

export const referrals = async (userId: number | string,) => {
    const response = await axiosInstance.get(`/student/refPoint/${userId}/Jupeb`);
    return response.data; 
};