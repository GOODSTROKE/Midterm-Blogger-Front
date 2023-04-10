import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

const filterSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    makeSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export default filterSlice.reducer
export const { makeSearch } = filterSlice.actions
