import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Main, Signup } from 'pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/main" element={<Main />}/>
            </Routes>
        </div>
    );
};

export default App;