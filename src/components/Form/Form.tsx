import React, { useState, FC } from 'react';
import { Input, Button } from '@mui/material';
import { useParams } from 'react-router';
import { AUTHORS } from '../../constants';
import { getMessagesListRefId } from '../../services/firebase';
import { nanoid } from 'nanoid';
import { set } from 'firebase/database';

export const Form: FC = () => {
  const { chatId } = useParams<{ chatId?: string }>();

  const [text, setText] = useState('');

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      const id = nanoid();
      set(getMessagesListRefId(chatId, id), {
        id,
        text,
        author: AUTHORS.user,
      });
    }
    setText('');
  };

  return (
    <form onSubmit={handleText}>
      <Input
        className="Input-btn"
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <Button type="submit" variant="outlined">
        отправить
      </Button>
    </form>
  );
};
