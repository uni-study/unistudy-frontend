export interface User {
    id: number;
    pw: string;
    name: string;
    email: string;
}

export interface StudyGroup {
    id: number;
    leaderId: number;
    name: string;
    description: string;
    department: number;
    numOfPeople: number;
    studyMethod: number;
    studyPeriod: number;
    recruitmentDeadline: string;
    currentState: number;
    contact: string;
}

export interface Post {
    id: number;
    writerId: number; //writer 의 id
    studygroupId: number;
    title: string;
    mainText: string;
    postedAt: string;
    updatedAt: string;
    expiredAt: string;
}

export interface Comment {
    id: number;
    postId: number;
    userId: number;
    mainText: string;
    postedAt: string;
}

export interface LOGED_INFO_INTERFACE {
    logged: boolean;
    id: number;
    password: string;
    name: string;
    email: string;
}
