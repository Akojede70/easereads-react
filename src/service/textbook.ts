import axiosInstance from "./axios-instance";

export const GetTextBookBystudentId = async (studentId: string, program: string) => {
  const response = await axiosInstance.get(
    `/student/textbooks/${studentId}/book/${program}`
  );

  return response.data;
};
export const GetPastQuestionBystudentId = async (studentId: string, program: string) => {
  const response = await axiosInstance.get(
    `/student/textbooks/${studentId}/pastQuestion/${program}`
  );

  return response.data;
};

export const GetTextBookSectionByTextBookId = async (
  studentId: string,
  bookId: string
) => {
  const response = await axiosInstance.get(
    `/student/textbook/section/${studentId}/${bookId}`
  );

  return response.data;
};
export const GetTextBookSectionByTextBookSectionId = async (
  studentId: string,
  bookId: string,
  sectionId: string
) => {
  const response = await axiosInstance.get(
    `/student/book/${bookId}/${sectionId}/${studentId}`
  );

  return response.data;
};
export const GetSingleTextBookSectionByTextBookSectionChapterId = async (
  studentId: string,
  chapterId: string
) => {
  const response = await axiosInstance.get(
    `/student/book-chapter/${studentId}/${chapterId}`
  );

  return response.data;
};
