import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";

//it imports the code only when we try to render this component
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
}); 

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  console.log("Auth status:", isSignedIn);

  return(
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>    
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );  
}


