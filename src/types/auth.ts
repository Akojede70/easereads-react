
// registered and type
export type RegisterFormData = {
         firstName: string;
         lastName: string;
         email: string;
         password: string;
         confirmPassword?: string;
}

// login

export type LoginFormData = {
  email: string;
  password: string;
};

export type StudentProfileFormData = {
         program: string;
         email: string;
         university: string;
         phoneNumber: string;
         subject: string[];
}