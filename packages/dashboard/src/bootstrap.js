import { createApp } from 'vue';
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {  
  const app = createApp(Dashboard)
  app.mount(el);
}

// 1) check if is we are running in isolation - dev mode & a specific element exists in html 
// (that we know won't exist in container app )
if(process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-isolation");
  if(devRoot) {
    //probably running in isolation
    mount(devRoot);
  }
}

// 2) export to be used by a container
export { mount };