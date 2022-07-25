import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter Basename="/login-form">
        <Route exact path="/login-form" " component={Login} />
        <Route exact path="/" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
