

  export interface Overview {
  textBooksRead: number;
  examsTaken: number;
  studyTime: number;
  textbooksRead: number;
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