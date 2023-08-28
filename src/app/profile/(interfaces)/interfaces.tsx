export interface User {
    Name: string,
    Connections: Connection[],
    Employment: string,
    Stack: string,
    Languages: string,
    Interests: string,
    Experience: Experience[]
}
export interface Experience {
    EmployerRole: string,
    Timeframe: string,
    Description:string
}

export interface Connection {
    Name: string,
    Company: string
}