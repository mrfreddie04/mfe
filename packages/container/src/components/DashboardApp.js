import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

export default function DashboardApp() {
  const dashboardRef = useRef(null);

  useEffect(() => {
    mount(dashboardRef.current);
  },[]);

  return(
    <div ref={dashboardRef}/>
  );  
}
