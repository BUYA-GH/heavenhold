import React from 'react';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';

import Header from 'components/common/Header';
import Sidetab from 'components/common/Sidetab'

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    
    return (
        <div className={cx('page-template')}>
            <Header />
            <main>
                <Sidetab />
                {children}
            </main>
        </div>
    )
}

export default PageTemplate;