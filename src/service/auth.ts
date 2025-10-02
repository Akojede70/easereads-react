import axiosInstance from "./axios-instance";

// registered and type
export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const registerUser = async (payload: RegisterFormData) => {
  const response = await axiosInstance.post(
    "/api/v2/student/register",
    payload
  );
  // const { accessToken } = response.data.data;
  // localStorage.setItem('token', accessToken);
  return response.data;
};

// login

export type LoginFormData = {
  email: string;
  password: string;
};

export const loginUser = async (payload: LoginFormData) => {
  const response = await axiosInstance.post("/api/v2/student/login", payload);
  if (response.data && response.data.user) {
    const { accessToken, refreshToken } = response.data.user;
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  return response.data;
};

// reset Password

export const passwordReset = async (payload: {
  email: string;
  password: string;
  otp: string;
}) => {
  const response = await axiosInstance.put(
    "/api/v2/student/reset-password",
    payload
  );
  return response.data;
};

// forget password

export const ForgetPassword = async (email: string) => {
  const response = await axiosInstance.get(
    `/api/v2/student/forgot-password/${email}`
  );

  return response.data;
};

// verify email

export const verification = async (payload: { email: string; otp: string }) => {
  const response = await axiosInstance.put(
    "/api/v2/student/verify-email",
    payload
  );
  return response.data;
};

export const verifyPassword = async (payload: {
  email: string;
  otp: string;
}) => {
  const response = await axiosInstance.post(
    "/api/v2/student/reset-password-otp",
    payload
  );
  return response.data;
};

export const resendEmail = async (email: string) => {
  const response = await axiosInstance.get(
    `/api/v2/student/resend-email/${email}`
  );
  return response.data;
};

export type StudentProfileFormData = {
  program: string;
  email: string;
  university: string;
  phoneNumber: string;
  subject: string[];
};

export const studentProfile = async (payload: StudentProfileFormData) => {
  const response = await axiosInstance.post("/api/v2/student/profile", payload);
  return response.data;
};
