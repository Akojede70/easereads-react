import React, { useState} from 'react';
import { Email, Lock} from '../../assets/icon';
import { Button } from '../../components/shared';
import { ForgetPassword } from '../../service/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/helpers/alert';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/auth-slice';
import ComponentLoader from '../../components/helpers/componentLoader';


const ResetPassword = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  

  const r = {
            onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
            const {  value } = target;
            setEmail(value)
          },
  
          async handlePassword(email:string){
                    try {
              setLoading(true)
               const response = await ForgetPassword(email);
                   dispatch(setCredentials({ email: email}))
                   setShowAlert(true)
                    setAlertMessage(response?.message)
                    setAlertStatus('success')
                    setTimeout(() => { setShowAlert(false); navigate('/reset-password-verification'); }, 5000)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error:any) {
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
              r.handlePassword(email);
            }
          },

        }


    return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative hidden sm:flex items-center justify-center">
        <Lock/>
        
      </div>
      <div className="w-full sm:w-[60%] bg-primaryWhite flex items-center justify-center">
        <div className="w-[94%] mt-4 lg:w-[80%] bg-primaryWhite h-[92%] sm:h-[85%]  flex flex-col gap-[30px] justify-center rounded-[10px] px-[18px] lg:px-[41px] py-[25px] sm:py-[30px] shadow-2xl">
          <h2 className="text-primaryBlue text-2xl font-bold mb-[10px]">Forget your password</h2>
          <p className="text-primaryGrey mb-4 text-sm sm:text-[18px]">Enter your email address and we'll send you a link to reset your password</p>
          <form className="space-y-3" onSubmit={(e) => {e.preventDefault(); r.handlePassword(email)}}>
            <div>
              <label className="block text-primaryGrey text-[16px] mb-1">Email</label>
              <div className="w-full p-2 border h-[58px] border-borderColor rounded-[10px] flex items-center">
                <Email  />
                <input
                 value={email}
                  onChange={(e) => r.onChange(e)}
                  name='email'
                  type="email"
                  className="w-full outline-none pl-3"
                />
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
                disabled={!email}
                className="w-full"> Send Reset Link</Button>
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

export default ResetPassword;