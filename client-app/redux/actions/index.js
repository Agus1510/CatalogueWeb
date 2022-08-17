import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setAllUsers,
  setValidateUser,
  setShowedUsers,
  updateUser,
  setAuthToken,
  setAllProducts,
  setFilteredProducts,
  setItemToEdit,
} from "../reducer/index";

// asynchronous actions

export const register = createAsyncThunk(
  "/auth/register",
  async (userData, thunkAPI) => {
    try {
      const metaData = await axios.post("/tienda/auth/register", userData);
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const createProduct = createAsyncThunk(
  "/productsprivate",
  async (obj, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };
    try {
      const metaData = await axios.post(
        "/tienda/productsprivate",
        obj.productData,
        config
      );
      thunkAPI.dispatch(setAllProducts());
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const login = createAsyncThunk(
  "/auth/tienda/login",
  async (post, thunkAPI) => {
    try {
      const metaData = await axios.post("/tienda/auth/login", post);
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      thunkAPI.dispatch(setAuthToken(metaData.data.token));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const findUserByName = createAsyncThunk(
  "/usersprivate/username",
  async (obj, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };
      let metaData = await axios.get(
        `/tienda/usersprivate/username?username=${obj.input}`,
        config
      );
      thunkAPI.dispatch(setShowedUsers(metaData.data));
    } catch (err) {
      alert("Ups! Something went wrong... FINDUSERBYNAME");
      return err.response.data;
    }
  }
);

export const editItem = createAsyncThunk(
  "/productsprivate/:id",
  async (obj, thunkAPI) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };
    console.log(obj);
    try {
      const metaData = await axios.put(
        `/tienda/productsprivate/${obj.id}/edit`,
        { nombre: obj.nombre, price: obj.price },
        config
      );
      console.log(metaData.data);
      thunkAPI.dispatch(getAllProducts());
      return metaData.data;
    } catch (err) {
      alert("Ups! Something went wrong...");
      new Error(err);
    }
  }
);

export const editUsername = createAsyncThunk(
  "/:id/profile",
  async (obj, thunkAPI) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };

    try {
      const metaData = await axios.put(
        `/tienda/usersprivate/${obj.id}/profile`,
        { username: obj.username },
        config
      );
      thunkAPI.dispatch(updateUser(metaData.data));
      return metaData.data;
    } catch (err) {
      alert("Ups! Something went wrong...EDITUSERNAME");
      new Error(err);
    }
  }
);

export const editPassword = createAsyncThunk(
  "/auth/forgotPassword",
  async (email) => {
    try {
      const metaData = await axios.put(`/tienda/auth/forgotPassword`, {
        email: email,
      });
      return metaData.data;
    } catch (err) {
      alert("Ups! Something went wrong...EDITPASSWORD");
      console.log("err", err);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "/tienda/usersprivate",
  async (obj, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };
      const metaData = await axios(
        `/tienda/usersprivate/?limit=8&page=${obj.page}`,
        config
      );
      thunkAPI.dispatch(setAllUsers(metaData.data.users.docs));
      thunkAPI.dispatch(setShowedUsers(metaData.data.users.docs));
      thunkAPI.dispatch(setPaginateUsers(metaData.data.users));
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "/tienda/product",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios(`/tienda/product`);
      thunkAPI.dispatch(setAllProducts(metaData.data));
      thunkAPI.dispatch(setFilteredProducts(metaData.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const getProductsByGender = createAsyncThunk(
  "/tienda/product/:gender",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios.get(
        `/tienda/product/${obj.gender}/${obj.age}`
      );
      thunkAPI.dispatch(setFilteredProducts(metaData.data.product));
      return metaData.data.product;
    } catch (err) {
      thunkAPI.dispatch(setFilteredProducts([]));
      return err.response.data;
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "/:gender/:category/:age",
  async (obj, thunkAPI) => {
    try {
      const metaData = await axios.get(
        `/tienda/product/${obj.gender}/${obj.category}/${obj.age}`
      );
      thunkAPI.dispatch(setFilteredProducts(metaData.data.product));
      return metaData.data.product;
    } catch (err) {
      thunkAPI.dispatch(setFilteredProducts([]));
      return err.response.data;
    }
  }
);

export const getProductsById = createAsyncThunk(
  "/productsprivate/:id",
  async (obj, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };
    try {
      const metaData = await axios.get(
        `/tienda/productsprivate/${obj.id}`,
        config
      );
      thunkAPI.dispatch(setItemToEdit(metaData.data));
      return metaData.data.product;
    } catch (err) {
      thunkAPI.dispatch(setItemToEdit([]));
      return err.response.data;
    }
  }
);

export const auhtGoogle = createAsyncThunk(
  "/auth/googlelogin",
  async (tokenId, thunkAPI) => {
    try {
      const metaData = await axios.post("/tienda/auth/googlelogin", {
        tokenId,
      });
      thunkAPI.dispatch(setValidateUser(metaData.data.user));
      thunkAPI.dispatch(setAuthToken(metaData.data.token));
      return metaData.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/usersprivate/deleteuser",
  async (obj) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
        data: {
          id: obj.userId,
        },
      };

      const metaData = await axios.delete(
        `/tienda/usersprivate/deleteUser`,
        config
      );
      console.log(metaData.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const isAdminConverter = createAsyncThunk(
  "/usersprivate/isAdmin",
  async (obj) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };

      const metaData = await axios.put(
        `/tienda/usersprivate/isAdmin`,
        { id: obj.userId, change: obj.boolean },
        config
      );
      console.log(metaData);
      return metaData.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const isPremiumConverter = createAsyncThunk(
  "/usersprivate/isPremium",
  async (obj, thunkAPI) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${obj.token}`,
        },
      };
      const metaData = await axios.put(
        `/tienda/usersprivate/isPremium`,
        { hola: "" },
        config
      );
      return metaData.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
);

export const Banear = createAsyncThunk("/usersprivate/ban", async (obj) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };

    const metaData = await axios.post(
      `/tienda/usersprivate/ban`,
      { id: obj.userId, fecha: obj.date },
      config
    );

    return { successful: true, data: metaData };
  } catch (err) {
    return { successful: false, error: err };
  }
});

export const editImage = createAsyncThunk(
  "/editImage/profile",
  async (obj, thunkAPI) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${obj.token}`,
      },
    };

    try {
      const metaData = await axios.put(
        "/tienda/usersprivate/editImage/profile",
        { url: obj.url },
        config
      );
      console.log(obj.url);
      thunkAPI.dispatch(updateUser(metaData.data.updateUser));
      console.log("hola");
      return metaData.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
);

export const getProductsByName = createAsyncThunk(
  "/cursos/:name",
  async (name, thunkAPI) => {
    try {
      const metaData = await axios.get(`/tienda/product/${name}`);
      thunkAPI.dispatch(setFilteredProducts(metaData.data.product));
      return metaData.data;
    } catch (err) {
      thunkAPI.dispatch(setFilteredProducts([]));
      return err.response.data;
    }
  }
);
