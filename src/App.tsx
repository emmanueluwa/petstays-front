import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddPlace from "./pages/AddPlace";
import { useAppContext } from "./contexts/AppContext";
import MyPlaces from "./pages/MyPlaces";
import EditPlace from "./pages/EditPlace";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
import Renting from "./pages/Renting";

const AppRoutes = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/renting"
        element={
          <Layout>
            <Renting />
          </Layout>
        }
      />
      <Route
        path="/detail/:placeId"
        element={
          <Layout>
            <Detail />
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
            path="/place/:placeId/booking"
            element={
              <Layout>
                <Booking />
              </Layout>
            }
          ></Route>
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
          />
          <Route
            path="/my-bookings"
            element={
              <Layout>
                <MyBookings />
              </Layout>
            }
          />
          <Route
            path="/edit-place/:placeId"
            element={
              <Layout>
                <EditPlace />
              </Layout>
            }
          />
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
