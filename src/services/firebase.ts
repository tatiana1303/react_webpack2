import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNqpWKNRs6P05KWe3LyZIZF2FfVI_KlqU',
  authDomain: 'react-webpack2.firebaseapp.com',
  projectId: 'react-webpack2',
  storageBucket: 'react-webpack2.appspot.com',
  messagingSenderId: '398782452482',
  appId: '1:398782452482:web:e280be40f137145e3d681b',
};
import { getDatabase, ref } from 'firebase/database';

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatListById = (id: string) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId: string) =>
  ref(db, `messages/${chatId}`);

export const getMessagesListRefId = (chatId: string, msgId: string) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
