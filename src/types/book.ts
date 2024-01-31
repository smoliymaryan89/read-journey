export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend?: boolean;
}

export interface BookListResponse {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface RecommendBookParams {
  page?: number;
  limit?: number;
  author?: string;
  title?: string;
}

export interface BookProgress {
  _id: string;
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: "inactive" | "active";
}

export interface AddedBookResponse extends Omit<Book, "recommend"> {
  results: {
    status: string;
    owner: string;
    progress: BookProgress[];
  };
}

export interface OwnBookParams {
  status: string;
}

export interface RemoveBookResponse {
  message: string;
  id: string;
}

export interface TimeLeftToRead {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface BookInfoResponse extends Omit<Book, "recommend"> {
  progress: BookProgress[];
  status: string;
  owner: string;
  timeLeftToRead: TimeLeftToRead;
}

export interface StartReadingParams {
  id: string;
  page: number;
}

export interface RemoveReadingParams {
  bookId: string;
  readingId: string;
}
