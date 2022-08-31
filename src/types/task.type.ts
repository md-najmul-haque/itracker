export type Task = {
    _id: string,
    projectId: string,
    taskName: string,
    description: string,
    email: string,
    dueData: Date | any,
    stage: string,
    priority: string,
    status: string,
}

export type AllTaskProps = {
    task: {
        _id: string,
        projectId: string,
        taskName: string,
        description: string,
        email: string,
        dueData: Date | any,
        stage: string,
        priority: string,
        status: string,
    }
}