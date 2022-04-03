import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Profile, Connect } from "pages"

const MyInfo = () => {
    return (
        <Routes>
            <Route path="profile" element={<Profile />}/>
            <Route path="connect/*">
                <Route path=":id" element={<Connect />}/>
            </Route>
        </Routes>

    );
};

export default MyInfo;