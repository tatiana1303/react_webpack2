export const ADD_CHAT = 'CHATLIST::ADD_CHAT';
export const DELETE_CHAT = 'CHATLIST::DELETE_CHAT';
export const SET_CHAT = 'CHATLIST::SET_CHAT';
import { onValue } from 'firebase/database';
import { Dispatch } from 'redux';
import { chatsRef } from '../../services/firebase';
import { Chat } from './types';

export const addChat = (newChat: Chat) => ({
  type: ADD_CHAT,
  newChat,
});

export const deleteChat = (chatId: string) => ({
  type: DELETE_CHAT,
  chatId,
});

export const setChat = (payload: any) => ({
  type: SET_CHAT,
  payload,
});

export const initChatsFB = () => (dispatch: Dispatch) => {
  onValue(chatsRef, (chatSnap) => {
    const newChats: Chat[] = [];

    chatSnap.forEach((snapshot) => {
      newChats.push(snapshot.val());
    });

    dispatch(setChat(newChats));
  });
};
