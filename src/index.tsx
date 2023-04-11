import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router, store } from './app/providers';

import './app/styles/index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
