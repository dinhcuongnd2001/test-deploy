import { configureStore } from "@reduxjs/toolkit";
import filterSilce from "./filterSlice";
import manageSlice from "./manageSlice";
import userSlice from "./userSlice";
export default configureStore({
  reducer: {
    manage: manageSlice.reducer,
    filter: filterSilce.reducer,
    user: userSlice.reducer,
  },
});
