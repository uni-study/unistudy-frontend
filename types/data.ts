//include all the data types
export interface STUDYGROUP_TYPE {
    leaderId: number;
    name: string;
    description: string;
    department: string;
    numOfPeople: number;
    studyMethod: string;
    studyPeriod: number;
    recruitmentDeadline: string;
    currentState: string;
    contact: string;
}

export interface STUDYGROUPS_TYPE {
    studyGroupData: STUDYGROUP_TYPE[];
}

export interface POST_TYPE {
    title: string;
    mainText: string;
    studyGroupId: number;
    writeId: number;
    postedAt: string;
    updatedAt: string;
    expiredAt: string;
}

export interface POSTS_TYPE {
    postData: POST_TYPE[];
}

export interface USER_TYPE {
    id: number;
    password: string;
    name: string;
    major: string;
    profileImageURL: string;
}

export interface USERS_TYPE {
    userData: USER_TYPE[];
}

export const department: string[] = [
    "All",
    "ME",
    "CUEEn",
    "MSE",
    "ECE",
    "NE",
    "Design",
    "BME",
    "IE",
    "BS",
    "EE",
    "CSE",
    "Physics",
    "MS",
    "Chemistry",
    "Business",
];

export const studyMethod: string[] = ["Online", "Offline", "On+Offline"];

export const numOfPeople: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const studyPeriod: string[] = [
    "Not Decided",
    "1 month",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
];

export const currentState: string[] = ["Recruiting", "In progress", "Finished"];
