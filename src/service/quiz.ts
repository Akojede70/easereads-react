import axiosInstance from './axios-instance';


export const fetchAvailableQuiz = async (userId: number | string) => {
    const response = await axiosInstance.get(`/student/quiz/${userId}/Jupeb`);
    return response.data; 
}; // 1

export const fetchHistory = async (userId: number | string) => {
    const response = await axiosInstance.get(`/student/quiz/history/${userId}/Jupeb`);
    return response.data; 
};

export const leaderboard = async () => {
    const response = await axiosInstance.get('/student/leaderboard?program=Jupeb&limit=10&offset=0');
    return response.data; 
};

export const getQuizQuestion = async (userId: number | string) => {
    const response = await axiosInstance.get(`/student/quiz/exam/${userId}`);
    return response.data; 
};

export const submitQuizQuestion = async (payload: number | string) => {
    const response = await axiosInstance.post('/student/quiz/score', payload);
    return response.data; 
};

export const getQuizHistory = async (userId: number | string) => {
    const response = await axiosInstance.get(`/student/quiz/result${userId}`);
    return response.data; 
};

