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
  _id: number;                
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
  period: string;    
  timePeriod: string | number;    
  participants: number;      
  answers: string [];
  quizDate: string;
}

 export type submitQuizInterface = {
            userId: number | null | undefined;
            quizId: number | null | undefined;
            program: string | null | undefined;
            totalTime: number | null | undefined;
            questionDetails: {
            questionContent: string;
            userAnswer: string;
        }[]; 
        }

        export type quizType = {
            questionContent: string;
            userAnswer: string[];
            content: string
            answers_suggestion: string []
            question_type: string
        };

        export type quizDataType = {
           timePeriod: number;
        };


        export type quizAnswer = {
            question: string;
            topic: string;
            selectedAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
            };

    export type quizResult = {
  totalQuestion: number;
  correctAnswers: number;
  wrongAnswers: number;
  quizQuestions: {
    _id: string;
    userId: string;
    quizId: string;
    program: string;
    answers: {
      question: string;
      topic: string;
      selectedAnswer: string;
      correctAnswer: string;
      isCorrect: boolean;
    }[];
    score: number;
    percentage: number;
    timePeriod: number;
    quizDate: string;
    __v: number;
  };
}
