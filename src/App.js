import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import CreateEvent from "./CreateEvent/CreateEvent";
import EventResult from "./EventResult/EventResult";

const App = () => {
  const [event, setEvent] = useState({});

  const saveEvent = (event) => {
    console.log("event", event);
    setEvent(event);
  };

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/">
            <CreateEvent saveEvent={(event) => saveEvent(event)} />
          </Route>
          <Route path="/event">
            <EventResult event={event} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
