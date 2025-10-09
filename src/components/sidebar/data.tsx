import type { ReactNode } from "react";
import { Overview, Analytics, Exam, Live, Logout, Others, Past, Subscription, Textbook, Video } from '../../assets/icon';
interface Path {
    id: number;
    icon: React.ReactNode;
    name: ReactNode;
    path: string;
    hasSubmenu?: boolean;
    submenu?: {
        id: number;
        name: string;
        path: string;
    }[];
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
        path: '/jupeb/video-tutorial',
    },
    {
        id: 4,
        icon: (
            <Exam/>
        ),
        name: "Exam Practice",
        path: '/jupeb/exam-history',
    },
     {
        id: 4,
        icon: (
            <Exam/>
        ),
        name: "Quiz",
        path: '/jupeb/quiz',
    },
    {
        id: 5,
        icon: (
            <Live />
        ),
        name: "Live Class",
        path: '/jupeb/live-class',
    },
    {
        id: 6,
        icon: (
            <Past />
        ),
        name: "Past Questions",
        path: '/jupeb/past-Question',
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
        path: '/jupeb/analytics',
    },
    {
        id: 9,
        icon: <Others />,
        name: "Others",
        path: '/jupeb/others',
        hasSubmenu: true,
        submenu: [
            {
                id: 1,
                name: "Referral Points",
                path: '/jupeb/referral-points',
            },
            {
                id: 2,
                name: "Help Center",
                path: '/jupeb/help-center',
            },
        ],
    },
     {
        id: 10,
        icon: (
            <Logout />
        ),
        name: "logout",
        path: 'logout',
    },
];

export default paths;