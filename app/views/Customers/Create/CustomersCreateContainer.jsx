/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Creates Customers. You need to use an AuthenticatedLayout and CustomerDetailsForm.
 *
 * propTypes = {
 *   performCustomersCreateAction: PropTypes.func.isRequired,
 *   customersCreateForm: ...
 * };
 *
 * @exports CustomersCreateContainer
 */


// Module imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions import
import { performCreateCustomer } from './actions/customersCreateActions';

// component import
import { CustomerDetailsForm } from '../Show/components/CustomerDetailsForm';

class CustomersCreateContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the Customers Create Container!</h1>
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
        <CustomerDetailsForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customersCreate: state.customersCreate,
  customerCreateForm: state.form.CustomerDetailsForm,
});

const mapDispatchToProps = () => ({
  performCreateCustomer,
});

export default connect(mapStateToProps, mapDispatchToProps())(CustomersCreateContainer);
