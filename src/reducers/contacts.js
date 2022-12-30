import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedContact: {},
}

export const contactsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeContact: (state, payload) => {
      state.selectedContact = payload.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeContact } = contactsSlice.actions

export default contactsSlice.reducer