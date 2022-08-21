
export type List = {
    title: string,
    id: number,
    cards: {
        id: number,
        text: string
    }
}

export type TaskListPros = {
    list: {
        title: string,
        id: number,
        cards: {
            id: number,
            text: string
        }
    }
}