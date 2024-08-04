import "./App.css";
import "./styles/_base.scss";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./components/Routes/AppRoutes";
import {BrowserRouter as Router } from "react-router-dom";

function App() {
  
  return (
    <AuthProvider>
      <Router >
      <AppRoutes/>

      </Router>
    </AuthProvider>
  );
}

export default App;
