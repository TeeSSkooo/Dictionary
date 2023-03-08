import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: 'hello',
  themeType: 'light',
};

const dictionarySlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    changeTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.themeType = action.payload;
      console.log(state.themeType);
    },
  },
});

export default dictionarySlice.reducer;

export const { setSearchQuery, changeTheme } = dictionarySlice.actions;
