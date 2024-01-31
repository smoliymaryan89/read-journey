import { AddFormData } from "@components/AddBookForm";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@service/axiosBaseQuery";
import {
  AddedBookResponse,
  BookInfoResponse,
  BookListResponse,
  OwnBookParams,
  RecommendBookParams,
  RemoveBookResponse,
  RemoveReadingParams,
  StartReadingParams,
} from "types/book";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: axiosBaseQuery,
  tagTypes: ["OwnBook", "InfoBook"],
  endpoints: (build) => ({
    getRecommendedBooks: build.query<BookListResponse, RecommendBookParams>({
      query: (params) => ({ url: "/books/recommend", method: "GET", params }),
    }),
    addBookToLibrary: build.mutation<AddedBookResponse, string>({
      query: (id) => ({ url: `/books/add/${id}`, method: "POST" }),
      invalidatesTags: ["OwnBook"],
    }),
    removeBookFromLibrary: build.mutation<RemoveBookResponse, string>({
      query: (id) => ({ url: `/books/remove/${id}`, method: "DELETE" }),
      invalidatesTags: ["OwnBook"],
    }),
    getOwnBooks: build.query<AddedBookResponse[], OwnBookParams>({
      query: ({ status }) => {
        return status !== ""
          ? { url: "/books/own", method: "GET", params: { status } }
          : { url: "/books/own", method: "GET" };
      },
      providesTags: ["OwnBook"],
    }),
    addNewBook: build.mutation<BookListResponse, AddFormData>({
      query: (data) => ({ url: "/books/add", method: "POST", data }),
      invalidatesTags: ["OwnBook"],
    }),
    getBookInfo: build.query<BookInfoResponse, string>({
      query: (id) => ({ url: `/books/${id}`, method: "GET" }),
      providesTags: ["InfoBook"],
    }),
    startReading: build.mutation<BookInfoResponse, StartReadingParams>({
      query: (data) => ({ url: "/books/reading/start", method: "POST", data }),
      invalidatesTags: ["InfoBook"],
    }),
    finishReading: build.mutation<BookInfoResponse, StartReadingParams>({
      query: (data) => ({ url: "/books/reading/finish", method: "POST", data }),
      invalidatesTags: ["InfoBook"],
    }),
    removeReading: build.mutation<BookInfoResponse, RemoveReadingParams>({
      query: (params) => ({
        url: "/books/reading",
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["InfoBook"],
    }),
  }),
});

export const {
  useGetRecommendedBooksQuery,
  useAddBookToLibraryMutation,
  useRemoveBookFromLibraryMutation,
  useGetOwnBooksQuery,
  useAddNewBookMutation,
  useGetBookInfoQuery,
  useStartReadingMutation,
  useFinishReadingMutation,
  useRemoveReadingMutation,
} = bookApi;
