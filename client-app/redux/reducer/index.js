import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}, // anda
  isLogged: false, // anda
  allUsers: [], //anda
  showedUsers: [], //anda
  theme: "light", //anda
  arrowDirection: "left", //anda
  arrowUpDown: "down", //anda
  arrowCourse: "down", //anda
  authToken: "", //anda
  refresh: false,
  showedProducts: [],
  allProducts: [],
  filteredProducts: [],
  itemToEdit: {},
  showedCategory: "",
  portada: "img/pruebataver.png",
};

export const appSlice = createSlice({
  name: "reducerAll",
  initialState,
  reducers: {
    themeSwitcher: (state, action) => {
      state.theme = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setValidateUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    setShowedUsers: (state, action) => {
      state.showedUsers = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = {};
      state.isLogged = false;
    },
    setArrowUpDown: (state, action) => {
      state.arrowUpDown = action.payload;
    },
    setArrowDirection: (state, action) => {
      state.arrowDirection = action.payload;
    },
    setArrowCourse: (state, action) => {
      state.arrowCourse = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setShowedProducts: (state, action) => {
      state.showedProducts = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setPortada: (state, action) => {
      state.portdada = action.payload;
    },
    setShowedCategory: (state, action) => {
      state.showedCategory = action.payload;
    },
    setItemToEdit: (state, action) => {
      state.itemToEdit = action.payload;
    },
  },
});

export const {
  themeSwitcher,
  setAllUsers,
  setValidateUser,
  setShowedUsers,
  updateUser,
  logout,
  setArrowUpDown,
  setArrowDirection,
  setArrowCourse,
  setAuthToken,
  setRefresh,
  setAllProducts,
  setShowedProducts,
  setPortada,
  setFilteredProducts,
  setShowedCategory,
  setIdToEdit,
  setItemToEdit,
} = appSlice.actions;

export default appSlice.reducer;
