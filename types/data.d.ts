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
