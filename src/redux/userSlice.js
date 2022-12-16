// reduce cac hanh dong cau user (them, xoa, checkout)

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    quantity: 0,
    cart: [],
    userName: "",
    listUser: [
      {
        userName: "dinhcuongnd2001@gmail.com",
        password: "1234",
        quantity: 0,
        cart: [],
      },
    ],
  },
  reducers: {
    createSession: (state, action) => {
      state.quantity = action.payload.quantity;
      state.cart = action.payload.cart;
      state.userName = action.payload.userName;
    },
    addQuantity: (state, action) => {
      const index = state.listUser.findIndex(
        (e) => e.userName === state.userName
      );
      state.listUser[index].quantity += 1;
      state.quantity = state.listUser[index].quantity;
      const indexProduct = state.listUser[index].cart.findIndex(
        (e) => e.id === action.payload.id
      );
      if (indexProduct < 0) {
        let newProduct = action.payload;
        state.listUser[index].cart.push({ ...newProduct, count: 1 });
      } else {
        state.listUser[index].cart[indexProduct].count += 1;
      }
      state.cart = state.listUser[index].cart;
    },

    subQuantity: (state, action) => {
      const index = state.listUser.findIndex(
        (e) => e.userName === state.userName
      );
      state.listUser[index].quantity -= 1;
      state.quantity = state.listUser[index].quantity;
      const newCart = state.listUser[index].cart
        .map((item) => {
          if (item.id === action.payload.id) {
            item.count -= 1;
            return item;
          }
          return item;
        })
        .filter((item) => item.count > 0);
      state.listUser[index].cart = newCart;
      state.cart = state.listUser[index].cart;
    },

    removeProduct: (state, action) => {
      const index = state.listUser.findIndex(
        (e) => e.userName === state.userName
      );
      const newCart = state.listUser[index].cart.filter(
        (item) => item.id != action.payload.id
      );
      state.listUser[index].cart = newCart;
      state.listUser[index].quantity -= action.payload.count;
      state.cart = newCart;
      state.quantity -= action.payload.count;
    },

    checkout: (state) => {
      const index = state.listUser.findIndex(
        (e) => e.userName === state.userName
      );
      state.listUser[index].cart = [];
      state.listUser[index].quantity = 0;
      state.cart = [];
      state.quantity = 0;
    },
    createNewMember: (state, action) => {
      state.listUser.push({ ...action.payload, cart: [], quantity: 0 });
    },
    resetSession: (state) => {
      state.quantity = 0;
      state.cart = [];
      state.userName = "";
    },
  },
});

export default userSlice;
