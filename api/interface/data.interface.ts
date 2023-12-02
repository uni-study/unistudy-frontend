export type User = {
    id: number;
    password: string;
    name: string;
    email: string;
};

export type StudyGroup = {
    id: number;
    leader: string;
    title: string;
    description: string;
    department: string;
    numOfPeople: number;
    studyMethod: string;
    studyPeriod: number;
    recruitmentDeadline: string;
    currentState: string;
    contact: string;
};

export type Post = {
    id: number;
    writer: string;
    studyGroupId: number;
    title: string;
    mainText: string;
    postedAt: string;
    updatedAt: string;
    expiredAt: string;
};
