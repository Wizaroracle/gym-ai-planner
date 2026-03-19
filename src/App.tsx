import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NavBar from "./components/layout/NavBar";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { authClient } from "./lib/auth";

function App() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth/:pathname" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </NeonAuthUIProvider>
  );
}

export default App;
