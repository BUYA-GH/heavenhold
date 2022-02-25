import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login } from 'pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login/" element={<Login />}/>
            </Routes>
        </div>
    );
};

export default App;