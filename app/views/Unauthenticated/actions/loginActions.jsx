/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

// Custom imports
import { history } from '../../Routes';
import { post } from '../../../utilities/apiUtilities';

// create unique variables for exports
export const REQUEST_LOGIN_ACTION = 'REQUEST_LOGIN_ACTION';
export const RECEIVE_LOGIN_SUCCESS = 'RECEIVE_LOGIN_SUCCESS';
export const RECEIVE_LOGIN_FAILURE = 'RECEIVE_LOGIN_FAILURE';

const requestLoginAction = () => ({
  type: REQUEST_LOGIN_ACTION,
});

const receiveLoginSuccess = access_token => ({
  type: RECEIVE_LOGIN_SUCCESS,
  payload: {
    access_token,
  },
});

const receiveLoginFailure = error => ({
  type: RECEIVE_LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const performLogin = (credentials) => {
  return (dispatch) => {
    dispatch(requestLoginAction());
    post('/users/authenticate', credentials)
      .then((response) => {
        // console.log(response);
        const access_token = response.auth.access_token;
        dispatch(receiveLoginSuccess(response.auth.access_token));
        localStorage.setItem('access_token', access_token);
        history.push('/customers');
      })
      .catch((error) => {
        dispatch(receiveLoginFailure(error));
      });
  };
};
