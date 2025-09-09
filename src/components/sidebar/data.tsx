import type { ReactNode } from "react";
import { Overview, Analytics, Exam, Live, Logout, Others, Past, Subscription, Textbook, Video } from '../../assets/icon';
interface Path {
    id: number;
    icon: React.ReactNode;
    name: ReactNode;
    path: string;
}

const paths: Path[] = [
    {
        id: 1,
        icon: (
           <Overview/>
        ),
        name: "Overview",
        path: '/jupeb/overview',
    },
    {
        id: 2,
        icon: (
          <Textbook/>
        ),
        name: "Textbook",
        path: '/jupeb/textbook',
    },
    {
        id: 3,
        icon: (
           <Video />
        ),
        name: "Video Tutorials",
        path: 'video',
    },
    {
        id: 4,
        icon: (
            <Exam/>
        ),
        name: "Exam Practice",
        path: '/jupeb/exam-practice',
    },
    {
        id: 5,
        icon: (
            <Live />
        ),
        name: "Live Class",
        path: 'class',
    },
    {
        id: 6,
        icon: (
            <Past />
        ),
        name: "Past Questions",
        path: 'past-questions',
    },
    {
        id: 7,
        icon: (
            <Subscription />
        ),
        name: "Subscription",
        path: 'subscription',
    },
    {
        id: 8,
        icon: (
            <Analytics />
        ),
        name: "Analytic",
        path: 'analytic',
    },
    {
        id: 8,
        icon: (
            <Others />
        ),
        name: "others",
        path: 'others',
    },
     {
        id: 8,
        icon: (
            <Logout />
        ),
        name: "logout",
        path: 'logout',
    },
];

export default paths;