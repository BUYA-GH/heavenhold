import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { store } from 'store';
import { Provider } from 'react-redux';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;