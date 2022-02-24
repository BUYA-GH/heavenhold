import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
// import UpperImage from 'components/home/UpperImage';

import { UpperImage, LowerDescription } from 'components/home'

const Home = () => {
    return (
        <PageTemplate>
            <UpperImage/>
            <LowerDescription/>
        </PageTemplate>
    );
};

export default Home;