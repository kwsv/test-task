import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from '@app';

const root = document.getElementById('root') as HTMLElement;

if (!root) {
    throw Error('root not found');
}

const react = createRoot(root);

react.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
