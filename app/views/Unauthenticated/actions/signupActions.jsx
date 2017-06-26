/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

// Custom Imports
import { history } from '../../Routes';
import { post } from '../../../utilities/apiUtilities';

// create unique variables for exports
export const REQUEST_SIGNUP_ACTION = 'REQUEST_SIGNUP_ACTION';
export const RECEIVE_SIGNUP_SUCCESS = 'RECEIVE_SIGNUP_SUCCESS';
export const RECEIVE_SIGNUP_FAILURE = 'RECEIVE_SIGNUP_FAILURE';

// Create action-creator functions!
  // These are pure functions and they return an action
const requestSignupAction = () => ({
  type: REQUEST_SIGNUP_ACTION,
});

const receiveSignupSuccess = () => ({
  type: RECEIVE_SIGNUP_SUCCESS,
});

const receiveSignupFailure = error => ({
  type: RECEIVE_SIGNUP_FAILURE,
  payload: {
    error,
  },
});

export const performSignup = credentials => {
  return dispatch => {
    dispatch(requestSignupAction());
    post('/users/register', credentials)
      .then(() => {
        dispatch(receiveSignupSuccess());
        alert('Signup successful! Now go to login!');
        history.push('/login');
      })
      .catch((error) => {
        dispatch(receiveSignupFailure(error));
      });
  };
};
