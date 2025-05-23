import React from "react";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import useAuthStore from "./store/auth.store";

const App = () => {
  const {user} = useAuthStore()
  return (
    <>
      <Routes>
        <Route path="/" element={ user ? <HomePage/> : <AuthPage />} />
        <Route path="/home" element={ user ? <HomePage/> : <AuthPage />} />
      </Routes>

    </>
  );
};

export default App;
