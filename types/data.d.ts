//include all the data types
export interface STUDYGROUP_TYPE {
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
}

export interface STUDYGROUPS_TYPE {
    studyGroupData: STUDYGROUP_TYPE_TYPE[];
}

export interface POST_TYPE {
    id: number;
    writer: string;
    studyGroupId: number;
    title: string;
    mainText: string;
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
