import React, { FC } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

interface ChatListProp {
  chats: Chat[];
}

export const ChatList: FC<ChatListProp> = ({ chats }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {chats.map((chat) => (
            <ListItem disablePadding key={chat.id}>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar></Avatar>
                </ListItemIcon>
                <ListItemText>
                  <Link to={`/chats/${chat.id}`}>{chat.autor}</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
