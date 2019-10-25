import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import HolidayRequestForm from "./components/HolidayRequestForm";
import PendingRequestPage from "./components/PendingRequestPage";
import HolidayTrackerPage from "./components/HolidayTrackerPage";
import Header from "./components/common/Header/Header";
import SideDrawer from "./components/common/SideDrawer/SideDrawer";
import Footer from './components/common/Footer/Footer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Main} />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/request-holiday" exact component={HolidayRequestForm} />
          <Route path="/pending-request" exact component={PendingRequestPage} />
          <Route path="/holiday-tracker" exact component={HolidayTrackerPage} />

          {/* <Route component={NotFound} /> */}
        </Switch>
        <SideDrawer />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
