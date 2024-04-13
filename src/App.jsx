import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.Page";
import NotFound from "./pages/NotFound.Page";
import Login from "./pages/Login.Page";
import Houses from "./pages/Houses.Page";
import PropertyDetails from "./components/PropertyDetails.Component";
import LoginContext from "./context/Login.Context";

function App() {
  return (
    <LoginContext>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Houses" Component={Houses} />
          <Route path="/login" Component={Login} />
          <Route path="/house/:id" Component={PropertyDetails} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </LoginContext>
  );
}

export default App;
