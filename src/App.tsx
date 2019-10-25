import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import HolidayRequestForm from "./components/HolidayRequestForm";
import List from "./components/common/List/List";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/request-holiday" exact component={HolidayRequestForm} />
        <Route path="/holiday-balance" exact component={List} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default App;
