/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Custom propTypes declarations. We create specific propTypes shapes that we can reuse throughout the application.
 *
 * @example When ready you can view appropriate PropTypes here: https://github.com/TalkRise/React_OrderMan_Client/blob/m2_complete/app/customPropTypes.jsx
 */


// Module imports
import PropTypes from 'prop-types';


// Example PropTypes
export const CustomerPropType = PropTypes.shape({
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

export const ExamplePropType = PropTypes.shape({
  isFetching: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  customers: PropTypes.arrayOf(CustomerPropType).isRequired,
});


