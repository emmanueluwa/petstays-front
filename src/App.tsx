import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddPlace from "./pages/AddPlace";
import { useAppContext } from "./contexts/AppContext";
import MyPlaces from "./pages/MyPlaces";
import EditPlace from "./pages/EditPlace";

const AppRoutes = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />

      {isLoggedIn && (
        <>
          <Route
            path="/add-place"
            element={
              <Layout>
                <AddPlace />
              </Layout>
            }
          ></Route>
          <Route
            path="/my-places"
            element={
              <Layout>
                <MyPlaces />
              </Layout>
            }
          ></Route>
          <Route
            path="/edit-place/:placeId"
            element={
              <Layout>
                <EditPlace />
              </Layout>
            }
          ></Route>
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
