// cac hoat dong loc cua user
import { createSlice } from "@reduxjs/toolkit";

const filterSilce = createSlice({
  name: "filter",
  initialState: {
    category: "All",
    hotPizza: 100,
    name: "",
    typeCost: "Default",
  },
  reducers: {
    byCategory: (state, action) => {
      state.category = action.payload;
    },
    byName: (state, action) => {
      state.name = action.payload;
    },
    byTypeCost: (state, action) => {
      state.typeCost = action.payload;
    },
  },
});

export default filterSilce;
