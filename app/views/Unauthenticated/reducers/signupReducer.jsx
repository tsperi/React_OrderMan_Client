/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducers "signup".
 *
 * @description Responsible for maintaining information about the signup call.
 *
 * initialState = {
 *   isFetching: false,
 *   error: null,
 * };
 *
 */

// custom Imports
import {
  REQUEST_SIGNUP_ACTION,
  RECEIVE_SIGNUP_SUCCESS,
  RECEIVE_SIGNUP_FAILURE,
} from '../actions/signupActions';

const initialState = {
  isFetching: false,
  error: null,
};

// reducer is a pure function!
export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_SIGNUP_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,    // clearing out any errors that could still be lingering
      };
    case RECEIVE_SIGNUP_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case RECEIVE_SIGNUP_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
