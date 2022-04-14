import React, { FC } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { ChatList } from '../components/ChatList/ChatList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const Chats: FC<any> = ({ msgs }) => {
  const { chatId } = useParams<{ chatId?: string }>();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  if (chatId && !msgs[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <MessageList messages={chatId ? msgs[chatId] : []} />
            </Item>
            <Item>
              <Form />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <ChatList />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

//
