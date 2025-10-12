import React, { useState } from 'react';
import { Lady } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import { Google, ClosePassword, Email, Padlock, Person } from '../../assets/icon';
import { Button } from '../../components/shared';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/auth-slice';
import { registerUser } from '../../service/auth';
import type { RegisterFormData } from '../../types/auth';
import { Helper } from '../../components';
const { ComponentLoader, Alert } = Helper;

const Signup = () => {
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(false)
      const [showAlert, setShowAlert] = useState(false)
      const [alertMessage, setAlertMessage] = useState('')
      const [alertStatus, setAlertStatus] = useState('')
      const navigate = useNavigate()
      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)

      
      
      const [formData, setFormData] = useState<RegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    const r = {
          onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
          const { name, value } = target;
          const onlyLetters = /^[A-Za-z\s'-]*$/; 
         if (( name === "firstName"  || name === "lastName") && !onlyLetters.test(value)) {
        return; 
        }
         setFormData((prev: RegisterFormData) => ({
         ...prev,
        [name]: value,
        }));
        },

        async submitRegister(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
            e.preventDefault()
            if (formData.password !== formData.confirmPassword) {
             setShowAlert(true);
             setAlertMessage("Password do not match");
             setAlertStatus("error");
             setTimeout(() => setShowAlert(false), 4000);
             return;
           }
                  try {
                setLoading(true)
                const payload = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              password: formData.password,
            }
             const response = await registerUser(payload);
             dispatch(setCredentials({ 
              email: response.data.email,
              accessToken: response.data.accessToken
            }))
                    setShowAlert(true)
                    setAlertMessage(response?.message)
                    setAlertStatus('success')
                    setTimeout(() => { setShowAlert(false); navigate('../verification'); }, 5000)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
               if (error.response) {
                 setShowAlert(true);
                 setAlertMessage(error?.response?.data?.message || "Something went wrong");
                 setAlertStatus("error");
                 setTimeout(() => setShowAlert(false), 4000)
               }
            }
            finally {
                setLoading(false)
            }
          },

          handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
          if (e.key === 'Enter') {
            r.submitRegister(e);
          }
        },

          }
    

  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative hidden sm:block">
        <img src={Lady} alt="image" className="w-full h-screen object-cover" />
        <div className="absolute top-0 left-0 w-[105%] h-full bg-gradient-to-r from-black/72  via-black/75 to-transparent  flex items-end p-6">
          <div>
            <h3 className=" absolute text-primaryWhite text-2xl font-bold top-[4%] pl-[1%]">Easereads</h3>
            <p className="text-primaryWhite text-2xl">We're thrilled to have you with us! <span className='text-primaryYellow'> Let's get started together! </span></p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[60%]  sm:bg-[#f5f5f5] flex items-center justify-center">
        <div className="w-[94%] lg:w-[80%] sm:bg-primaryWhite h-[97%] sm:h-[88%]  mx-auto sm:rounded-[10px] px-[18px] lg:px-[41px]  sm:py-[30px] sm:shadow-lg">
          <h2 className="text-primaryBlue text-2xl font-bold mb-[10px]">Sign Up</h2>
          <p className="text-primaryGrey mb-4 text-sm sm:text-[18px]">Sign up and start learning</p>
          <div className='my-[30px]'>
             <button className="w-full border h-[48px] border-borderColor rounded-[15px] p-2 flex items-center justify-center space-x-2 mb-4">
            <Google />
            <span className="text-gray-700">Continue with Google</span>
          </button>
          </div>
          
          <div className='flex gap-[15%]'>
            <div className='border-t border-borderColor w-[33.6%] mt-[1.1%]'></div>
            <div > <p> or</p> </div>
            <div className='border-t border-borderColor w-[33.6%] mt-[1.1%]'></div>
          </div>
          <form className="space-y-3" onSubmit={r.submitRegister}>
             <div className='lg:flex gap-[30px]'>

              <div className='w-[100%] lg:w-[48%]'>
              <label className="block text-primaryGrey text-[16px] mb-1">First Name</label>
              <div className="p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Person  />
                <input
                  name='firstName'
                  type='text'
                  className="w-full outline-none pl-3"
                  value={formData.firstName}
                  onChange={(e) => r.onChange(e)}
                />
              
               
              </div>
            </div>
            <div className='w-[100%] lg:w-[48%] mt-[10px] lg:mt-0 '>
              <label className="block text-primaryGrey text-[16px] mb-1">Last Name</label>
              <div className=" p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Person  />
                <input
                  name='lastName'
                  type='text'
                  className="w-full outline-none pl-3"
                  value={formData.lastName}
                  onChange={(e) => r.onChange(e)}
                />
              </div>
            </div>

            </div>
            <div>
              <label className="block text-primaryGrey text-[16px] mb-1">Email</label>
              <div className="w-[99%] p-2 border h-[58px] border-borderColor rounded-[10px] flex items-center">
                <Email  />
                <input
                  name='email'
                  type="email"
                  className="w-full outline-none pl-3"
                  value={formData.email}
                  onChange={(e) => r.onChange(e)}
                />
              </div>
            </div>
            <div className='lg:flex gap-[20px]'>

              <div className='w-[100%] lg:w-[48%]'>
              <label className="block text-primaryGrey text-[16px] mb-1">Password</label>
              <div className="w-full p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Padlock  />
                <input
                  name='password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full outline-none pl-3"
                  value={formData.password}
                  onChange={(e) => r.onChange(e)}
                />
                <span className="cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev )}>
                  {showConfirmPassword ? 'hide password' :  <ClosePassword  />}
                   </span>
               
              </div>
            </div>
            <div className='w-[100%] lg:w-[48%] mt-[10px] lg:mt-0'>
              <label className="block text-primaryGrey text-[16px] mb-1">Confirm Password</label>
              <div className="w-full  p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Padlock  />
                <input
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full outline-none pl-3"
                  value={formData.confirmPassword}
                  onChange={(e) => r.onChange(e)}
                />
                <span className="cursor-pointer" onClick={() => setShowPassword((prev) => !prev )}>
                  {showPassword ? 'hide password' :  <ClosePassword  />}
                   </span>
               
              </div>
            </div>

            </div>
            
            <div className='mt-[32px]'>
            {
              loading ? ( 
                 <Button>
                <ComponentLoader color={'#fff'} />
              </Button>
              ) : (
                <Button 
                type='submit' 
                disabled={!formData.email || !formData.firstName || !formData.lastName || !formData.password || !formData.confirmPassword}
                className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> SIgn Up</Button>
              )
            }
            </div>
            <p className="text-primaryGrey text-[16px] text-center my-[20px] sm:my-[3%]">By signing up, you agree to the <span className='text-primaryBlue'> Terms of Service </span> and <span className='text-primaryBlue'> Privacy Policy </span></p>
            <p className="text-primaryGrey text-[16px] text-center mt-2">Already have an Account ? <span className='text-primaryBlue cursor-pointer' onClick={() => navigate("../login")}> Login </span></p>
          </form>
        </div>
      </div>
        {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
  );
};

export default Signup;