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
    role: string,
    timeframe: string,
    description:string
}

export interface Connection {
    Name: string,
    Company: string
}