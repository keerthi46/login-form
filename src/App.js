import "./App.css";
import Login from "./pages/Login";
import { HashRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <HashRouter Basename="/login-form">
        <Route exact path="/login-form" " component={Login} />
        <Route exact path="/" component={Dashboard} />
      </HashRouter>
    </div>
  );
}

export default App;
