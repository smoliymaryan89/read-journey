import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "@hooks/useRedux";
import { refreshUser } from "@store/auth/authOperations";

import Layout from "@layouts/Layout";
import RecommendedPage from "@pages/RecommendedPage";
import LibraryPage from "@pages/LibraryPage";
import ReadingPage from "@pages/ReadingPage";
import LoginPage from "@pages/LoginPage";
import RegistrationPage from "@pages/RegistrationPage";

import PrivateRoute from "@guards/PrivateRoute";
import PublicRoute from "@guards/PublicRoute";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <RecommendedPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <LibraryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute>
                <ReadingPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
      </Routes>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            backgroundColor: "#262626",
            fontFamily: "inherit",
            color: "#F9F9F9",
          },
        }}
      />
    </>
  );
};

export default App;
