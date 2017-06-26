/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description We'll use axios to create reusable functions for HTTP:
 *     GET
 *     PATCH
 *     POST
 *     DELETE
 *
 * @description We'll be configuring a single instance of axios using the axios.create method.
 *
 * @description We'll be creating two functions:
 *     getHeaders: returns the necessary headers depending on whether the user is authenticated
 *     handleError: a generic error handling function that returns a structured error from the API
 *
 * @description We'll also create four functions that make actual API calls:
 *     get - GET call
 *     post - POST call
 *     patch - PATCH call
 *     del - DELETE call
 *
 * @TODO We'll use these utilities to make API calls
 * When ready, copy the code found here:
 * github.com/TalkRise/React_OrderMan_Client/blob/m2_complete/app/utilities/apiUtilities.jsx
 */

 // Module imports
 import axios from 'axios';


 // Custom imports
 import store from '../store/configureStore';


 export const BASE_HEADERS = {
   Accept: 'application/json',
   'Content-Type': 'application/json',
 };


 /**
  * @function getHeaders
  * @description Returns headers for API requests
  * @returns {{
  *   headers: {
  *     Accept: string,
  *     Content-Type: string
  *   }
  * }}
  */
 export const getHeaders = () => {
   const headers = BASE_HEADERS;

  //  const accessToken = store.getState().auth.access_token;
  //  if (accessToken) {
  //    headers.Authorization = accessToken;
  //  }

   return { headers };
 };


 export const BASE_URL = process.env.API_BASE;


 const baseError = {
   name: 'BaseError',
   message: 'Something went wrong. Please refresh and try again.',
   status: 500,
 };


 export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   timeout: 4000,
 });


 /**
  * @function handleError
  * @description Handles errors correctly
  * @param e
  */
 export const handleError = (e) => {
   const error = e && e.response ?
     e.response.data :
     baseError;
   const message = error.message || 'Something went wrong. Please refresh your page.';
   alert(message); // eslint-disable-line no-alert
   throw error;
 };


 /**
  * @function get
  * @description Places GET requests to path
  * @param path
  */
 export const get = path =>
   axiosInstance.get(path, getHeaders())
     .then(response => response.data)
     .catch(handleError);


 /**
  * @function post
  * @description Places POST requests to path with data as body
  * @param path
  * @param data
  */
 export const post = (path, data) =>
     axiosInstance.post(path, data, getHeaders())
       .then(response => response.data)
       .catch(handleError);


 /**
  * @function patch
  * @description Places PATCH requests to path with data as body
  * @param path
  * @param data
  */
 export const patch = (path, data) =>
   axiosInstance.patch(path, data, getHeaders())
     .then(response => response.data)
     .catch(handleError);


 /**
  * @function del
  * @description Places DELETE requests to path
  * @param path
  */
 export const del = path =>
   axiosInstance.delete(path, getHeaders())
     .then(response => response.data)
     .catch(handleError);
