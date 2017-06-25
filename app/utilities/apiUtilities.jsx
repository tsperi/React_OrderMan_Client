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
