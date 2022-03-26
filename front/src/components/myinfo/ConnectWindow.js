import React from 'react';
import styles from './ConnectWindow.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ConnectWindow = () => {

    return(
        <div className={cx('Wrapper')}>
            <div className={cx('Window')}>
                Check! Check! Check! Check! Check! Check!
            </div>
        </div>
    )

};

export default ConnectWindow;