import React, { useState } from 'react'
import Layout from '../../../components/layout/layout'
import {  Stop, HoldOn, Mark } from '../../../assets/icon';
import "react-circular-progressbar/dist/styles.css";
import { BackButton, Button, Modal } from '../../../components/shared';



const ExamForm = () => { 

            const [open, setOpen] = useState(false);
    

     const [selectedSubject, setSelectedSubject] = useState('Select Subject');
  const [selectedTopic, setSelectedTopic] = useState('Select Topic');

  const subjects = ['Biology', 'Chemistry', 'English', 'Mathematics'];
  const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5', 'Topic 6', 'Topic 7'];

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
    setSelectedTopic('Select Topic'); // Reset topic when subject changes
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };




  return (
    <Layout name='Exams History ' >
      <div className='w-full bg-primaryWhite h-[90px] md:h-[80px] pt-[15px] md:pt-[15px] pl-[7%] md:pl-[3%] border-t border-b flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
                <BackButton />
            </div>

            <div className="bg-[#f5f5f5] flex items-center justify-center p-6">
      <div className="bg-primaryWhite mb-[30%] md:mb-0 p-2  md:p-6 lg:p-8 rounded-[20px] shadow-lg w-full md:w-[96%] ">
        <div className='w-[80%] mx-auto'>
        <h2 className="text-[16px] md:text-2xl font-bold mb-6 text-center pt-[10px] md:pt-0">Please fill all the fields below</h2>
        <div className="bg-[#e8f1f9] text-[12px] md:text-[16px] pl-[3%] pt-[20px] pb-[20px] rounded-[10px] mb-4 flex gap-[10px]">
            <Stop />
            <p className='w-[70%] lg:w-[55%] '>
          Please Note that you can only practice exam on subject you have subscribed to for either textbook or tutorial
            </p>
        </div>
        <div className='w-full lg:w-[80%] md:flex gap-[10px]'>
            <div className="mb-3 md:mb-6 text-primaryBlue pt-[10px] text-[14px] md:text-[16px]">
              <p >
          Haven't subscribed to any subject or want to get access to practice other subject?{' '}
        </p>
            </div>
           
        <div >
          <div className='mb-[20px] md:mb-0 w-[150px] md:w-[100px] lg:w-full text-[12px] lg:text-[16px] md:pt-[15px] lg:pt-0'>
        <Button onClick={() => setOpen(true)}> Get Access to Exam </Button>
          </div>
         <Modal open={open} onClose={() => setOpen(false)} width='700px'>
       <div className="flex items-center justify-center p-6">
      <div className=" p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Preparing Exams Question</h2>
        <div className="space-y-4 mx-auto flex flex-col items-center justify-center">
          <div className="flex gap-[10px]">
            <Mark />
            <span>Submitting Exams details</span>
          </div>
          <div className="flex gap-[10px] items-center ml-[21px]">
            <Mark />
            <span>Arranging Exams Questions</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <Mark/>
            <span>Getting Exams Question</span>
          </div>
        </div>
      </div>
    </div>
      </Modal>
        </div>
        </div>
       

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <select
              value={selectedSubject}
              onChange={handleSubjectChange}
              className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] 
                   ${selectedSubject ? "text-black" : "text-[#989898]"}`}
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          
          <div>
                   <label className="block text-sm font-medium mb-1">Subject</label>
                <select
                 value={selectedSubject}
                 onChange={handleSubjectChange}
                 className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] 
                   ${selectedSubject ? "text-black" : "text-[#989898]"}`}
               >
                 <option value="">Select Subject Section</option>
                 {subjects.map((subject) => (
                   <option key={subject} value={subject}>
                     {subject}
                   </option>
                 ))}
          </select>
          </div>
         


          <div>
            <label className="block text-sm font-medium mb-1">Topic</label>
            <select
              value={selectedTopic}
              onChange={handleTopicChange}
              className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] 
                   ${selectedTopic ? "text-black" : "text-[#989898]"}`}
            >
              <option value="">Select More Than One Topic</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <div className="text-[12px] md:text-[16px] w-full lg:w-[60%] mx-auto bg-[#fff6e9] text-[#ff9f23] p-2 rounded-[15px] mt-[30px] flex gap-[10px]">
                <HoldOn/>
              select maximum of 7 topics to get depth knowledge of each topic
            </div>
          </div>
        </div>
        
        <div className='w-full mt-[30px]'>
        <Button > Practice Exams </Button>
        </div>
        </div>
      </div>
    </div>

       
    </Layout>
  )
}

export default ExamForm