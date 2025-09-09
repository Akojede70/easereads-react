import LoginScreen from './login'
import SignupScreen from './signup';
import Student from "./students"
import Verification from "./verification"
import Verified from "./verified"
import ResetPassword from './reset-password'
import PasswordVerification from './reset-password-verification';
import CreatePassword from './create-password';
import PasswordResetSuccessful from './password-reset-successful';

const main = {
    Login: LoginScreen,
    Signup: SignupScreen,
    Student: Student,
    Verification: Verification,
    Verified: Verified,
    ResetPassword: ResetPassword,
    PasswordVerification: PasswordVerification,
    CreatePassword: CreatePassword,
    PasswordResetSuccessful: PasswordResetSuccessful
}

export default main;