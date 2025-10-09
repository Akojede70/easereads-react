export interface QuizData {
  _id: string;
  title: string;
  weekNumber: number;
  participants: number;
  quizType: string;
  program: string;
  period: string;
  topics: string[];
  assignedTo: string[];
  timePeriod: number;
  totalQuestion: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 export interface QuizHistoryItem {
  id: number;                
  userId: number;            
  quizId: string;            
  program: string;            
  quizType: string;           
  title: string;              
  attemptId: string;        
  score: number;             
  percentage: string;         
  questions: number;         
  createdAt: string;         
  updatedAt: string;          
  participants: number;      
}