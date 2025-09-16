import { Avatar2, Avatar1, CardImg} from '../../../assets/images';
import { ArrowLeft, TextbookIcon } from '../../../assets/icon';
import { Button } from "../../../components/shared";
import { TopicCard } from "../../../components/card";

interface PastQuestionSingles {
  id: number;
  img: string;
  title: string;
  question: string;
  topics: string;
  rating: number;
  avatars: string[];
  practiceNumber: number;
}

const SinglePastQuestion = () => {
     const pastQuestionSingle: PastQuestionSingles[] = [
    {
      id: 1,
      img: CardImg,
      title: "Biology 101",
      question: "50 questions",
      topics: "Topics: Physical quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      practiceNumber: 1200,
    },
    {
      id: 2,
      img: CardImg,
      title: "Biology 101",
       question: "50 questions",
      topics: "Topics: Physical quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      practiceNumber: 1200,
    },
    {
      id: 3,
      img: CardImg,
      title: "Biology 101",
       question: "50 questions",
      topics: "Topics: Physical quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      practiceNumber: 1200,
    },
  ];
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 1. Header: Back Button (Responsive) */}
      <header className="w-full bg-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <Button
          
          color="bg-white"
          textColor="text-gray-800"
          rounded="full"
          className="w-auto sm:w-[108px] font-semibold flex items-center justify-center gap-1 border border-gray-800"
          onClick={() => window.history.back()}
        >
          <ArrowLeft /> 
          Back
        </Button>
      </header>

      {/* 2. Page Title + Textbook Badge (Stack on Mobile) */}
      <div className="px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Biology
        </h1>
        <div className="bg-[#25AF7C1A] rounded-full py-1 sm:py-2 px-3 sm:px-6 flex items-center gap-2 self-start sm:self-auto">
          <TextbookIcon/> 
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">
            Textbook
          </h3>
        </div>
      </div>

      {/* 3. Subheading (Scale Text) */}
      <div className="px-4 sm:px-6 lg:px-10 mt-2 sm:mt-3">
        <p className="text-xs sm:text-sm text-gray-600">
          Read Jupeb Textbooks covering all topics in sections 001/002/003 & 004
        </p>
      </div>

      {/* 4. Topics Grid (Responsive Columns) */}
      <main className="flex-grow px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pastQuestionSingle.map((question) => (
            <TopicCard key={question.id} topic={question} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default SinglePastQuestion
