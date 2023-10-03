import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value += 1
    },
    register: (state) => {
      state.value -= 1
    },
    update_user: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { login,register, update_user } = userSlice.actions

export default userSlice.reducer