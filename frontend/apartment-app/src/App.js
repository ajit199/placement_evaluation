import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { MainRoutes } from "./routes/MainRoutes";
function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <MainRoutes />
    </div>
  );
}

export default App;
