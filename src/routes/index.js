import { Navigate, useRoutes } from "react-router-dom";
import LandingPage from "../pages/landing/landing.page";
import Page404 from "../pages/404.page";
import DashboardLayout from "./layouts/dashboard.layout";
import { PrivateRoute, PublicRoute } from "./components/routes.component";
import DashboardPage from "../pages/dashboard/dashboard.page";
import AuthLayout from "./layouts/auth.layout";
import LoginPage from "../pages/auth/login.page";
import RegisterPage from "../pages/auth/register.page";
import ProfilePage from "../pages/dashboard/profile.page";
import { getStore } from "../stores";
import { observer } from "mobx-react";

function Router() {
  const {
    sessionStore: { isLoggedIn },
  } = getStore();
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/404", element: <Page404 /> },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Navigate to="/dashboard/app" replace />,
        },
        { path: "app", element: <DashboardPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "tasks", element: <ProfilePage /> },
        { path: "clients", element: <ProfilePage /> },
        { path: "contacts", element: <ProfilePage /> },
        { path: "employees", element: <ProfilePage /> },
        { path: "moderators", element: <ProfilePage /> },
        { path: "histories", element: <ProfilePage /> }
      ],
    },
    {
      path: "/auth",
      element: (
        <PublicRoute isLoggedIn={isLoggedIn}>
          <AuthLayout />
        </PublicRoute>
      ),
      children: [
        { path: "/auth", element: <Navigate to="/auth/login" replace /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default observer(Router);
