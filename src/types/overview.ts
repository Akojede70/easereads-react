  export interface Overview {
  textBooksRead: number;
  examsTaken: number;
  studyTime: number;
  dayStreak: number;
}

interface progressType {
  title: string;
  progress: number;
}

export type  ProgressData = {
   textbooks: progressType[]
   videos: progressType[]
   exams: progressType[]
}

 export interface LeaderboardUser {
            name: string;
            level: number;
            student: {
            firstName: string;
            lastName: string;
            imageUrl: string | null;
          };
 }

 interface TextbookProgress {
  bookName: string;
  progressPercentage: number;
}

export interface PerformanceOverview {
  totalQuestions: number;
  totalCorrect: number;
  averageScore: number;
  textbooks: TextbookProgress[];
  period: "all-time" | "weekly" | "monthly" | "yearly";
}

