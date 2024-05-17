import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignupForm";

export default function AuthPage({ setUser, onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const handleLogin = (user) => {
    setUser(user); // Update the user state in App component
  };
  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} onLogin={handleLogin} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
};
