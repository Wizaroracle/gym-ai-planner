import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, isLoading } = useAuth();
  const plan = true;

  // Redirect authenticated users to profile
  if (!user && !isLoading) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (plan) {
    return <Navigate to="/onboarding" replace />;
  }
  return <div></div>;
};

export default Profile;
