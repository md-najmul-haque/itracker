export type Issues = {
    projectId: string,
    issueName: string,
    description: string,
    email: string,
    dueData: Date,
    stage: string,
    priority: string,
    status: string,
}[]

export type Issue = {
    projectId: string,
    issueName: string,
    description: string,
    email: string,
    dueData: Date | any,
    stage: string,
    priority: string,
    status: string,
}