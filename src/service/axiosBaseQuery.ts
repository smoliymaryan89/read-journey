import { AxiosError, AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { instance } from "./axiosInstance";
import { setAuthHeader } from "./axiosHeader";
import { AuthState as State } from "types/auth";

interface AuthState {
  auth: State;
}

export const axiosBaseQuery: BaseQueryFn<{
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
}> = async ({ url, method, data, params }, { getState }) => {
  const token = (getState() as AuthState).auth.token;

  if (token) {
    setAuthHeader(token);
  }

  try {
    const result = await instance({
      url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
