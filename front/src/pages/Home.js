import React, { useEffect } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { useNavigate } from 'react-router-dom';
// import UpperImage from 'components/home/UpperImage';

import { UpperImage, LowerDescription } from 'components/home'

const Home = () => {
    const token = localStorage.getItem('user');
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(token);
        if(token) {
            navigate('/main');
        }
    });

    return (
        <PageTemplate>
            <UpperImage/>
            <LowerDescription/>
        </PageTemplate>
    );
};

export default Home;