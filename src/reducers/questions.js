import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  questions: [],
};

export const QuestionSlice = createSlice({
  name: "question",
  initialState: INITIAL_STATE,
  reducers: {
    SET_QUESTIONS: (state, action) => {
      state.questions = action.payload;
    },
    UPDATE_QUESTION_BY_ID: (state, action) => {
      let temp = [...state.questions];
      let cOption = temp.findIndex((item) => item.id === action.payload.id);
      temp[cOption].chosenOption = action.payload.option;
      state.questions = temp;
    },
  },
});

export const { SET_QUESTIONS, UPDATE_QUESTION_BY_ID } = QuestionSlice.actions;

export default QuestionSlice.reducer;
