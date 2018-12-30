import actionTypes from './types';

const allMethods = {
    onAddTodo: message => {
        return dispatch => {
            dispatch({
                type: actionTypes.ONADDTODO,
                payload: message,
            })
        }
    },
    onEditTodo: (message, ind) => {
        return dispatch => {
            dispatch({
                type: actionTypes.ONEDITTODO,
                payload: { message, ind },
            })
        }
    },
    onDeleteTodo: ind => {
        return dispatch => {
            dispatch({
                type: actionTypes.ONDELETETODO,
                payload: ind,
            })
        }
    },
}

export default allMethods;