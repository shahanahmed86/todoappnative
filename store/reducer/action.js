import actionTypes from './types';

const allMethods = {
    onFetchData: data => {
        return dispatch => {
            dispatch({
                type: actionTypes.FETCHDATA,
                payload: data,
            })
        }
    },
}

export default allMethods;