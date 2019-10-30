import React from "react";
import { Route, Switch } from "react-router-dom";

import PeopleDirectoryMock from "./PeopleDirectoryMock";
import {
  VacationRequestForm,
  VacationOverview,
  EmployeeeRequestsPage
} from "./pages";

import { Header, SideDrawer, Footer, AnotherDrawer } from "./common";
import "../App.css";

const TimeOutApp: React.FC = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={PeopleDirectoryMock} />
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/vacation-request"
            exact
            component={VacationRequestForm}
          />
          <Route path="/vacation-status" exact component={VacationOverview} />
          <Route
            path="/myemployee/vacation-request"
            exact
            component={EmployeeeRequestsPage}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
        <AnotherDrawer />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default TimeOutApp;
