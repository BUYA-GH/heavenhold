import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { useParams } from "react-router-dom"
import { ConnectWindow } from 'components/myinfo'

const Connect = () => {
    const { id } = useParams();

    return (
        <PageTemplate>
            <ConnectWindow id={id} />
        </PageTemplate>        
    );
};

export default Connect;