import { Dispatch } from 'redux';
import { apiUrl } from '../../constants';
export const LOADING = 'BLOGS::LOADING';
export const ERROR = 'BLOGS::ERROR';
export const GET_BLOGS = 'BLOGS::GET_BLOGS';

export const getBlogs = (blogs: []) => ({
  type: GET_BLOGS,
  blogs,
});

export const fetchLoading = (loading: boolean) => ({
  type: LOADING,
  loading,
});

export const fetchError = (error: boolean) => ({
  type: ERROR,
  error,
});

export const getBlogsThunk = () => async (dispatch: Dispatch) => {
  dispatch(fetchLoading(true));
  dispatch(getBlogs([]));
  dispatch(fetchError(false));

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error('response not ok');
    }
    const blogs = await res.json();
    dispatch(getBlogs(blogs));
  } catch (err) {
    dispatch(fetchError(true));
  } finally {
    dispatch(fetchLoading(false));
  }
};
