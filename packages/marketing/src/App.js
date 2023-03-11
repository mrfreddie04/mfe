import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

function App() {
  return(
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing}/>
            <Route path="/" component={Landing}/>
            {/* <Route path="*">
              <Redirect to="/"/>
            </Route> */}
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );  
}

export default App;