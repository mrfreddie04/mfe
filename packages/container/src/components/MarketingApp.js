import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const marketingRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(marketingRef.current, {
      onNavigate: ({pathname: nextPathname}) => {
        const { pathname } = history.location;
        if(pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname       
    });

    history.listen(onParentNavigate);
  },[]);

  return(
    <div ref={marketingRef}/>
  );  
}
