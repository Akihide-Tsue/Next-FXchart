import { createSlice } from '@reduxjs/toolkit';

const getSVC = () => {
  //APIデータ:CSVデータ
  const url = 'https://docs.google.com/spreadsheets/d/1TP8egieQMDbOFAOo-s6hmP7n-OhiKq1QsKWnCeosQ3Q/edit#gid=0';
  const API_KEY = 'AIzaSyDlyJ3biGjglA8NFjvDYoZNsiV0FKr8CMc';
  const { rows, isFetching } = useGoogleSpreadsheet(url, API_KEY);
  console.log('rows', rows, isFetching)
}

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: 0,
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

export default historySlice.reducer;
