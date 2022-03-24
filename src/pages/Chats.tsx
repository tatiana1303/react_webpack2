import React, { FC, useState, useEffect, useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { ChatList } from '../components/ChatList/ChatList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Chat {
  id: string;
  autor: string;
}

export interface Messages {
  [key: string]: Message[];
}

const defaultMessages: Messages = {
  chat1: [{ author: 'I am User1', text: ' ', id: '1' }],
  chat2: [{ author: 'I am User2', text: ' ', id: '1' }],
  chat3: [{ author: 'I am User3', text: ' ', id: '1' }],
};

const chats = [
  { autor: 'User 1', id: '1' },
  { autor: 'User 2', id: '2' },
  { autor: 'User 3', id: '3' },
];

export const Chats: FC = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const { chatId } = useParams<{ chatId?: string }>();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const sendMessage = useCallback(
    ({ text, author }: { text: string; author: string }) => {
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [`chat${chatId}`]: [
            ...prevMessages[`chat${chatId}`],
            {
              id: nanoid(),
              author,
              text,
            },
          ],
        };
      });
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[`chat${chatId}`]?.length &&
      messages[`chat${chatId}`][messages[`chat${chatId}`].length - 1].author ===
        'User'
    ) {
      const timer = setTimeout(
        () =>
          sendMessage({
            author: 'BOT',
            text: 'Hello, I am Bot',
          }),
        1500
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messages, chatId, sendMessage]);

  if (!messages[`chat${chatId}`]) {
    return <Redirect to="/" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <MessageList messages={messages[`chat${chatId}`]} />
          </Item>
          <Item>
            <Form addMessage={sendMessage} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ChatList chats={chats} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
