// pages/jupeb/past-question/index.tsx


import Layout from "../../../components/layout/layout";
import Button from "../../../components/shared/button";
import SubjectCard from "../../../components/card/SubjectCard";
import CardImg from "../../../assets/images/subjectcardimg.svg";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";

const pastQuestions = [
  {
    id: 1,
    img: CardImg,
    title: "Biology 101",
    questions: 50,
    topics: "Discusses galvanometers, measurement, quality control...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2, Avatar1],
    starRating: 4.5,
    hasTaken: true, // 👈 Add this to track if user has taken it
  },
  {
    id: 2,
    img: CardImg,
    title: "Chemistry 101",
    questions: 50,
    topics: "Organic reactions, bonding theory, quantum chemistry...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
    hasTaken: false,
  },
  {
    id: 3,
    img: CardImg,
    title: "Chemistry 101",
    questions: 50,
    topics: "Organic reactions, bonding theory, quantum chemistry...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
    hasTaken: false,
  },
  {
    id: 4,
    img: CardImg,
    title: "Chemistry 101",
    questions: 50,
    topics: "Organic reactions, bonding theory, quantum chemistry...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
    hasTaken: false,
  },
  {
    id: 5,
    img: CardImg,
    title: "Chemistry 101",
    questions: 50,
    topics: "Organic reactions, bonding theory, quantum chemistry...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
    hasTaken: false,
  },
  {
    id: 6,
    img: CardImg,
    title: "Chemistry 101",
    questions: 50,
    topics: "Organic reactions, bonding theory, quantum chemistry...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
    hasTaken: false,
  },
];

const PastQuestion = () => {
  return (
    <Layout name="pastQuestion">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Past Question</p>
          <p className="text-base pt-2 pb-4">Practice exam questions and track your performance.</p>
        </div>
        <div className="pb-4 sm:pb-0">
          <Button
            color="bg-green-500"
            textColor="text-white"
            rounded="full"
            className="sm:w-[227px] h-12"
          >
            Whatsapp Community
          </Button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-20">
          {pastQuestions.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} variant="past-question" hasTaken={subject.hasTaken} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PastQuestion;
