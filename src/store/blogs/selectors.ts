import { StoreState } from '..';

export function selectBlogs(state: StoreState) {
  return state.blogs.blogs;
}

export function selectError(state: StoreState) {
  return state.blogs.error;
}

export function selectLoading(state: StoreState) {
  return state.blogs.loading;
}
