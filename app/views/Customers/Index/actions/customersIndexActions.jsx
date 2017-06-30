/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { get } from '../../../../utilities/apiUtilities';

export const REQUEST_CUSTOMERS_INDEX_ACTION = 'REQUEST_CUSTOMERS_INDEX_ACTIONS';
export const RECEIVE_CUSTOMERS_INDEX_SUCCESS = 'RECEIVE_CUSTOMERS_INDEX_SUCCESS';
export const RECEIVE_CUSTOMERS_INDEX_FAILURE = 'RECEIVE_CUSTOMERS_INDEX_FAILURE';

const requestCustomersIndexAction = () => ({
  type: REQUEST_CUSTOMERS_INDEX_ACTION,
});

const receiveCustomersIndexSuccess = () => ({
  type: RECEIVE_CUSTOMERS_INDEX_SUCCESS,
});

const receiveCustomersIndexFailure = error => ({
  type: RECEIVE_CUSTOMERS_INDEX_FAILURE,
  payload: {
    error,
  },
});

export const performIndexCustomer = () => {
  return (dispatch) => {
    dispatch(requestCustomersIndexAction());
    post('/customers')
    // **look at code pushed to see changes**
      .then(() => {
        dispatch(receiveCustomersIndexSuccess());
        alert('Customer Index successful!');
        history.push('/customers');
      })
      .catch((error) => {
        dispatch(receiveCustomersIndexFailure(error));
      });
  };
};
