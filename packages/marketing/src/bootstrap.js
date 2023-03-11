import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el) => {  
  ReactDOM.render(
    <App/>,
    el
  );
}

// 1) check if is we are running in isolation - dev mode & a specific element exists in html 
// (that we know won't exist in container app )
if(process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-isolation");
  if(devRoot) {
    //probably running in isolation
    mount(devRoot);
  }
}

// 2) export to be used by a container
export { mount };