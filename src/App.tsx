import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import HolidayRequestForm from "./components/HolidayRequestForm";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <iframe
        src="https://inside.auto1-group.com"
        style={{ height: "1080px", width: "100%" }}
      ></iframe>
      <a
        href="/request"
        style={{
          zIndex: 1111,
          background: "none",
          bottom: 400,
          position: "absolute",
          top: "300px",
          width: "200px",
          height: "50px",
          color: "orange",
          right: "180px",
          marginTop: "12px"
        }}
      >
        Request holiday
      </a> */}
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/request-holiday" exact component={HolidayRequestForm} />
        {/* <Route path="/cars/:id" exact component={CarDetailsPage} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default App;
