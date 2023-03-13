import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

const mount = (el, { onNavigate, initialPath, defaultHistory, onSignIn }) => {  
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [ initialPath || "/"]
  });
  if(onNavigate) {
    history.listen((location) => onNavigate(location));
  }
  // if(initialState) {
  //   const { pathname } = history.location;
  //   const initialPath = initialState.pathname;
  //   console.log("Initial Path", initialPath);
  //   if(pathname !== initialPath) {
  //     history.push(initialPath);
  //   }
  // }

  ReactDOM.render(    
    <App history={history} onSignIn={onSignIn}/>,
    el
  );

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      console.log(`Container just navigated: ${nextPathname}`);
      const { pathname } = history.location;
      if(pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }  
  };
}

// 1) check if is we are running in isolation - dev mode & a specific element exists in html 
// (that we know won't exist in container app )
if(process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-isolation");
  if(devRoot) {
    //probably running in isolation
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// 2) export to be used by a container
export { mount };