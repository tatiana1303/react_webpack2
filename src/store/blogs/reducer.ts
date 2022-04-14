import { BlogsActions } from './types';
import { Reducer } from 'redux';
import { ERROR, LOADING, GET_BLOGS } from './actions';

export interface BlogsState {
  loading: boolean;
  error: boolean;
  blogs: [];
}

const initialStateBlogs: BlogsState = {
  loading: false,
  error: false,
  blogs: [],
};

export const blogsReducer: Reducer<BlogsState, BlogsActions> = (
  state = initialStateBlogs,
  action
) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case GET_BLOGS: {
      return {
        ...state,
        blogs: action.blogs,
      };
    }
    default: {
      return state;
    }
  }
};
