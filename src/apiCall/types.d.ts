export interface DB {
    users:     User[];
    questions: Question[];
    comments:  Comment[];
}

export interface Comment {
    questionsId: number;
    id:          number;
    name:        string;
    email:       string;
    body:        string;
    createdAt:   number;
}

export interface Question {
    usersId:   number;
    id:        number;
    title:     string;
    body:      string;
    createdAt: number;
}

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
}