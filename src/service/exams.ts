import type { examHistoryInterface, submitQuestionsInterface, topicInterFace, UserIdAndNumber, UserIdNumberAndSubject, viewTopicInterFace } from '../types/exam';
import axiosInstance from './axios-instance';


export const subjectList = async (payload: UserIdAndNumber) => {
    const response = await axiosInstance.post('/student/exam/subjects', payload);
    return response.data; 
};

export const sectionList = async (payload: UserIdNumberAndSubject) => {
    const response = await axiosInstance.post('/student/exam/sections', payload);
    return response.data; 
};

export const chapters = async (payload: topicInterFace) => {
    const response = await axiosInstance.post('/student/exam/section/chapters', payload);
    return response.data; 
};

export const viewQuestions = async (payload: viewTopicInterFace) => {
    const response = await axiosInstance.post('/student/exam/set', payload);
    return response.data; 
};

export const submitQuestions = async (payload: submitQuestionsInterface) => {
    const response = await axiosInstance.post('/student/exam/score', payload);
    return response.data; 
};

export const examPage = async (payload: examHistoryInterface) => {
    const response = await axiosInstance.post('/student/exam/block', payload );
    return response.data; 
};

export const examDetails = async (id: number | string) => {
    const response = await axiosInstance.get(`/student/exam/details/${id}`);
    return response.data; 
};