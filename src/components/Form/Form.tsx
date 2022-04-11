import React, { useState, FC } from 'react';
import { Input, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessageWithThunk } from '../../store/messages/actions';
import { useParams } from 'react-router';
import { AUTHORS } from '../../constants';

export const Form: FC = () => {
  const { chatId } = useParams<{ chatId?: string }>();
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const textInput = React.useRef<HTMLInputElement | null>();

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithThunk({
          chatId,
          text,
          author: AUTHORS.user,
        })
      );
    }
    setText('');
  };

  return (
    <form onSubmit={handleText}>
      <Input
        className="Input-btn"
        type="text"
        ref={textInput}
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <Button type="submit" variant="outlined">
        отправить
      </Button>
    </form>
  );
};
