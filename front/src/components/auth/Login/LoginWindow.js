import React from 'react';
import styles from './LoginWindow.scss';
import classNames from 'classnames/bind';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { login } from 'slices/AuthSlice'

const cx = classNames.bind(styles);

const LoginWindow = (props) => {
    // useSelector는 state 접근
    const { isLoggedIn, isLoginFail } = useSelector((state) => state.auth); 
    // useDispatch는 action 접근
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: ''
    }

    const onLogin = async (values) => {
        const { email, password } = values;
        dispatch(login({email, password}))
            .unwrap()
            .then(() => {
                navigate('/main/');
            })
            .catch((e)=> console.error(e));
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onLogin
    })

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('LoginComp')}>
                <div className={cx('LoginForm')}>
                    <p className={cx('Title')}>
                        Login
                    </p>
                    <p className={cx('warningMesseage')}>
                        { isLoginFail && "아이디 또는 비밀번호가 잘못됬습니다." }
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                        <input name="email" className={cx('textInput')} type="text" placeholder="이메일" onChange={formik.handleChange} value={formik.values.email} />
                        <input name="password" className={cx('textInput')} type="password" placeholder="비밀번호" onChange={formik.handleChange} value={formik.values.password} />
                        <div className={cx('LoginMid')}>
                            <label className={cx('autoLogin')}>
                                {" "}
                                <input type="checkbox" id="hint" /> 로그인 유지하기
                            </label>
                            <div className={cx('autoLogin')}>아이디/비밀번호 찾기</div>
                        </div>
                        <div className={cx('LoginMid2')}>회원가입</div>
                        <button type="submit" className={cx('LoginBtn')}>
                            로그인
                        </button>
                    </form>
                </div>
                <div className={cx('LoginInfo')}>
                    <p className={cx('InfoTitle')}>Welcome!</p>
                    <div className={cx('InfoText')}>
                        <p>서비스 사용을 위해서는 로그인이 필수입니다.</p>
                        <p>길마들 화이팅!</p>
                        <p>일 안해!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginWindow;