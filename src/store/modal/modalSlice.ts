import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState } from "types/modal";

const initialState: ModalState = {
  isOpen: false,
  modalName: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, { payload }: PayloadAction<string>) => {
      state.isOpen = !state.isOpen;
      state.modalName = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;
