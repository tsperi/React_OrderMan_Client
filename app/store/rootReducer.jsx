/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This file is meant to create the rootReducer for our Redux store.
 *
 * @description We'll use the 'combineReducers' function exported from the 'redux' package.
 *
 * @description We'll configure rootReducer with some default reducers:
 *      routerReducer from 'react-router-redux'
 *      formReducer from 'redux-form'
 *
 * @exports The rootReducer
 */

// Imports
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// custom Imports
import signupReducer from '../views/Unauthenticated/reducers/signupReducer';
import loginReducer from '../views/Unauthenticated/reducers/signupReducer';
import authReducer from '../views/Unauthenticated/reducers/authReducer';
import customersCreateReducer from '../views/Customers/Create/reducers/customersCreateReducer';

const appReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  signup: signupReducer,
  login: loginReducer,
  auth: authReducer,
  customerCreate: customersCreateReducer,
});

export default (state,action) => appReducer(state,action);
