import type { osVariant } from "@/data/types/osVariant";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ITestState {
  questionCounter: number;
  answersCounter: {
    [K in osVariant]: number;
  };
  completed: false | osVariant[];
}

const initialState: ITestState = {
  questionCounter: 0,
  answersCounter: {
    whonix: 0,
    tails: 0,
    qubes: 0,
  },
  completed: false,
};

export const testSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<osVariant>) => {
      if (state.questionCounter < 5) {
        state.questionCounter++;
        state.answersCounter[action.payload]++;
      }
      if (state.questionCounter === 5) {
        const max = Math.max(...Object.values(state.answersCounter));
        state.completed = Object.entries(state.answersCounter)
          .filter((answer) => answer[1] === max)
          .map((answer) => answer[0] as osVariant);
      }
    },
    restore: (state) => {
      state.questionCounter = 0;
      state.answersCounter = initialState.answersCounter;
      state.completed = false;
    },
  },
});

export const { addAnswer, restore } = testSlice.actions;
export default testSlice.reducer;
