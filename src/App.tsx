import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import HolidayRequestForm from "./components/HolidayRequestForm";
import PendingRequestPage from "./components/PendingRequestPage";
import HolidayTrackerPage from "./components/HolidayTrackerPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/request-holiday" exact component={HolidayRequestForm} />
        <Route path="/pending-request" exact component={PendingRequestPage} />
        <Route path="/holiday-tracker" exact component={HolidayTrackerPage} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default App;
