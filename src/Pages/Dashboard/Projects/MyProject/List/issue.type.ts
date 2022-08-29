export type Issues = {
    projectName: string,
    issueName: string,
    description: string,
    email: string,
    dueData: Date | any,
    stage: string,
    priority: string,
    status: string,
}[]

export type Issue = {
    projectName: string,
    issueName: string,
    description: string,
    email: string,
    dueData: Date | any,
    stage: string,
    priority: string,
    status: string,
}