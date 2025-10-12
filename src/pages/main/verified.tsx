import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Verification } from '../../assets/images';
import { Verified } from '../../assets/icon';


const Verify = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('../student')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div>
        <div className="w-full relative">
                <img src={Verification} alt="image" className="w-full h-screen" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/32  via-black/45 to-transparent  flex justify-center items-center">
                 <div className="w-[94%] sm:w-[90%] lg:w-[36%] bg-[#f5f5f5] h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px] sm:shadow-lg">
            <div className=' mt-[80px] lg:mt-[70px] text-center'>
                <h2 className="text-primaryBlue text-[25px] sm:text-3xl font-bold mb-[50px]"> Verification Successful</h2>
            </div> 
            <div className='flex items-center justify-center'>
                <Verified />
            </div>
           
        </div>
       </div>
     </div>
    </div>
  );
};

export default Verify;