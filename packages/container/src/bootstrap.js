import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);

// const mount = (el) => {  
//   ReactDOM.render(
//     <App/>,
//     el
//   );
// }

// // 1) check if is we are running in isolation - dev mode & a specific element exists in html 
// // (that we know won't exist in container app )
// if(process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#root");
//   if(devRoot) {
//     //probably running in isolation
//     mount(devRoot);
//   }
// }
