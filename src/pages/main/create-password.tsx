import React, {useState} from 'react';
import {  Lock, Padlock, ClosePassword} from '../../assets/icon';
import { Button } from '../../components/shared';
import Alert from '../../components/helpers/alert';
import { passwordReset } from '../../service/auth';
import { useSelector } from 'react-redux';
import type { ReduxStore  } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import ComponentLoader from '../../components/helpers/componentLoader';


const CreatePassword = () => {
      const navigate = useNavigate()
      const userEmail = useSelector((state: ReduxStore) => state.auth.email);
      const [loading, setLoading] = useState(false)
      const [showPassword, setShowPassword] = useState(false)
      const [showAlert, setShowAlert] = useState(false)
      const [alertMessage, setAlertMessage] = useState('')
      const [alertStatus, setAlertStatus] = useState('')
      const resetToken = sessionStorage.getItem("resetToken");

       const [formData, setFormData] = useState({
              password: '',
              confirmPassword: '',
            });
      const r = {
                onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
                const { name, value } = target;
               
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               setFormData((prev: any) => ({
               ...prev,
              [name]: value,
              }));
              },
      
              async creatingNewPassword(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
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
        
                    email: userEmail!,
                    password: formData.password,
                    otp: resetToken!
                  }
                   const response = await passwordReset(payload);
                          setShowAlert(true)
                          setAlertMessage(response?.message)
                          setAlertStatus('success')
                          setTimeout(() => { setShowAlert(false);
                          sessionStorage.removeItem('resetToken')
                          navigate('/password-reset-successful'); }, 5000)
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
                  r.creatingNewPassword(e);
                }
              },
      
                }

    return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative hidden sm:flex items-center justify-center">
        <Lock/>
        
      </div>
      <div className="w-full sm:w-[60%] bg-primaryWhite flex items-center justify-center">
        <div className="w-[94%] mt-4 lg:w-[70%] bg-primaryWhite h-[92%] sm:h-[65%]  flex flex-col gap-[30px] justify-center rounded-[10px] px-[18px] lg:px-[41px] py-[25px] sm:py-[30px] shadow-2xl">
          <h2 className="text-primaryBlue text-2xl font-bold mb-[10px]">Reset your password</h2>
          <p className="text-primaryGrey mb-4 text-sm sm:text-[18px]">Enter your email address and we'll send you a link to reset your password</p>
          
          <form className="space-y-3" onSubmit={r.creatingNewPassword}>
             <div>
              <label className="block text-primaryGrey text-[16px] mb-1"> New Password</label>
              <div className="w-full p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Padlock  />
                <input
                 name='password'
                  type={showPassword ? 'text' : 'password'}
                  className="w-full outline-none pl-3"
                  onChange={(e) => r.onChange(e)}
                  value={formData.password}
                />
                <span className="cursor-pointer" onClick={() => setShowPassword((prev) => !prev )}>
                  {showPassword ? 'hide password' :  <ClosePassword  />}
                   </span>
               
              </div>
            </div>

             <div>
              <label className="block text-primaryGrey text-[16px] mb-1"> Confirm Password</label>
              <div className="w-full p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Padlock  />
                <input
                 name='confirmPassword'
                  type={showPassword ? 'text' : 'password'}
                  className="w-full outline-none pl-3"
                  onChange={(e) => r.onChange(e)}
                  value={formData.confirmPassword}
                />
                <span className="cursor-pointer" onClick={() => setShowPassword((prev) => !prev )}>
                  {showPassword ? 'hide password' :  <ClosePassword  />}
                   </span>
               
              </div>
            </div>

            <div>
                <p> Your new password must be at least <span className='text-primaryBlue font-bold'> 8 characters long </span> with at least one number or symbol</p>
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
                disabled={!formData.password || !formData.confirmPassword}
                className="w-full"> Save New Password</Button>
              )
            }
            </div>
          </form>
        </div>
      </div>
      {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
  );
};

export default CreatePassword;