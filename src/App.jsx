import "./App.css";
import PublicNav from "./components/PublicNavbar";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { ProtectedRoutes } from "./routes/ProtecteRoutes";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuth } from "./context/AuthContext";
function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div className='App'>
      {!isLoggedIn && <PublicNav />}
      <Routes>
        <Route path='/' element={<PublicRoutes />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/workspace' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
