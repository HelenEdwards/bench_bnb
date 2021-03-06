// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)


import { signIn } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'; 
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const login = (user) => (dispatch) => signIn(user)
    .then(() => dispatch(receiveCurrentUser()))