import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Main } from 'pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login/" element={<Login />}/>
                <Route path="/Main" element={<Main />}/>
            </Routes>
        </div>
    );
};

export default App;