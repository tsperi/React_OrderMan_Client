/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This component is responsible for displaying a information about a Customer.
 *
 * @description Redux-form that performs validation and uses renderTextField for it's Fields.
 *
 * propTypes = {
 *   invalid: PropTypes.bool.isRequired,
 *   pristine: PropTypes.bool.isRequired,
 *   handleSubmit: PropTypes.func.isRequired,
 * };
 */
 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import { Field, reduxForm } from 'redux-form';

 // Component imports
 import renderTextField from '../../../common/forms/renderTextField';
 import SuccessButton from '../../../common/buttons/SuccessButton';

 class CustomerDetailsForm extends Component {
   render() {
     const {
       handleSubmit,
       invalid,
       pristine,
     } = this.props;

     return (
       <div className="panel panel-default">
         <div className="container-fluid">
           <form onSubmit={handleSubmit}>
             <div className="spacer" />
             <div className="col-md-10 col-md-offset-1">
               <Field
                 name="first_name"
                 placeholder="First Name"
                 component={renderTextField}
               />
               <Field
                 name="last_name"
                 placeholder="Last Name"
                 component={renderTextField}
               />
               <Field
                 name="email"
                 placeholder="Email"
                 component={renderTextField}
               />
               <div className="spacer" />
               <SuccessButton
                 block
                 title="Save"
                 loading={false}
                 disabled={pristine || invalid}
               />
               <div className="spacer" />
             </div>
           </form>
         </div>
         <div className="spacer" />
       </div>
     );
   }
 }

 CustomerDetailsForm.propTypes = {};

 CustomerDetailsForm.defaultProps = {};

 const validate = (values) => {
   const errors = {};
   if (!values.email) {
     errors.email = 'Email is required';
   }
   if (!values.password) {
     errors.password = 'Password is required';
   }
   return errors;
 };

 export default reduxForm({
   validate,
   form: 'customerDetailsForm',
 })(CustomerDetailsForm);
