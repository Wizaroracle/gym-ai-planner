import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { UserButton } from "@neondatabase/neon-js/auth/react";
import { Button } from "./ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">WeGym</span>
        </Link>

        <nav>
          {user && (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  My Plan
                </Button>
              </Link>
              <UserButton className="bg-accent" />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
