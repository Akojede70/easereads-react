import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lady } from '../../assets/images';
import { Google, ClosePassword, Email, Padlock } from '../../assets/icon';
import Button from '../../components/shared/button';
import Alert from '../../components/helpers/alert';
import { setCredentials } from '../../redux/auth-slice';
import { useDispatch } from 'react-redux';
import { loginUser, type LoginFormData } from '../../service/auth';
import ComponentLoader from '../../components/helpers/componentLoader';


const Login = () => {

   const [loading, setLoading] = useState(false)
      const dispatch = useDispatch()
      const [showAlert, setShowAlert] = useState(false)
      const [alertMessage, setAlertMessage] = useState('')
      const [alertStatus, setAlertStatus] = useState('')
      const navigate = useNavigate()
      const [showPassword, setShowPassword] = useState(false)

      
      
      const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
      });

    const r = {
          onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
          const { name, value } = target;

         setFormData((prev: LoginFormData) => ({
         ...prev,
        [name]: value,
        }));
        },

        async submitLogin(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
            e.preventDefault()
                  try {
              setLoading(true)  
              const payload = {
              email: formData.email,
              password: formData.password,
            }
             const response = await loginUser(payload);
                dispatch(setCredentials({ 
                  email: formData.email,
                  firstName: response.firstName,
                  lastName: response.lastName
                }))
                setShowAlert(true)
                setAlertMessage(response?.message)
                setAlertStatus('success')
                setTimeout(() => { setShowAlert(false); navigate("/dashboard"); }, 5000)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
               if (error.response) {
               setShowAlert(true);
               setAlertMessage(error.response?.data?.message || "Something went wrong");
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
            r.submitLogin(e);
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
      <div className="w-full  sm:w-[60%] bg-[#f5f5f5] flex items-center justify-center">
        <div className="w-[94%] lg:w-[80%] bg-primaryWhite h-[92%] sm:h-[85%]  mx-auto rounded-[10px] px-[18px] lg:px-[41px] py-[25px] sm:py-[30px] shadow-lg">
          <h2 className="text-primaryBlue text-2xl font-bold mb-[10px]">Log In</h2>
          <p className="text-primaryGrey mb-4 text-sm sm:text-[18px]">Log in to continue your learning journey and explore a world of endless possibilities with Easereads.</p>
          <div className='my-[30px]'>
             <button className="w-full border h-[48px] border-borderColor rounded-[15px] p-2 flex items-center justify-center space-x-2 mb-4">
            <Google />
            <span className="text-gray-700">Continue with Google</span>
          </button>
          </div>
          
          <div className='flex gap-[15%]'>
            <div className='border-t border-borderColor w-[35%] mt-[1.1%]'></div>
            <div > <p> or</p> </div>
            <div className='border-t border-borderColor w-[35%] mt-[1.1%]'></div>
          </div>
          <form className="space-y-3" onSubmit={r.submitLogin}>
            <div>
              <label className="block text-primaryGrey text-[16px] mb-1">Email</label>
              <div className="w-full p-2 border h-[58px] border-borderColor rounded-[10px] flex items-center">
                <Email  />
                <input
                 name='email'
                  type="email"
                   value={formData.email}
                  onChange={(e) => r.onChange(e)}
                  className="w-full outline-none pl-3"
                />
              </div>
            </div>
            <div>
              <label className="block text-primaryGrey text-[16px] mb-1">Password</label>
              <div className="w-full p-2 border border-borderColor h-[58px] rounded-[10px] flex items-center">
                <Padlock  />
                <input
                 name='password'
                  type={showPassword ? 'text' : 'password'}
                   value={formData.password}
                  onChange={(e) => r.onChange(e)}
                  className="w-full outline-none pl-3"
                />
                <span className="cursor-pointer" onClick={() => setShowPassword((prev) => !prev )}>
                  {showPassword ? 'hide password' :  <ClosePassword  />}
                   </span>
               
              </div>
              <div className='flex justify-end pt-[20px]'>
                <p onClick={() => navigate('/reset-password')} className='font-bold text-primaryBlue cursor-pointer'>Forget Password ?</p>
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
                disabled={!formData.email || !formData.password}
               className="w-full" > Log In</Button>
              )
            }
            </div>
            <p className="text-primaryGrey text-[16px] text-center my-[20px] sm:my-[3%]">By signing up, you agree to the <span className='text-primaryBlue'> Terms of Service </span> and <span className='text-primaryBlue'> Privacy Policy </span></p>
            <p className="text-primaryGrey text-[16px] text-center mt-2">New to easeread ? <span className='text-primaryBlue cursor-pointer' onClick={() => navigate("/sign-up")}> Sign Up </span></p>
          </form>
        </div>
      </div>
                   {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
  );
};

export default Login;