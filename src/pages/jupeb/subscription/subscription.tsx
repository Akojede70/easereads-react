import React, { useState } from 'react'
import { Button } from '../../../components/shared'
import Layout from '../../../components/layout/layout'
import { Dot, Signal } from '../../../assets/icon'
import { SelectableSubject } from '../../../components/card'
import { DurationCard } from '../../../components/card/card'

const Subscription = () => {
    const [selected, setSelected] = useState(false)
  return (
    <Layout>
    <div>
        <div className='bg-primaryWhite mt-[20px] w-[92%] h-[100px] mx-auto rounded-[20px] flex justify-center items-center gap-[30px] '>
                <div className='w-[350px]'>
                    <Button className='rounded-[30px]' rounded='full'> Subscription </Button>
                </div>
                <div className='w-[350px]'>
                    <Button color='bg-[#f5f5f5]' textColor='text-[#333333]' rounded='xl' className='font-bold text-[16px]'> History </Button>
                </div>
        </div>

        <div className='pl-[4%] mt-[1.2%]'>
            <p className='text-[25px] font-bold'> Subscription </p>
            <p className='mt-[7px]'> choose the plan that works best for your learning goals </p>
        </div>

        <div className='bg-primaryWhite mt-[30px] mx-auto w-[92%] h-[180px] rounded-[20px] pt-[20px] pl-[50px]'>
        <p className='text-[23px] font-bold text-primaryBlue '> Benefit of Subscription </p>
        <div className='pt-[15px] w-[50%] flex flex-wrap gap-[20px]'> 
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to Textbook</p></div>
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to Past-Question and Answers</p></div>
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Access to (AOC)</p></div>
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Unlimited Practice Exam Questions </p></div>
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Weekly/Monthly Quiz </p></div>
       <div className='flex gap-[10px]'> <Dot className='mt-[7px]' color='#333333'/><p> Subject Analytics </p></div>
        </div>
        
        </div>

         <div className='bg-primaryWhite mt-[30px] mx-auto w-[92%] h-[210px] rounded-[20px] pt-[20px] pl-[50px]'>
        <p className='text-[23px] font-bold text-primaryBlue '> Subjects</p>
        <div className='w-[32%] mt-[15px] bg-[#fff4e5] pl-[20px] flex gap-[10px] p-2 rounded-[30px]'>
            <div className='pt-[4px]'>
            <Signal />
            </div>
             <p> Select more than one (1) and get extra 3% discount </p>
        </div>
         
           <div className='flex gap-[50px]'>
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

         <div className='bg-primaryWhite mb-[1%] mt-[30px] mx-auto w-[92%] h-[360px] rounded-[20px] pt-[20px] pl-[50px]'>
        <p className='text-[23px] mb-[10px] font-bold text-primaryBlue '> Duration</p>
        <p> Select preferred duration based on discount</p>

          <div className="flex gap-8">
        <DurationCard duration="1 week" oldPrice={700} newPrice={500} discount={3} border={false} />
        <DurationCard duration="1 month" oldPrice={2500} newPrice={2000} discount={5} bgColor="#fff"/>
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
        <DurationCard duration="3 months" oldPrice={7000} newPrice={6000} discount={10} bgColor="#fff" />
      </div>
        </div>

         <div className='mb-[8%] mt-[2%] w-[92%] mx-auto'>
        <Button> Subscribe</Button>
       
      </div>

    </div>
   </Layout>
  )
}

export default Subscription