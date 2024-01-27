import { AuthState } from "types/auth";

export const selectToken = (state: { auth: AuthState }) => state.auth.token;

export const selectUser = (state: { auth: AuthState }) => state.auth.user;

export const selectIsLoading = (state: { auth: AuthState }) =>
  state.auth.isLoading;

export const selectIsRefreshing = (state: { auth: AuthState }) =>
  state.auth.isRefreshing;
