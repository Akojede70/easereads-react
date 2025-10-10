        export type UserIdAndNumber = {
            program: string | null | undefined;
            userId: number | null | undefined
        }

        export type UserIdNumberAndSubject = {
            program: string | null | undefined;
            userId: number | null | undefined;
            subject: string | null | undefined;
        }

        export type topicInterFace = {
            program: string | null | undefined;
            userId: number | null | undefined;
            subject: string | null | undefined;
            sections: string[] | null | undefined;
        }

        export type viewTopicInterFace = {
            userId: number | null | undefined;
            program: string | null | undefined;
            subject: string | null | undefined;
            section: string[] | null | undefined;
            selectedTopics: string[] | null | undefined;
        }

        export type submitQuestionsInterface = {
            userId: number | null | undefined;
            program: string | null | undefined;
            subject: string | null | undefined;
            section: string[] | null | undefined;
            selectedTopics: string[] | null | undefined;
            startDate: string | null | undefined
            finishedDate: string  | null | undefined
            questionDetails: {
            questionContent: string;
            userAnswer: string;
        }[]; 
        }

        export type QuestionType = {
            question: string;
            answers_suggestion: string[];
            content: string
        }; 

         

        export type examHistoryInterface = {
            userId: number | null | undefined;
            program: string | null | undefined;
        }; 

        export type ExamAnswer = {
            question: string;
            topic: string;
            selectedAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
            };

       type ExamBlock = {
           id: number;
           userId: number;
           examId: string;
           program: string;
           title: string;
           attemptId: string;
           score: number;
           percentage: string;
           questions: number;
           createdAt: string;
           updatedAt: string;
         };
 
         export type ExamHistory = {
           examBlocks: ExamBlock[];
           totalQuestions: number;
           averagePercentage: number;
           totalSubjects: number;
         };
 
