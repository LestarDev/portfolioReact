import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type menuType = "Hamburger" | "Circle";

export type workBenchType = "Simply";

interface CounterState {
    menu: menuType,
    workBench: workBenchType,
    isOnPhone: boolean
}
  
  // Define the initial state using that type
  const initialState: CounterState = {
    menu: "Hamburger",
    workBench: "Simply",
    isOnPhone: false
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
      setIsOnPhone: (state, action: PayloadAction<boolean>) => {
        state.isOnPhone = action.payload
      },
    },
  })
  
  export const { setMenu, setWorkBench, setIsOnPhone } = currencySlice.actions
  
  export default currencySlice.reducer