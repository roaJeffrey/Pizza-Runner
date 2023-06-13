import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

    const SignInForm = React.lazy(() => import("../pages/SignInForm"));
    const MainPage = React.lazy(() => import("../pages/MainPage"));

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/welcomepage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}