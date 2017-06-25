/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This connected CustomersIndexContainer shows a list of Customers.
 *
 * @description The list will be shown using a CustomersTable component.
 *
 * @description Use an AuthenticatedLayout with the CustomersTable component as it's children.
 *
 * propTypes = {
 *   customersIndex: ...,
 *   performCustomersIndexSearch: PropTypes.func.isRequired,
 * };
 *
 * @exports CustomersIndexContainer
 */


// Module imports
import React, { Component } from 'react';


export default class CustomersIndexContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the Customers Index Container!</h1>
        <h3>
          This will become a protected page when we do authentication.
          <br />
          Only authenticated users should see this!
        </h3>
      </div>
    );
  }
}
