import { Provider } from 'react-redux';
import { Router } from './router';
import { store } from '../store';
import './styles/index.css';

export const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};
