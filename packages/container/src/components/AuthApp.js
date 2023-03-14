import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

//console.log("AUTH Loaded");

export default function AuthApp({onSignIn}) {
  const authRef = useRef(null);
  const history = useHistory();

  //console.log("AUTH", history.location )

  useEffect(() => {
    const { onParentNavigate } = mount(authRef.current, {
      onNavigate: ({pathname: nextPathname}) => {
        const { pathname } = history.location;
        if(pathname !== nextPathname) {
          //console.log(`Auth just navigated to: ${nextPathname}`)
          history.push(nextPathname);
        }
      },
      onSignIn,
      initialPath: history.location.pathname        
    });

    history.listen(onParentNavigate);
  },[]);

  return(
    <div ref={authRef}/>
  );  
}
