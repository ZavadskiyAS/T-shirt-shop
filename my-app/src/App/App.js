import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import Main from '../Containers/Main/Main.jsx'
import css from "./App.module.css";

function App() {
  return (
    <div className={css.app}>
      <Main/>
      {/* <Switch>
      <Route exact path="/" component={Main} />
            <Route exact path="/statistic" component={Main} />
            <Route exact path="/currency" component={Main} />
            <Redirect to="/" />
      </Switch> */}
    </div>
  );
}

export default App;
