import React, { FC, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogsThunk } from '../store/blogs/actions';
import {
  selectBlogs,
  selectError,
  selectLoading,
} from '../store/blogs/selectors';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Blogs: FC = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getFetchBlogs = async () => {
    dispatch(getBlogsThunk());
  };

  useEffect(() => {
    getFetchBlogs();
  }, []);

  return (
    <>
      <h2>Blogs</h2>
      {error && <p>Ошибка запроса</p>}
      {loading && <CircularProgress color="secondary" />}

      <ul>
        {blogs.map((blog: { id: string; title: string; summary: string }) => (
          <li className="Blogs-text" key={blog.id}>
            <Card sx={{ minWidth: 275, width: 1200 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {blog.title}
                </Typography>
                <li>
                  <Typography variant="body2">{blog.summary}</Typography>
                </li>{' '}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <button onClick={getFetchBlogs}>reload</button>
    </>
  );
};
