export type UserIdAndNumber = {
    program: string | null | undefined;
    userId: number | null;
}

export type UserIdNumberAndSubject = {
    program: string | null | undefined;
    userId: number | null;
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