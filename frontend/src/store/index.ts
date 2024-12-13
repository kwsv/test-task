import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer, { login, logout } from './reducers/user';

export const rootReducer = combineReducers({
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export * from './helpers';
export { login, logout };
