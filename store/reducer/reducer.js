import actionTypes from './types';

const initialState = {
    todo: ['hello', 'how are you'],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHDATA: {
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