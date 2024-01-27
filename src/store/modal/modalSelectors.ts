import { ModalState } from "types/modal";

export const selectModal = (state: { modal: ModalState }) => state.modal;
