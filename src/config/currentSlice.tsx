import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type menuType = "Hamburger" | "";

export type workBenchType = "Simply";

interface CounterState {
    menu: menuType,
    workBench: workBenchType,
}
  
  // Define the initial state using that type
  const initialState: CounterState = {
    menu: "Hamburger",
    workBench: "Simply",
  }
  
  export const currencySlice = createSlice({
    name: 'currency',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      setMenu: (state, action: PayloadAction<menuType>) => {
        state.menu = action.payload;
      },
      setWorkBench: (state, action: PayloadAction<workBenchType>) => {
        state.workBench = action.payload
      },
    },
  })
  
  export const { setMenu, setWorkBench } = currencySlice.actions
  
  export default currencySlice.reducer