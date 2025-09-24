import React, { useState } from 'react'
import { Button, Modal } from '../../../components/shared'
import Layout from '../../../components/layout/layout'
import { Congratulations, Dot, Signal, Check, IconForReferral, FlutterWaveIcon, PaystackIcon, AlatPayIcon } from '../../../assets/icon'
import { SelectableSubject } from '../../../components/card'
import { DurationCard } from '../../../components/card/card'

const Subscription = () => {
    const [selected, setSelected] = useState(false)
    const [open, setOpen] = useState(false);
    const [congratulations, setCongratulations] = useState(false);
    const [wait, setWait] = useState(false);
    const [summary, setSummary] = useState(false);
    
  return (
    <Layout>
    <div>
        <div className='bg-primaryWhite mt-[20px] w-[85%] lg:w-[92%]  px-auto flex flex-col gap-[40px]  lg:flex-row  ml-[5%] h-[190px] lg:h-[100px] lg:mx-auto rounded-[20px] lg:flex justify-center items-center lg:gap-[30px] '>
                       <div className='w-[60%] lg:w-[350px] pt-[7%] md:pt-0'>
                           <Button className='rounded-[30px]' rounded='full'> Subscription </Button>
                       </div>
       
                       <div className='w-[60%] lg:w-[350px]'>
                           <Button color='bg-[#f5f5f5]' textColor='text-[#333333]' rounded='xl' className='font-bold text-[16px]'> History </Button>
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
    </div>

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
           <SelectableSubject
           label="Mathematics"
           checked={selected}
           onChange={(e) => setSelected(e.target.checked)}
           />
           <SelectableSubject
           label="Mathematics"
           checked={selected}
           onChange={(e) => setSelected(e.target.checked)}
           />
           <SelectableSubject
           label="Mathematics"
           checked={selected}
           onChange={(e) => setSelected(e.target.checked)}
           />
            </div>
        </div>

         <div className='bg-primaryWhite mb-[8%] md:mb-[5%] lg:mb-[0%] mt-[30px] ml-[5%]  lg:mx-auto w-[85%] lg:w-[92%] h-[1250px] md:h-[850px] lg:h-[360px] rounded-[20px] pt-[20px] pl-[30px] lg:pl-[50px]'>
        <p className='text-[19px] lg:text-[23px] mb-[10px] font-bold text-primaryBlue '> Duration</p>
        <p className='w-[90%] lg:w-[90%]'> Select preferred duration based on discount</p>

          <div className="md:flex flex-wrap gap-8">
        <DurationCard duration="1 week" oldPrice={700} newPrice={500} discount={3} border={false} />
        <DurationCard duration="1 month" oldPrice={2500} newPrice={2000} discount={5} bgColor="#fff"/>
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
      </div>
        </div>

         <div className='mb-[35%] md:mb-[20%] lg:mb-[8%] lg:mt-[2%] w-[83%] md:w-[84%] lg:w-[92%] ml-[6%] lg:mx-auto'>
        <Button> Subscribe</Button>
      </div>

    </div>
   </Layout>
  )
}

export default Subscription