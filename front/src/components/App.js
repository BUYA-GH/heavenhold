import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, MyInfo, Signup } from 'pages';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="signup" element={<Signup />}/>
                <Route path="myinfo/*" element={<MyInfo />}/>
                    {/* <Route path="profile" element={<Profile />}/>
                    <Route path="connect" element={<Connect />}/>
                </Route> */}
            </Routes>
        </div>
    );
};

export default App;