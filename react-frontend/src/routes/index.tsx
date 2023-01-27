import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext, { AuthProvider } from "../context/AuthContext";
import Dashboard from "../Pages/Dashboard";
import { SignIn } from "../Pages/Signin/SignIn";
import { Navigate, useLocation } from "react-router-dom";
import Layout from "../Components/Layout";
import { SignUp } from "../Pages/Signin/Signup";
import { Questionaire } from "../Pages/Questionnaire/Questionnaire";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
const Routing: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout>
                <Dashboard />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Layout>
                <Dashboard />
              </Layout>
            </RequireAuth>
          }
        />
        <Route
          path="/questionaire"
          element={
            <RequireAuth>
              <Layout>
                <Questionaire />
              </Layout>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  </Router>
);

export default Routing;
