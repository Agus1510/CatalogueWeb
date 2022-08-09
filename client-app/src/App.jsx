import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/navBar/navbar.jsx";
import Home from "./components/home/home";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminPage from "./components/admin/adminPage";
import Login from "./components/login/login";
import PrivateRoute from "./components/privateRoute/privateRoute";
import PrivateAdminRoute from "./components/privateRoute/privateAdminRoute";
import Mujer from "./components/pages/mujer/mujer.jsx";
import Hombre from "./components/pages/hombre/hombre";
import EditItem from "./components/pages/editItem/editItem";
import Footer from "./components/footer/footer";

function App() {
  const isLogged = useSelector((state) => state.reducerCompleto.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="contentWrap">
        <Routes>
          <Route
            path="/login"
            element={
              <div className="page">
                <Login />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="page">
                <Home />
              </div>
            }
          />
          <Route
            path="/mujer"
            element={
              <div className="page">
                <Mujer />
              </div>
            }
          />
          <Route
            path="/hombre"
            element={
              <div className="page">
                <Hombre />
              </div>
            }
          />
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route
              path="/admin"
              element={
                <div className="page">
                  <AdminPage />
                </div>
              }
            />
            <Route
              path="/admin/edit"
              element={
                <div className="page">
                  <EditItem />
                </div>
              }
            />
          </Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
