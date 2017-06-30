/**
* GENERAL NOTES
* @author TalkRise <admin@talkrise.com>
*
* @description Redux reducer "customersCreate".
*
* @description This reducer is solely responsible for maintaining info about a list of Customers.
*
* initialState = {
*   isFetching: false,
*   error: null,
* };
*
*/

import {
  REQUEST_CUSTOMERS_CREATE_ACTIONS,
  RECEIVE_CUSTOMERS_CREATE_SUCCESS,
  RECEIVE_CUSTOMERS_CREATE_FAILURE,
} from '../actions/customersCreateActions';

const initialState = {
  isFetching: false,
  error: null,
};

export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_CUSTOMERS_CREATE_ACTIONS:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_CUSTOMERS_CREATE_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case RECEIVE_CUSTOMERS_CREATE_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};
