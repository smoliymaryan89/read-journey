import axios from "axios";
import { AuthResponse, AuthState, Error } from "types/auth";

export const handleFulfilled = (state: AuthState) => {
  state.isLoading = false;
  state.error = null;
};

export const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: AuthState,
  { payload }: { payload: Error }
) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleAxiosError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data.message || {
        message: "Something went wrong, please try again!",
      }
    );
  } else {
    return { message: "An error occurred" };
  }
};

export const handleUserData = (
  state: AuthState,
  { payload }: { payload: AuthResponse }
) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  state.token = payload.token;
  state.isLoggedIn = true;
};
