import React, { useState, useRef} from 'react';
import {  Lock} from '../../assets/icon';
import Button from '../../components/shared/button';
import { verifyPassword } from '../../service/auth';
import { useSelector } from 'react-redux';
import Alert from '../../components/helpers/alert';
import type { ReduxStore  } from '../../redux/store';
import ComponentLoader from '../../components/helpers/componentLoader';
import { useNavigate } from 'react-router-dom';


const PasswordVerification = () => {
   const navigate = useNavigate()
   const maskEmail = (email: string | null) => {
  if (!email) return "";
  const [name, domain] = email.split("@");
  return `${name.slice(0, 4)}*****${name.slice(-2)}@${domain}`;
};

  const userEmail = useSelector((state: ReduxStore) => state.auth.email);

  const displayEmail = maskEmail(userEmail);
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    

   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);  
   const handlePinChange = (index: number, value: string) => {
      const newPin = [...inputValues];
      if (/^\d$/.test(value) || value === '') {
        newPin[index] = value;
        setInputValues(newPin);
        if (value && index < 5) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };

    // paste the pin easily when you copy
     const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
     e.preventDefault();
     const pasteData = e.clipboardData.getData('text').slice(0, 6); // take first 6 chars
     const newValues = pasteData.split('').map(char => (/\d/.test(char) ? char : ''));
     const filledValues = [...inputValues];
     for (let i = 0; i < newValues.length; i++) {
      filledValues[i] = newValues[i];
     }
     setInputValues(filledValues);
  
     // focus last filled input
      const lastIndex = newValues.length - 1;
      if (lastIndex < inputRefs.current.length) {
      inputRefs.current[lastIndex]?.focus();
      }
     };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !inputValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

   const r = {
  
         async passwordVerification(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
              e.preventDefault()
                    try {
                  setLoading(true)
                  const payload = {
                email: userEmail!,
                otp: inputValues.join('')
              }
               const response = await verifyPassword(payload);
               if (response?.data?.resetToken) {
               sessionStorage.setItem("resetToken", response.data.resetToken.toString());
               }
                setShowAlert(true)
                setAlertMessage(response?.message)
                setAlertStatus('success')
                setTimeout(() => { setShowAlert(false); navigate('/create-password'); }, 5000)
                        
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
      }
    

    return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative hidden sm:flex items-center justify-center">
        <Lock/>
        
      </div>
      <div className="w-full  sm:w-[60%] bg-primaryWhite flex items-center justify-center">
        <div className="w-[94%] border border-primaryBlue sm:border-none sm:w-[90%] lg:w-[70%] bg-primaryWhite flex flex-col items-center justify-center h-[85%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px] sm:shadow-2xl">
            <div className=' mt-[50px] lg:mt-[20px] text-center'>
                <h2 className="text-primaryBlue text-2xl font-bold mb-[50px]"> Email Verification </h2>
                <p className="text-primaryGrey text-sm sm:text-[18px]">Enter 6 digit verification code sent to </p>
                <p className="text-primaryGrey text-sm sm:text-[18px]"> { displayEmail } </p>
            </div> 
            
            <form  onSubmit={r.passwordVerification}>
                <div className="flex justify-center items-center p-1 mt-[40px]" >
                 {inputValues.map((value, index) => (
                   <input
                     key={index}
                     type="text"
                     value={value}
                     maxLength={1}
                     className="w-[44px] sm:w-[50px] h-[50px] border-2 border-borderColor rounded-md mx-1.5 text-center"
                     onChange={(e) => handlePinChange(index, e.target.value)}
                     onKeyDown={(e) => handleKeyDown(index, e)}
                     onPaste={handlePaste}
                     ref={(el) => { inputRefs.current[index] = el; }}
                   />
                 ))}
                 </div>
                 <div className='mt-[32px]'>
                  {
                     
              loading ? ( 
                 <Button>
                <ComponentLoader color={'#fff'} />
              </Button>
              ) : (
                 <Button  type="submit" className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Verify </Button> 
              )
                  }
                       </div>
                 <p className='text-center text-[16px]  mt-[10px]'> The link will expire in <span className='text-primaryBlue'> 30 minutes </span> </p>
               </form>
        </div>
      </div>
            {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
  );
};

export default PasswordVerification;