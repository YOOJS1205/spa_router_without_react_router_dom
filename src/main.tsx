import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./components/Router";
import Routes from "./components/Routes";
import Route from "./components/Route";
import Root from "./pages/Root";
import About from "./pages/About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
