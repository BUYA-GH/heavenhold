import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Profile, Signup } from 'pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/myinfo/profile" element={<Profile />}/>
            </Routes>
        </div>
    );
};

export default App;