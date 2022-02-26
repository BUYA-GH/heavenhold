import React from 'react';
import styles from './LoginWindow.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginWindow = () => {
    
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('LoginComp')}>
                <div className={cx('LoginForm')}>
                    <p className={cx('Title')}>
                        Login
                    </p>
                    <input name="email" className={cx('textInput')} type="text" placeholder="이메일"/>
                    <input name="password" className={cx('textInput')} type="password" placeholder="비밀번호"/>
                    <div className={cx('LoginMid')}>
                        <label className={cx('autoLogin')}>
                            {" "}
                            <input type="checkbox" id="hint" /> 로그인 유지하기
                        </label>
                        <div className={cx('autoLogin')}>아이디/비밀번호 찾기</div>
                    </div>
                    <div className={cx('LoginMid2')}>회원가입</div>
                    <button className={cx('LoginBtn')}>
                        로그인
                    </button>
                </div>
                <div className={cx('LoginInfo')}>
                    <p className={cx('InfoTitle')}>Welcome!</p>
                    <div className={cx('InfoText')}>
                        <p>서비스 사용을 위해서는 로그인이 필수입니다.</p>
                        <p>일 안해!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWindow;