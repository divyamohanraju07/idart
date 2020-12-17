import type from '../actions/actionTypes';

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.chartData:
            return {
                ...state, data: [...action.payload]
            }

        default:
            return {
                ...state
            }
    }
}