import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/layout'
import {  Stop, HoldOn, Dropdown } from '../../../assets/icon';
import "react-circular-progressbar/dist/styles.css";
import { BackButton, Button } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import { useSelector } from 'react-redux';
import type { ReduxStore } from '../../../redux/store';
import { Helper } from '../../../components';
import { PaymentModal } from './modal';
// @ts-expect-error no types for paystack
import  PaystackPop from '@paystack/inline-js';
import { PAYSTACK_PUBLIC_KEY } from '../../../config/config';

const { ComponentLoader, Alert } = Helper;



const ExamForm = () => { 
      const userId = useSelector((state: ReduxStore) => state.auth.userId);
      const program = useSelector((state: ReduxStore) => state.auth.program);
      // const userName = useSelector((state: ReduxStore) => state.auth.program);
      const email = useSelector((state: ReduxStore) => state.auth.email);
      

      const [open, setOpen] = useState(false);
      const [showAlert, setShowAlert] = useState(false)
      const [alertMessage, setAlertMessage] = useState('')
      const [alertStatus, setAlertStatus] = useState('')
      const navigate = useNavigate()
      // const [selectedAmount, setSelectedAmount] = useState<number | null | string>(null);
      const [studentSubject, setStudentSubject] = useState([])




      const [formList, setFormList] = useState({
      subjectDropDown: [],
      sectionDropDown: [],
      topicDropDown: [],
      selectedSubject: '',
      selectedSection: [] as string[],
      selectedTopic: [] as string [],
      dropdownOpen: false,
      topicDropdownOpen: false,
      loadingSubject: false,
      loadingSection: false,
      loadingTopic: false,
      loadingSubmitForm: false
      })
  

 

   const handleGoBack = () => {
      navigate(-1)
    } 

    useEffect(() => {
    const getExamData = async () => {
       try {
              
      // If no subject selected yet → only fetch subjects once
      if (!formList.selectedSubject) {
       setFormList ((prev) => ({
        ...prev,
        loadingSubject: true
       }))
        const subjectPayload = { userId, program };
        const subjectRes = await Services.exams.subjectList(subjectPayload);
        setFormList((prev) => ({
          ...prev,
          subjectDropDown: subjectRes?.subjects || [],
        }));
        return; // stop here
      }

      // If subject selected but no section selected → fetch sections
      if (formList.selectedSubject && formList.selectedSection.length === 0) {
         setFormList ((prev) => ({
        ...prev,
        loadingSubject: true
       }))
        const sectionPayload = {
          userId,
          program,
          subject: formList.selectedSubject,
        };
        const sectionRes = await Services.exams.sectionList(sectionPayload);
        setFormList((prev) => ({
          ...prev,
          sectionDropDown: sectionRes?.sections || [],
        }));
        return; // stop here
      }

      // If subject + section selected → fetch topics
      if (formList.selectedSection.length <= 2) {
         setFormList ((prev) => ({
        ...prev,
        loadingTopic: true
       }))
        const topicPayload = {
          userId,
          program,
          subject: formList.selectedSubject,
          sections: formList.selectedSection,
        };
        const topicRes = await Services.exams.chapters(topicPayload);
        setFormList((prev) => ({
          ...prev,
          topicDropDown: topicRes?.topics || [],
        }));
      }
    } catch (error) { 
      void error 
    } finally {
      setFormList((prev) => ({ 
        ...prev, 
        loadingSubject: false,
        loadingSection: false,
        loadingTopic: false
       }));
    }
  };

  getExamData();
}, [userId, program, formList.selectedSubject, formList.selectedSection]);


    const r = {
      onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = target;

        setFormList(prev => {
          // 🧹 If subject changes, reset section and topic selections
          if (name === "selectedSubject") {
            return {
              ...prev,
              [name]: value,
              selectedSection: [], // clear previously selected sections
              selectedTopic: [],   // clear topic selection
            };
          }

          return {
            ...prev,
            [name]: value,
          };
        });
      },


      async handleFormSubmit ()  {

        try {
            setFormList((prev) => ({ ...prev, loadingSubmitForm: true }));

          const payload ={
              userId: userId,
              program: program,
              subject: formList.selectedSubject,
              section: formList.selectedSection,
              selectedTopics: formList.selectedTopic
          }

          const response = await Services.exams.viewQuestions(payload);
          setShowAlert(true)
          setAlertMessage(response?.message)
          setAlertStatus('success')
          setTimeout(() => { setShowAlert(false); navigate('/jupeb/exam-question'); }, 5000)
           localStorage.setItem("examFormSubmitPayload", JSON.stringify(payload));
          localStorage.setItem("questions", JSON.stringify(response.data))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          if (error.response) { 
                 setShowAlert(true);
                 setAlertMessage(error?.response?.data?.message);
                 setAlertStatus("error");
                 setTimeout(() => setShowAlert(false), 4000)
               }
        } finally {
          setFormList((prev) => ({ ...prev, loadingSubmitForm: true }));
        }
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

// const handlePayment = () => {
    const handlePayStackPayment = async (amount: number, ) => {
    // setSelectedAmount(amount);
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: amount * 100,
      metadata: {
        subject: studentSubject,
        userId: userId,
        type: "textBooks",
        provider: "paystack",
      },
      onSuccess() {
        // setLoading(false);
        // setOpenModal(false);
        // showToast("Payment Processing...", "success");
      },
      onCancel() {
        // setLoading(false);
        // showToast("You have canceled the transaction");
      },
    });
  };
// }





  return (
    <Layout >
      <div onClick={handleGoBack} className='w-full bg-primaryWhite cursor-pointer h-[90px] md:h-[80px] pt-[15px] md:pt-[15px] pl-[7%] md:pl-[3%] border-t border-b flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
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
           <Button 
           onClick={() => setOpen(true)}
           > Get Access to Exam </Button>
           <PaymentModal 
           open={open} setOpen={setOpen} 
           handlePayStackPayment={handlePayStackPayment}
           />
          </div>
        </div>
        </div>
       

        <div className="space-y-[8px]">
          <div>
            <label className="block text-md font-medium mb-1">Subject</label>
            <select
              name="selectedSubject"
              value={formList.selectedSubject}
              onChange={r.onChange}
              className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] 
                   ${formList.selectedSubject ? "text-black" : "text-[#989898]"}`}
            >
              <option value="">Select Subject</option>
              {formList.subjectDropDown.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          

        {/* ✅ Custom Checklist Dropdown for Sections */}
          <div>
              <label className="text-md font-medium mb-[20px]">Sections</label>
          </div>
        <div className="relative">
          {/* Dropdown toggle (looks like your select box) */}

          <div
            onClick={() =>
              setFormList((prev) => ({
                ...prev,
                dropdownOpen: !prev.dropdownOpen,
              }))
            }
            className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] flex items-center justify-between cursor-pointer ${
              formList.selectedSection.length ? "text-black" : "text-[#989898]"
            }`}
          >
            {formList.selectedSection.length > 0
              ? formList.selectedSection.join(", ")
              : "Select Subject Sections"}
            <span className="ml-2"><Dropdown/></span>
          </div>

          {/* Dropdown list */}
          {formList.dropdownOpen && (
            <div 
              onMouseLeave={() =>
              setFormList((prev) => ({ ...prev, dropdownOpen: false }))
            } 
            className="absolute mt-2 w-full bg-primaryWhite border border-gray-200 rounded-[10px] shadow-lg p-3 z-10">
              <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto">
                {/* ✅ Indication text */}
                <p className="text-md text-sm text-[#ff9f23] mt-1 px-2 text-center">
                  You can only select up to 2 sections
                </p>
                { formList.loadingSubject? <ComponentLoader  /> :formList.sectionDropDown.map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center justify-between px-3 py-2  rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    {/* Text at left */}
                    <span className="text-sm text-[#333]">{subject}</span>

                    {/* Checkbox at right */}
                    <input
                      type="checkbox"
                      checked={formList.selectedSection.includes(subject)}
                      onChange={() => {
                        const alreadySelected =
                          formList.selectedSection.includes(subject);

                        let updatedValues;
                        if (alreadySelected) {
                          // Remove if already selected
                          updatedValues = formList.selectedSection.filter(
                            (item) => item !== subject
                          );
                        } else if (formList.selectedSection.length < 2) {
                          // Add if below 2
                          updatedValues = [...formList.selectedSection, subject];
                        } else {
                          // Prevent more than 2 — just keep same values
                          updatedValues = formList.selectedSection;
                        }

                        setFormList((prev) => ({
                          ...prev,
                          selectedSection: updatedValues,
                          dropdownOpen: updatedValues.length < 2, 
                        }));
                      }}
                      className="custom-checkbox accent-[#00296B] w-4 h-4"    
                        />
                  </label>
                ))}
                
              </div>
            </div>
          )}
        </div>

          {/* ✅ Custom Checklist Dropdown for Topics */}
          <div>
            <label className="text-md font-medium">Topics</label>
         </div>
              <div className="relative">
                {/* Dropdown toggle (looks like your select box) */}
                <div
                  onClick={() =>
                    setFormList((prev) => ({
                      ...prev,
                      topicDropdownOpen: !prev.topicDropdownOpen,
                    }))
                  }
                  className={`w-full p-2 border border-[#dbdbdb] rounded-[10px] h-[50px] flex items-center justify-between cursor-pointer ${
                    formList.selectedTopic.length ? "text-black" : "text-[#989898]"
                  }`}
                >
                  {formList.selectedTopic.length > 0
                    ? formList.selectedTopic.join(", ")
                    : "Select Topics"}
                  <span className="ml-2"><Dropdown/></span>
                </div>

                {/* Dropdown list */}
                {formList.topicDropdownOpen && (
                  <div 
                    onMouseLeave={() =>
                      setFormList((prev) => ({ ...prev, topicDropdownOpen: false }))
                    } 
                    className="absolute mt-2 w-full bg-primaryWhite border border-gray-200 rounded-[10px] shadow-lg p-3 z-10"
                  >
                    <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto">
                      {/* ✅ Indication text */}
                      <p className="text-xs text-[#ff9f23] mt-1 px-2 text-center">
                        You can only select up to 7 topics
                      </p>
                      {formList.loadingTopic ? <ComponentLoader /> : formList.topicDropDown.map((topic) => (
                        <label
                          key={topic}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <span className="text-sm text-[#333]">{topic}</span>
                          <input
                            type="checkbox"
                            
                            checked={formList.selectedTopic.includes(topic)}
                            // onChange={() => handleTopicChange(topic)}
                            className="custom-checkbox accent-[#00296B] w-4 h-4"
                            onChange={() => {
                const alreadySelected =
                  formList.selectedTopic.includes(topic);

                let updatedValues;
                if (alreadySelected) {
                  // Remove if already selected
                  updatedValues = formList.selectedTopic.filter(
                    (item) => item !== topic
                  );
                } else if (formList.selectedTopic.length < 7) {
                  // Add if below 2
                  updatedValues = [...formList.selectedTopic, topic];
                } else {
                  // Prevent more than 2 — just keep same values
                  updatedValues = formList.selectedTopic;
                }

                setFormList((prev) => ({
                  ...prev,
                  selectedTopic: updatedValues,
                  topicDropdownOpen: updatedValues.length < 7, 
                }));
              }}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="text-[12px] md:text-[16px] w-full lg:w-[60%] mx-auto bg-[#fff6e9] text-[#ff9f23] p-2 rounded-[15px] mt-[30px] flex gap-[10px]">
                  <HoldOn />
                  select maximum of 7 topics to get depth knowledge of each topic
                </div>
              </div>
        </div>
        
        <div className='w-full mt-[30px]'>
          { formList.loadingSubmitForm ? (
             <Button>
               <ComponentLoader color={'#fff'} />
             </Button>
          ) :
        <Button 
        disabled={formList.selectedSection.length === 0 || !formList.selectedSubject || formList.selectedTopic.length === 0}
        onClick={r.handleFormSubmit}> Practice Exams </Button>
          }
        </div>
        </div>
      </div>
    </div>
               {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </Layout>
  )
}

export default ExamForm