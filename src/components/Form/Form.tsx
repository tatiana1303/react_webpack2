import React, { useState, FC } from 'react';
import { Input, Button } from '@mui/material';

interface Message {
  text: string;
  author: string;
}

interface FormProps {
  addMessage: (message: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');
  const textInput = React.useRef<HTMLInputElement | null>();

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      text,
      author: 'User',
    });
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
