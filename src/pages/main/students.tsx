import React, { useState } from 'react';
import { Laptop } from '../../assets/images';
import { Call, Program, Cap, Subject, Email } from '../../assets/icon';
import Button from '../../components/shared/button';
import Alert from '../../components/helpers/alert';
import { studentProfile, type StudentProfileFormData } from '../../service/auth';
import { useNavigate } from 'react-router-dom';
import ComponentLoader from '../../components/helpers/componentLoader';
import Select, { type SingleValue, type MultiValue } from 'react-select';
import {  universityOptions, programOptions, subjectOptions, type Option } from '../../utils/profile-data';


const Student = () => {

        const [loading, setLoading] = useState(false)
        const [showAlert, setShowAlert] = useState(false)
        const [alertMessage, setAlertMessage] = useState('')
        const [alertStatus, setAlertStatus] = useState('')
        const navigate = useNavigate()
        const [formData, setFormData] = useState<StudentProfileFormData>({
           program: '',
          email: '',
          university: '',
          phoneNumber: '',
          subject: [],
        });

        const [selectedSubjects, setSelectedSubjects] = useState<MultiValue<Option>>([]);
        const [selectedUniversity, setSelectedUniversity] = useState<SingleValue<Option>>();
        const [selectedProgram, setSelectedProgram] = useState<SingleValue<Option>>();


         const handleSubjectsChange = (selected: MultiValue<Option>) => {
           if (selected.length <= 3) {
             setSelectedSubjects(selected);
             setFormData(prev => ({
               ...prev,
               subject: selected.map(s => s.value), 
             }));
           }
         };

         const handleUniversityChange = (selected: SingleValue<Option>) => {
           setSelectedUniversity(selected);
           setFormData(prev => ({
             ...prev,
             university: selected ? selected.value : '', 
           }));
         };

         const handleSelectedProgram = (selected: SingleValue<Option>) => {
           setSelectedProgram(selected);
           setFormData(prev => ({
             ...prev,
             program: selected ? selected.value : '', 
           }));
         };
        

  const r = {
            onChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
            const { name, value } = target;
            const onlyNumbers = /^[0-9]*$/;      

            if (name === 'phoneNumber') {
              if (!onlyNumbers.test(value)) return
            if (value.length > 11) return
          }
           setFormData((prev: StudentProfileFormData) => ({
           ...prev,
          [name]: value,
          }));
          },
  
          async studentDetails(e: React.KeyboardEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>){
              e.preventDefault()
              if (selectedSubjects.length < 3) {
                setShowAlert(true);
             setAlertMessage("Subject Combination must be 3");
             setAlertStatus("error");
             setTimeout(() => setShowAlert(false), 4000);
             return;
              }
                    try {
                  setLoading(true)
                  const payload = {
                program: formData.program,
                email: formData.email,
                university: formData.university,
                phoneNumber: formData.phoneNumber,
                subject: formData.subject,
              }
               const response = await studentProfile(payload);
                      setShowAlert(true)
                      setAlertMessage(response?.message)
                      setAlertStatus('success')
                      setTimeout(() => { setShowAlert(false); navigate('/dashboard'); }, 5000)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error: any) {
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
              r.studentDetails(e);
            }
          },
  
            }
  
  return (
    <div>
        <div className="w-full relative">
                <img src={Laptop} alt="image" className="w-full h-screen" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/32  via-black/45 to-transparent  flex justify-center items-center">
                 <div className="w-[94%] sm:w-[90%] lg:w-[36%] bg-[#f5f5f5] h-[97%] sm:h-[88%]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px] sm:shadow-lg">
            <div className=' mt-[50px] lg:mt-[20px]'>
                <h2 className="text-primaryBlue text-3xl font-bold mb-[10px]">Student Information</h2>
                <p className="text-primaryGrey mb-4 text-sm sm:text-[18px]">Select your preferred and submit</p>
            </div>        
          
          <form className="space-y-3" onSubmit={r.studentDetails}>
            
             <div className='mt-[50px]'>
              <label className="block text-primaryGrey text-[16px] mb-1">Email</label>
              <div className="w-[99%] p-2 border h-[58px] bg-primaryWhite border-borderColor rounded-[10px] flex items-center">
                <Email  />
                <input
                  name='email'
                  type="email"
                  placeholder='Enter your email'
                  className="w-full outline-none pl-3 text-center h-[45px]"
                  value={formData.email}
                  onChange={(e) => r.onChange(e)}
                />
              </div>
            </div>

            <div>
                <label className="block text-primaryGrey text-[16px] mb-1">Subjects</label>
                <div className="w-[99%] p-2 border h-[58px] bg-primaryWhite border-borderColor rounded-[10px] flex items-center">
                  <Subject />
                  <div className="w-full pl-3">
                    <Select
                      isMulti
                      options={subjectOptions}
                      value={selectedSubjects}
                      onChange={handleSubjectsChange}
                      placeholder="You can only select 3 subjects combination"
                      classNames={{
                       control: () =>
                         "bg-transparent border-none shadow-none min-h-[40px] flex items-center justify-center cursor-pointer",
                       valueContainer: () =>
                         "p-0 flex gap-2 flex-wrap justify-center w-full text-center",
                       multiValue: () =>
                         "bg-gray-100 rounded-lg px-2 py-1 flex items-center",
                       multiValueLabel: () =>
                         "text-gray-800 text-sm font-medium",
                       multiValueRemove: () =>
                         "text-gray-500 hover:bg-red-500 hover:text-white rounded-full p-1 cursor-pointer",
                       placeholder: () =>
                         "text-gray-400 text-sm text-center w-full",
                       menu: () =>
                         "bg-white rounded-lg shadow-md mt-2 p-1",
                       option: ({ isFocused, isSelected }) =>
                         `text-sm px-3 py-2 cursor-pointer text-center ${
                           isSelected
                             ? "bg-blue-600 text-white"
                             : isFocused
                             ? "bg-gray-100"
                             : "bg-white"
                         }`,
                     }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: "none",
                          boxShadow: "none",
                          backgroundColor: "transparent",
                        }),
                        valueContainer: (base) => ({
                          ...base,
                          padding: 0,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-primaryGrey text-[16px] mb-1">University</label>
                <div className="w-[99%] p-2 border h-[58px] bg-primaryWhite border-borderColor rounded-[10px] flex items-center">
                  <Cap />
                  <div className="w-full pl-3">
                    <Select
                      options={universityOptions}
                      value={selectedUniversity}
                      onChange={handleUniversityChange}
                      placeholder="Select your university"
                       classNames={{
                        control: () =>
                          "bg-transparent border-none shadow-none min-h-[40px] flex items-center justify-center cursor-pointer",
                        valueContainer: () =>
                          "p-0 flex gap-2 justify-center w-full text-center",
                        placeholder: () =>
                          "text-gray-400 text-sm text-center w-full",
                        menu: () =>
                          "bg-white rounded-lg shadow-md mt-2 p-1",
                        option: ({ isFocused, isSelected }) =>
                          `text-sm px-3 py-2 cursor-pointer text-center ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : isFocused
                              ? "bg-gray-100"
                              : "bg-white"
                          }`,
                      }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: "none",
                          boxShadow: "none",
                          backgroundColor: "transparent",
                        }),
                        valueContainer: (base) => ({
                          ...base,
                          padding: 0,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>                    
               <div>
              
                <label className="block text-primaryGrey text-[16px] mb-1">Program</label>
                <div className="w-[99%] p-2 border h-[58px] bg-primaryWhite border-borderColor rounded-[10px] flex items-center">
                  <Program />
                  <div className="w-full pl-3">
                    <Select
                      options={programOptions}
                      value={selectedProgram}
                      onChange={handleSelectedProgram}
                      placeholder="Selects your program"
                       classNames={{
                         control: () =>
                           "bg-transparent border-none shadow-none min-h-[40px] flex items-center justify-center cursor-pointer",
                         valueContainer: () =>
                           "p-0 flex gap-2 justify-center w-full text-center",
                         placeholder: () =>
                           "text-gray-400 text-sm text-center w-full",
                         menu: () =>
                           "bg-white rounded-lg shadow-md mt-2 p-1",
                         option: ({ isFocused, isSelected }) =>
                           `text-sm px-3 py-2 cursor-pointer text-center ${
                             isSelected
                               ? "bg-blue-600 text-white"
                               : isFocused
                               ? "bg-gray-100"
                               : "bg-white"
                           }`,
                       }}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: "none",
                          boxShadow: "none",
                          backgroundColor: "transparent",
                        }),
                        valueContainer: (base) => ({
                          ...base,
                          padding: 0,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>


            <div className='mt-[20px]'>
              <label className="block text-primaryGrey text-[16px] mb-1">Phone Number (Whatsapp)</label>
              <div className="w-[99%] p-2 border h-[58px] bg-primaryWhite border-borderColor rounded-[10px] flex items-center">
                <Call  />
                <input
                 name='phoneNumber'
                 placeholder='Enter 11 digits Phone Number'
                  type="text"
                  className="w-full outline-none pl-3 text-center h-[45px]"
                  value={formData.phoneNumber}
                  onChange={(e) => r.onChange(e)}
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
                disabled={!formData.email || !formData.phoneNumber || formData.phoneNumber.length !== 11 || !formData.program || !formData.subject || !formData.university}
                className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px]"> Submit</Button>
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

export default Student;