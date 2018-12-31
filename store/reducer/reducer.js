import actionTypes from './types';

const initialState = {
    todo: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ONADDTODO: {
            return {
                ...state,
                todo: state.todo.concat(action.payload),
            }
        }
        case actionTypes.ONEDITTODO: {
            state.todo.splice(action.payload.ind, 1, action.payload.message);
            return {
                ...state,
            }
        }
        case actionTypes.ONDELETETODO: {
            state.todo.splice(action.payload, 1);
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;