import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Account from "./pages/Account";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/:pathname" element={<Auth />} />
        <Route path="/account/:pathname" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
