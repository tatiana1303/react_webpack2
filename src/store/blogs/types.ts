import { ERROR, GET_BLOGS, LOADING } from './actions';

export type BlogsActions = GetBlogs | FetchLoading | FetchError;

export interface GetBlogs {
  type: typeof GET_BLOGS;
  blogs: [];
}

export interface FetchLoading {
  type: typeof LOADING;
  loading: boolean;
}

export interface FetchError {
  type: typeof ERROR;
  error: boolean;
}
