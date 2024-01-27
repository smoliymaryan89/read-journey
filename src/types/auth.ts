export interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface UserLoginData extends Omit<UserRegisterData, "name"> {}

export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null | unknown;
}

export interface AuthResponse extends User {
  token: string;
}

export interface Error {
  message: string;
}

export interface LogOutResponse {
  message: string;
}
