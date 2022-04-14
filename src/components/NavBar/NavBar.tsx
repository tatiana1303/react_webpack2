import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const NavBar: FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Typography sx={{ minWidth: 100, fontSize: 20 }}>
        <Link to="/">Main</Link>
      </Typography>

      <Typography sx={{ minWidth: 100, fontSize: 20 }}>
        <Link to="/chats">Chats</Link>
      </Typography>

      <Typography sx={{ minWidth: 100, fontSize: 20 }}>
        <Link to="/profile">Profile</Link>
      </Typography>
      <Typography sx={{ minWidth: 100, fontSize: 20 }}>
        <Link to="/blogs">Blogs</Link>
      </Typography>
    </Box>
  );
};
export default withRouter(NavBar);
