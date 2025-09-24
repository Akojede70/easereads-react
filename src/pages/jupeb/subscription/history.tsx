import React from 'react'
import { Button } from '../../../components/shared'
import Layout from '../../../components/layout/layout'
import { HistoryCard } from '../../../components/card'

const Subscription = () => {
    
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
   </Layout>
  )
}

export default Subscription