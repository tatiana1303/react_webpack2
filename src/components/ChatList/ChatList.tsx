import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Chat } from '../../store/chatlist/types';
import { nanoid } from 'nanoid';
import { addChat, deleteChat } from '../../store/chatlist/actions';
import {
  createMessageChat,
  deleteMessageChat,
} from '../../store/messages/actions';
import Button from '@mui/material/Button';

export const ChatList: FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const chats = useSelector((state: { chatlist: Chat[] }) => state.chatlist);
  const handleAddChat = () => {
    const id = nanoid();
    dispatch(addChat({ id, name: value }));
    dispatch(createMessageChat(id));
    setValue('');
  };

  const handleDeleteChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessageChat(chatId));
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAddChat}>add chat</button>
        <List>
          {chats.map((chat) => (
            <ListItem disablePadding key={chat.id}>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar></Avatar>
                </ListItemIcon>
                <ListItemText>
                  <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItemText>
                <Button
                  variant="outlined"
                  onClick={() => handleDeleteChat(chat.id)}
                >
                  delete
                </Button>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
