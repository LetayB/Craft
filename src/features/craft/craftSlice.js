import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: 0,
  quality: 0,
  solidity : 60,
  maxProgress : 100,
  maxQuality : 100,
  maxSolidity : 60
};

function decrementSoli(state){
  state.solidity = state.solidity - 10;
}

export const craftSlice = createSlice({
  name: 'craft',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    decrementSolidity: (state) => {
      decrementSoli(state);
  },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementProgressByAmount: (state, action) => {
      decrementSoli(state);
      state.progress = state.progress + action.payload;
    },
  },
});

export const { incrementProgressByAmount, decrementSolidity } = craftSlice.actions;

export const selectProgress = (state) => state.craft.progress;
export const selectCraft = (state) => state.craft;


export const craft = craftSlice.reducer;
