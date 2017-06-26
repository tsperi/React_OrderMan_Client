/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

// Page imports
import { history } from '../../../Routes';
import { post } from '../../../../utilities/apiUtilities';

// custom exports
export const REQUEST_CUSTOMERS_CREATE_ACTIONS = 'REQUEST_CUSTOMERS_CREATE_ACTIONS';
export const RECEIVE_CUSTOMERS_CREATE_SUCCESS = 'RECEIVE_CUSTOMERS_CREATE_SUCCESS';
export const RECEIVE_CUSTOMERS_CREATE_FAILURE = 'RECEIVE_CUSTOMERS_CREATE_FAILURE';

const requestCustomersCreateActions = () => ({
  type: REQUEST_CUSTOMERS_CREATE_ACTIONS,
});

const receiveCustomersCreateSuccess = () => ({
  type: RECEIVE_CUSTOMERS_CREATE_SUCCESS,
});

const receiveCustersCreateFailure = error => ({
  type: RECEIVE_CUSTOMERS_CREATE_FAILURE,
  payload: {
    error,
  },
});

export const performCreateCustomer = (customerData) => {
  return (dispatch) => {
    dispatch(requestCustomersCreateActions());
    post('/customers', customerData)
      .then(() => {
        dispatch(receiveCustomersCreateSuccess());
        alert('Customer created successfully!');
        history.push('/customers');
      })
      .catch((error) => {
        dispatch(receiveCustersCreateFailure(error));
      });
  };
};
