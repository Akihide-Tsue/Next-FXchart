import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: 0,
    list:[]
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    fetchSVC: state => {
      state.value -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = historySlice.actions;
export const { increment, } = historySlice.actions;


// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectCount = state => state.history.value;
export const selectList = state => state.history.list;

export default historySlice.reducer;
