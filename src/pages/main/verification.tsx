import React, { useRef, useState } from 'react';
import { Verification } from '../../assets/images';
import { Back } from '../../assets/icon';
import Button from '../../components/shared/button';
import { resendEmail, verification} from '../../service/auth';
import { useSelector } from 'react-redux';
import Alert from '../../components/helpers/alert';
import type { ReduxStore  } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import ComponentLoader from '../../components/helpers/componentLoader';


const Verifications = () => {

  const navigate = useNavigate()
    const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false)
    const [resendCodeLoading, setResendCodeLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertStatus, setAlertStatus] = useState('')


  const maskEmail = (email: string | null) => {
  if (!email) return "";
  const [name, domain] = email.split("@");
  return `${name.slice(0, 4)}*****${name.slice(-2)}@${domain}`;
};

  const userEmail = useSelector((state: ReduxStore) => state.auth.email);

  const displayEmail = maskEmail(userEmail);
    

   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);  
 
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
  
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !inputValues[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const r = {

               async verifyOtp(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
                    e.preventDefault()
                          try {
                        setLoading(true)
                        const payload = {
                      email: userEmail!,
                      otp: inputValues.join('')
                    }
                     const response = await verification(payload);
                            setShowAlert(true)
                            setAlertMessage(response?.message)
                            setAlertStatus('success')
                            setTimeout(() => { setShowAlert(false); navigate("/verified"); }, 5000)
                        
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

                  async emailResend (userEmail: string){
                          try {
                        setResendCodeLoading(true)
                     const response = await resendEmail(userEmail);
                            setShowAlert(true)
                            setAlertMessage(response?.message)
                            setAlertStatus('success')
                            setTimeout(() => { setShowAlert(false) }, 5000)
                        
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
                        setResendCodeLoading(false)
                    }
                  },
    }
  

  return (
    <div>
        <div className="w-full relative">
            <div onClick={() => navigate(-1)}  className='absolute top-[2%] sm:top-[5%] left-[8%] flex gap-[10px] cursor-pointer z-50'>
                   <Back /> <p className='text-primaryWhite'> Back </p>
                </div>
                <img src={Verification} alt="image" className="w-full h-screen" />
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/32  via-black/45 to-transparent  flex justify-center items-center">
                
                 <div className="flex flex-col items-center justify-center w-[94%] sm:w-[90%] lg:w-[36%] bg-[#f5f5f5] h-[76%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px] sm:shadow-lg">
            <div className=' mt-[50px] lg:mt-[20px] text-center'>
                <h2 className="text-primaryBlue text-2xl font-bold mb-[30px]"> Email Verification </h2>
                <p className="text-primaryGrey text-sm sm:text-[18px]">Enter 6 digit verification code sent to </p>
                <p className="text-primaryGrey text-sm sm:text-[18px]"> { displayEmail} </p>
            </div> 
            
            <form  onSubmit={r.verifyOtp} >
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
                 {
                  resendCodeLoading ? (
                    <p className='text-primaryBlue text-center text-[16px] font-semibold mt-[50px] cursor-pointer'>
                       Loading ...
                    </p>
                  ) : (
                    <p onClick={() => r.emailResend (userEmail!)} className='text-primaryBlue text-center text-[16px] font-semibold mt-[50px] cursor-pointer'> Resend Code </p>
                  )
                 }
                 <div className='mt-[32px]'>
                  {
                     
              loading ? ( 
                 <Button>
                <ComponentLoader color={'#fff'} />
              </Button>
              ) : (
                 <Button  type="submit" className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Submit </Button> 
              )
                  }
                       </div>
               </form>
        </div>
       </div>
     </div>
      {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
  );
};

export default Verifications;