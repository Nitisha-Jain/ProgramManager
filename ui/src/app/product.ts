export interface ProductInterface {
    id: string;
    productName: string;
    createdAt: Date;
    durationWeek: number;
    durationDays: number;
    durationHours: number;
    assignee: number;
    agenda: Array<string>;
    program: Array<Program>;

}

export interface Program {
    id: string;
    text: string;
    startDate: Date;
    endDate: Date;
    assignee: Array<string>;
}
export interface Employee {
    text: string;
    id: string;
    colgram1or: string;
    avatar: string;
    age: number;
    discipline: string;
}
export interface Assignee {
    id: number;
    program: Array<Program1>;

}
export interface Program1 {
    text: string;
    startDate: Date;
    endDate: Date;
<<<<<<< HEAD
    noOfParticipate:number;
    session:Array<Session>;
    
}
export interface Session
{
    text:string;
=======
    noOfParticipate: number;
    session: Array<Session>;

}
export interface Session {
    text: string;
>>>>>>> c13d9b68a0210ac82cc38714d27fdd302fa28707
    startDate: Date;
    endDate: Date;
}