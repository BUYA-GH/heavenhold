import React from 'react';
import styles from './LoginWindow.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginWindow = () => {
    
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('LoginComp')}>
                <div className={cx('LoginForm')}>
                    Login
                </div>
                <div className={cx('LoginInfo')}/>
            </div>
        </div>
    );
}

export default LoginWindow;