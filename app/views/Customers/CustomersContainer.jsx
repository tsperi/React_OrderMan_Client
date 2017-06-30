/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The CustomersContainer does the exact same thing as the UnauthenticatedContainer.
 *
 * @description It's responsible for Routing the Customers sub-pages.
 *
 * @description It only uses a Switch and Routes from 'react-router-dom'.
 *
 * @exports CustomersContainer
 */


// Module imports
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


// Container imports
import CustomersCreateContainer from './Create/CustomersCreateContainer';
import CustomersIndexContainer from './Index/CustomersIndexContainer';
import CustomersShowContainer from './Show/CustomersShowContainer';


export default class CustomersContainer extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/customers/create"
          component={CustomersCreateContainer}
        />
        <Route
          path="/customers"
          component={CustomersIndexContainer}
        />
        {/* Your other routes go here */}
      </Switch>
    );
  }
}

CustomersContainer.propTypes = {};

CustomersContainer.defaultProps = {};
