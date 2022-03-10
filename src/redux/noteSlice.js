import {createSlice } from "@reduxjs/toolkit"

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    items: JSON.parse(localStorage.getItem('notes')) || [],
    colors: ["#F06292", "#BA68C8", "#FFD54F", "#4FC3F9", "#AED581"],
    selectedColor: localStorage.getItem("color") || "#F06292",
    filterText: "",
  },
  
  reducers: {
    addNewNote: (state,action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    selectColor: (state,action) => {
      state.selectedColor = action.payload;
    },
    filterNotes: (state,action) => {
      state.filterText = action.payload;
    },
    deleteNote: (state,action) => {
      const id = action.payload;
      const filtered = state.items.filter(item => item.id !== id);
      state.items = filtered;
      localStorage.setItem("notes", JSON.stringify(filtered));
    }
  },

});

export const { addNewNote, selectColor, filterNotes, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

