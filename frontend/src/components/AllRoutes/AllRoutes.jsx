import { Routes, Route } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Analytics from "../../pages/Analytics/Analytics";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
