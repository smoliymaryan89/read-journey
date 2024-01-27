import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, setAuthHeader } from "@service/axiosHeader";
import { instance } from "@service/axiosInstance";
import { handleAxiosError } from "@utils/helpers/handlers";

import {
  AuthResponse,
  AuthState,
  Error,
  LogOutResponse,
  UserLoginData,
  UserRegisterData,
} from "types/auth";

export const register = createAsyncThunk<
  AuthResponse,
  UserRegisterData,
  { rejectValue: Error }
>("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post<AuthResponse>(
      "/users/signup",
      credentials
    );

    if (data.token) {
      setAuthHeader(data.token);
    }

    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error as Error));
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  UserLoginData,
  { rejectValue: Error }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post<AuthResponse>(
      "/users/signin",
      credentials
    );

    if (data.token) {
      setAuthHeader(data.token);
    }

    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error as Error));
  }
});

export const logOut = createAsyncThunk<
  LogOutResponse,
  undefined,
  { rejectValue: Error }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.post<LogOutResponse>("/users/signout");
    clearAuthHeader();
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error as Error));
  }
});

export const refreshUser = createAsyncThunk<
  AuthResponse,
  undefined,
  { state: { auth: AuthState }; rejectValue: Error }
>("auth/refresh", async (_, { getState, rejectWithValue }) => {
  const persistedToken = getState().auth.token;

  if (persistedToken === null) {
    return rejectWithValue({ message: "Unable to fetch user" });
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await instance.get<AuthResponse>("/users/current");
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error as Error));
  }
});
