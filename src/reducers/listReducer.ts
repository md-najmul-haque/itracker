import { Action } from "@reduxjs/toolkit";

const initialState = {
    title: "itracker Board",
    id: 0,
    card: [
        {
            id: 0,
            test: 'issue description-1'
        },
        {
            id: 1,
            test: 'issue description-2'
        },
    ]
}

const listReducer = (state = initialState, action: Action) => {

    switch (action.type) {


        default:
            return state;
    }

}

export default listReducer; 