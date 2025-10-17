import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from '../../../components/shared'
import Layout from '../../../components/layout/layout'
import { Congratulations, Dot, Signal, Check, IconForReferral, FlutterWaveIcon, PaystackIcon, AlatPayIcon, BigEmailIcon, Email } from '../../../assets/icon'
import { HistoryCard, SelectableSubject } from '../../../components/card'
import { DurationCard } from '../../../components/card/card'
import { useSelector } from 'react-redux'
import type { ReduxStore } from '../../../redux/store'
import PaymentSubscriptionModal from './modal'
// import { usePaystackPayment, PaystackProps } from 'react-paystack';
// import { Services } from '../../../service'
// import { useSelector } from 'react-redux'
// import type { ReduxStore } from '../../../redux/store'


const Subscription = () => {
    const [selected, setSelected] = useState(false)
    const [open, setOpen] = useState(false);
    const [congratulations, setCongratulations] = useState(false);
    const [wait, setWait] = useState(false);
    const [summary, setSummary] = useState(false);
    const userId = useSelector((state: ReduxStore) => state.auth.userId);

    // const [email, setEmail] = useState(false);
    const [toContinue, setToContinue] = useState(false);
    const [payment, setPayment] = useState(false);
    const [tab, setTab] = useState<"subscription" | "history">("subscription");
    const [studentSubject, setStudentSubject] = useState([])
    
  
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

          useEffect(() => {
                    const subjectSelected = async ( userId: number | string ) => {
                      try {
                        const response = await Services.exams.subjectRegistered(userId);
                        setStudentSubject(response?.data);             
                      } catch (error) { 
                        void error;
                      } 
                    };
                    if (userId) {
                      subjectSelected(userId);
                    }
                    }, []);

      const [activeIndex, setActiveIndex] = useState<number | null>(null);
        const durations = [
    { duration: "1 week", oldPrice: 700, newPrice: 500, discount: 3 },
    { duration: "1 month", oldPrice: 2500, newPrice: 2000, discount: 5 },
    { duration: "3 months", oldPrice: 7000, newPrice: 6000, discount: 10 },
  ];  

        const subjects = ["Physics", "Mathematics", "Chemistry"];
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject) // uncheck if already selected
        : [...prev, subject] // add if not selected
    );
  };
  
  return (
    <Layout>
    <div>
        <div className='bg-primaryWhite mt-[20px] w-[85%] lg:w-[92%]  px-auto flex flex-col gap-[40px]  lg:flex-row  ml-[5%] h-[190px] lg:h-[100px] lg:mx-auto rounded-[20px] lg:flex justify-center items-center lg:gap-[30px] '>
                       {/* <div className='w-[60%] lg:w-[350px] pt-[7%] md:pt-0'>
                           <Button className='rounded-[30px]' rounded='full'> Subscription </Button>
                      </div> */} 

                      <div className="w-[60%] lg:w-[350px] pt-[7%] md:pt-0">
                        <Button
                          onClick={() => setTab("subscription")}
                          className={`rounded-[90px] font-bold text-[16px] transition-all duration-300 ${
                            tab === "subscription"
                              ? "bg-primaryBlue text-white" 
                              : "bg-[#f5f5f5] text-black w-[40%]"
                          }`}
                          textColor='#000'
                        >
                          Subscription
                        </Button>
                      </div>
       
                       {/* <div className='w-[60%] lg:w-[350px]'>
                           <Button color='bg-[#f5f5f5]' textColor='text-[#333333]' rounded='xl' className='font-bold text-[16px]'> History </Button>
                       </div> */}

                       <div className="w-[60%] lg:w-[350px]">
                        <Button
                          onClick={() => setTab("history")}
                          className={`rounded-[90px] font-bold text-[16px] transition-all duration-300 ${
                            tab === "history"
                              ? "bg-primaryBlue text-white"
                              : "bg-[#f5f5f5] text-[#333333]"
                          }`}
                          textColor='#000'
                        >
                          History
                        </Button>
                      </div>
                                  </div>
      
      <div className='flex flex-wrap gap-[5px] ml-[3%]'>
        <div className="p-6">
      <button
        onClick={() => setCongratulations(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        1st Modal
      </button>

      <Modal open={congratulations} onClose={() => setCongratulations(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[15%] mb-[10%]'>
         <Congratulations />
        <p className='text-3xl font-bold text-[#333333]'> Wait While Loading </p> 
        
        </div>
      </Modal>
    </div>

     <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        2nd Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[15%] mb-[10%]'>
        <Congratulations />
        <p className='text-3xl font-bold text-[#333333]'> Congratulations </p>
        <div className='text-center text-[17px] w-full text-[#333333] leading-[25px]'>
           <p> You have free access to the three subject combination textbook,</p>
        <p> past question and answers and Exam practice access</p>
        </div>
        </div>
      </Modal>
    </div>

     <div className="p-6">
      <button
        onClick={() => setWait(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        3rd Modal
      </button>

      <Modal open={wait} onClose={() => setWait(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[15%] mb-[10%]'>
        <Check  />
        <p className='text-3xl font-bold text-[#333333]'> Payment Successful </p>
       
        </div>
      </Modal>
    </div>

    <div className="p-6">
      <button
        onClick={() => setSummary(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        4th Modal
      </button>

      <Modal open={summary} onClose={() => setSummary(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='px-[2%]'>
        <div >
          <p className='text-[25px] text-primaryBlue font-bold'> Summary </p>
          <p className='pt-[20px] font-bold'> Subjects</p>
          <div className='text-[13px] md:text-[18px] border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px]'>
            <div className='md:flex gap-[25px] pl-[20px] pt-[5px] font-bold'>
              <p> Mathematics</p>
              <p> Physics </p>
            </div>
            <div className='bg-primaryYellow rounded-[20px] p-[10px] md:px-[10px]'>
              <p> 3% discount </p>
            </div>
          </div>

            <p className='pt-[20px] font-bold text-[14px] md:text-[18px]'> Additional Services</p>
           <div className='border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px]'>
            <div className='flex gap-[20px] pl-[20px] pt-[5px] font-bold text-[12px] md:text-[17px]'>
                 <input
                 type="checkbox"
                 className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] mt-[2px] border-2 border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
               />  
                <p className='pt-[4px] md:pt-0'> Live Class</p>
                 <input
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                  className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 mt-[2px] border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
                />
              <p className='pt-[4px] md:pt-0'> Video Tutorial </p>
            </div>
          </div>

           <p className='pt-[20px] font-bold text-[14px] md:text-[18px]'> Duration</p>
           <div className='border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px] text-[13px] md:text-[20px]'>
            <div className='flex gap-[25px] pl-[20px] pt-[5px] font-bold'>
              <p> 1 Months</p>
            </div>

             <div className='bg-primaryYellow rounded-[20px] p-[5px] px-[2%]'>
              <p> 3% discount </p>
            </div>

            <div className='font-bold pt-[2%] md:pt-[1%] lg:pt-0'>
              N5,000
            </div>
          </div>
        </div>

        <div className='text-[12px] md:text-[20px] flex justify-end gap-[40px] mt-[4%]'>
          <div className='flex flex-col gap-[20px] font-bold'>
            <p> Total discount</p>
            <p> Additional Services</p>
            <p> Total Price</p>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <p> <span className='font-bold pl-[19%] md:pl-0'> N2,000 </span> (20% discount)</p>
            <p> <span className='font-bold pl-[19%] md:pl-0'> N1,000 </span> (Video Tutorial)</p>
            <p className='font-bold pl-[120px] pt-[7%] md:pt-0'> N5,000</p>
          </div>
        </div>
        <div className='border border-[#e8e8e8] w-full my-[5%] md:my-[2%]'></div>
        <div className='flex justify-end gap-[125px] md:gap-[195px] font-bold text-[15px] md:text-[20px]'>
          <p className=''> Balance to pay</p>
          <p> N 3,000</p>
        </div>

        <div className='text-[14px] md:text-[17px] mt-[15px] lg:mt-0'>
          <p className='font-bold'> Select Payment Method</p>
          <div className=' border-[2px] border-[#e8e8e8] w-full rounded-[10px] h-[190px] lg:h-[210px] pt-[3%] pl-[5%] mt-[2%]'>
             <div className='flex gap-[4px] md:gap-[20px]'>
               <input
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                  className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 mt-[2px] border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
                />
                <IconForReferral/>
              <p className='font-bold'> Referral Points</p>
              <div className='bg-primaryYellow w-[35%] md:w-[40%] lg:w-[30%] p-[5px] pl-[5%] md:pl-[2%] rounded-[20px]'>
              <p className='font-bold text-[12px] md:text-[18px]'> Insufficient (15 Points) </p>
            </div>
             </div>
             <div className='flex gap-[20px]'>
               <input
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                  className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 mt-[2px] border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
                />
                <FlutterWaveIcon/>
              <p className='font-bold'> Flutterwave</p>
             </div>
              <div className='flex gap-[20px]'>
               <input
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                  className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 mt-[2px] border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
                />
                <PaystackIcon/>
              <p className='font-bold'> Paystack</p>
             </div>
              <div className='flex gap-[20px]'>
               <input
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                  className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 mt-[2px] border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
                />
                <AlatPayIcon/>
              <p className='font-bold'> ALAT PAY</p>
             </div>
             
          </div>
        </div>
        <div className='text-[15px] md:text-[22px] mt-[4%] mb-[2%]'>
              <Button >
                Pay N3,000 Now
              </Button>
             </div>
             </div>
      </Modal>
    </div>


        <div className="p-6">
      {/* <button
        onClick={() => setEmail(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        5th Modal
      </button> */}

      <Modal 
      // open={email}
      //  onClose={() => setEmail(false)} 
       className="w-[98%] md:w-[90%] lg:w-[45%]">
         <div className="w-full  flex items-center justify-center">
        <div className="w-[94% sm:w-[90%] lg:w-[70%]flex flex-col items-center justify-center h-[85%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px]">
           <div className='flex items-center justify-center'>
            <BigEmailIcon />
          </div>
            <div className=' mt-[50px] lg:mt-[20px] text-center'>
                <h2 className="text-primaryBlue text-2xl font-bold mb-[50px]"> Email Verification </h2>
                <p className="text-primaryGrey text-sm sm:text-[18px]">Enter 6 digit verification code sent to </p>
                <p className="text-primaryGrey text-sm sm:text-[18px]"> Peter Bass @gmail.com  </p>
            </div> 
            
            <form >
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

                  { <Button  type="submit" className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Verify and continue to payment </Button> }

                       </div>
                 <p className='text-center text-[16px]  mt-[10px]'> Didn't get the code ? <span className='text-primaryBlue font-bold'> Resend Code </span> </p>
               </form>
        </div>
      </div>
      </Modal>
    </div>

     <div className="p-6">
      <button
        onClick={() => setToContinue(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        6th Modal
      </button>

      <Modal open={toContinue} onClose={() => setToContinue(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
         <div className="w-full  flex items-center justify-center">
        <div className="w-[94%] sm:w-[90%] lg:w-[70%]flex flex-col items-center justify-center h-[85%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px]">
           <div className='flex items-center justify-center'>
            <BigEmailIcon />
          </div>
            <div className=' mt-[50px] lg:mt-[20px] text-center'>
                <h2 className="text-primaryBlue text-2xl font-bold mb-[50px]"> Almost there! Enter your email to continue </h2>
                <p className="text-primaryGrey text-sm sm:text-[18px]"> We'll use this to send your purchase and give you access later </p>
            </div> 
            
            <form >
               <div className='pt-[5%]'>
              <label className="block text-primaryGrey text-[16px] mb-1">Email</label>
              <div className="w-full p-2 border h-[58px] border-borderColor rounded-[10px] flex items-center">
                <Email  />
                <input
                 name='email'
                  type="email"
                  //  value={formData.email}
                  // onChange={(e) => r.onChange(e)}
                  className="w-full outline-none pl-3"
                />
              </div>
            </div>
                 <div className='mt-[32px]'>

                  { <Button  type="submit" className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Continue </Button> }

                       </div>
                 <p className='text-center text-[16px]  mt-[10px]'> By continuing, you agree to our terms and privacy. </p>
               </form>
        </div>
      </div>
      </Modal>
    </div>

    <div className="p-6">
      <button
        onClick={() => setPayment(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        7th Modal
      </button>

      <Modal open={payment} onClose={() => setPayment(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
         <div className="w-full  flex items-center justify-center">
        <div className="w-[94%] mb-[6%] sm:w-[90%] lg:w-[70%]flex flex-col items-center justify-center h-[85%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px]">
           
            <div className=' text-center'>
                <h2 className="text-primaryBlue text-3xl font-bold mb-[20px] text-left"> Payment Option </h2>
                <p className="text-primaryGrey text-sm sm:text-[18px] text-left"> Select any payment option of your choice and continue </p>
            </div> 
            
            <form >
              <div className="flex flex-col gap-[20px] my-[3%]">
  <div className="relative flex items-center gap-[20px] p-4 rounded-lg cursor-pointer border border-gray-300 overflow-hidden group">
    {/* animated border */}
    <span className="absolute inset-0 border-2 border-blue-600 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span className="relative flex items-center gap-[20px]">
      <IconForReferral /> <p className="font-bold">Referral Points</p>
    </span>
  </div>

  <div className="relative flex items-center gap-[20px] p-4 rounded-lg cursor-pointer border border-gray-300 overflow-hidden group">
    <span className="absolute inset-0 border-2 border-blue-600 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span className="relative flex items-center gap-[20px]">
      <FlutterWaveIcon /> <p className="font-bold">Flutterwave</p>
    </span>
  </div>

  <div className="relative flex items-center gap-[20px] p-4 rounded-lg cursor-pointer border border-gray-300 overflow-hidden group">
    <span className="absolute inset-0 border-2 border-blue-600 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span className="relative flex items-center gap-[20px]">
      <PaystackIcon /> <p className="font-bold">Paystack</p>
    </span>
  </div>

  <div className="relative flex items-center gap-[20px] p-4 rounded-lg cursor-pointer border border-gray-300 overflow-hidden group">
    <span className="absolute inset-0 border-2 border-blue-600 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    <span className="relative flex items-center gap-[20px]">
      <AlatPayIcon /> <p className="font-bold">ALAT PAY</p>
    </span>
  </div>
</div>

                 <div className='mt-[32px]'>
                  { <Button  type="submit" className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Select any payment and continue </Button> }
                       </div>
                 <p className='text-center text-[16px]  mt-[10px]'> By continuing, you agree to our terms and privacy. </p>
               </form>
        </div>
      </div>
      </Modal>
    </div>


            </div>
                {tab === "subscription" && (
                  <>
                <div className='pl-[9%] md:pl-[6%] lg:pl-[4%] mt-[1.2%]'>
                    <p className='text-[18px] md:text-[25px] font-bold'> Subscription </p>
                    <p className='mt-[7px] w-[85%] lg:w-[50%]'> choose the plan that works best for your learning goals </p>
                </div>

                <div className='bg-primaryWhite mt-[30px] lg:mx-auto w-[85%] lg:w-[92%] h-[400px] lg:h-[180px] rounded-[20px] pt-[20px] ml-[5%]  pl-[25px] lg:pl-[50px]'>
                <p className='text-[19px] md:text-[23px] font-bold text-primaryBlue '> Benefit of Subscription </p>
                <div className='pt-[15px] w-[95%] md:w-[50%] flex flex-wrap gap-[20px]'> 
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to Textbook</p></div>
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to Past-Question and Answers</p></div>
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to (AOC)</p></div>
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Unlimited Practice Exam Questions </p></div>
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Weekly/Monthly Quiz </p></div>
              <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Subject Analytics </p></div>
                </div>
                
                </div>

                <div className='bg-primaryWhite mt-[30px] lg:mx-auto w-[85%] lg:w-[92%] h-[400px] lg:h-[210px] rounded-[20px] ml-[5%] pt-[20px] pl-[30px] lg:pl-[50px]'>
                <p className='text-[18px] md:text-[23px] font-bold text-primaryBlue '> Subjects</p>
                <div className='w-[90%] lg:w-[32%] mt-[15px] bg-[#fff4e5] pl-[10px] lg:pl-[20px] flex gap-[10px] p-2 rounded-[30px]'>
                    <div className='pt-[4px]'>
                    <Signal />
                    </div>
                    <p> Select more than one (1) and get extra 3% discount </p>
                </div>
                
                  <div className='lg:flex gap-[50px]'>
                      {subjects.map((subject) => (
                      <SelectableSubject
                        key={subject}
                        label={subject}
                        checked={selectedSubjects.includes(subject)}
                        onChange={() => handleChange(subject)}
                      />
                    ))}
                    </div>
                </div>

                <div className='bg-primaryWhite mb-[8%] md:mb-[5%] lg:mb-[0%] mt-[30px] ml-[5%]  lg:mx-auto w-[85%] lg:w-[92%] h-[1250px] md:h-[850px] lg:h-[360px] rounded-[20px] pt-[20px] pl-[30px] lg:pl-[50px]'>
                <p className='text-[19px] lg:text-[23px] mb-[10px] font-bold text-primaryBlue '> Duration</p>
                <p className='w-[90%] lg:w-[90%]'> Select preferred duration based on discount</p>

              <div className="md:flex flex-wrap gap-8">
              {durations.map((item, index) => (
                <DurationCard
                  key={index}
                  {...item}
                  bgColor="#fff"
                  borderColor="#e8e8e8"
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
                </div>
                <div className='mb-[35%] md:mb-[20%] lg:mb-[8%] lg:mt-[2%] w-[83%] md:w-[84%] lg:w-[92%] ml-[6%] lg:mx-auto'>
                <Button onClick={() => setSummary(true)} > Subscribe</Button>
                  <PaymentSubscriptionModal
                  open={summary}
                  onClose={() => setSummary(false)}
                  summaryData={{
                    subjects: ["Mathematics", "Physics"],
                    price: "N5,000",
                    balance: "N3,000",
                  }}
                />
              </div>

              </>
        )}


           {tab === "history" && (
            <>
               <div>
                      <div className='pl-[9%] md:pl-[5%] lg:pl-[4%] mt-[9%] lg:mt-[1.2%] '>
                          <p className='text-[19px] lg:text-[22px] font-bold'> Subscription History</p>
                      </div>
                     
                     <div className='mb-[40%] md:mb-[22%] lg:mb-[10%]'>
              
                      <HistoryCard
                       subjects={["Mathematics", "Physics"]}
                       statusText="Insufficient (15 Points)"
                       duration="3 months"
                       expiryDate="2025-02-20"
                       daysLeft={17}
                       totalPaid="N2,000"
                     />
              
                      <HistoryCard
                       subjects={["Mathematics", "Physics"]}
                       statusText="Insufficient (15 Points)"
                       duration="3 months"
                       expiryDate="2025-02-20"
                       daysLeft={17}
                       totalPaid="N2,000"
                     />
                            </div>
              
                    
                  </div>
            </>
          )}

            </div>
          </Layout>
  )
}

export default Subscription