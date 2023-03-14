import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

//it imports the code only when we try to render this component
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
}); 

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  //console.log("Auth status:", isSignedIn, history.location.pathname);

  return(
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>    
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path="/dashboard">
                {isSignedIn && <DashboardLazy/>}
								{!isSignedIn && <Redirect to="/"/>}
              </Route> 
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );  
}


