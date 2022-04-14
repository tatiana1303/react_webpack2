import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer } from './chatlist/reducer';
import { messagesReducer } from './messages/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Chat } from './chatlist/types';
import { MessagesState } from './messages/types';
import { blogsReducer, BlogsState } from './blogs/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
  messages: MessagesState;
  blogs: BlogsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['profile', 'blogs'],
};

const rootReducer = combineReducers({
  blogs: blogsReducer,
  messages: messagesReducer,
  profile: profileReducer,
  chatlist: chatListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
