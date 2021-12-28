import { configureStore } from "@reduxjs/toolkit";
import questionReducers from "../reducers/questions";

export const store = configureStore({
  reducer: {
    question: questionReducers,
  },
});
