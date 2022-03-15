import React from 'react';
import styles from './AuthStyle.scss';
import classNames from 'classnames/bind';

import { useNavigate } from 'react-router-dom';
import { register } from 'slices/AuthSlice'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

const cx = classNames.bind(styles);

const SignupWindow = () => {
    // useDispatch는 action 접근
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        gamecode: '',
        pw1: '',
        pw2: ''
    }

    const onRegister = async (values) => {
        const { email, gamecode,  pw1, pw2 } = values;
        dispatch(register({email, gamecode,  pw1, pw2}))
            .unwrap()
            .then(() => {
                alert("회원가입 완료 되었습니다! 다시 로그인해주세요!");
                navigate('/login');
            })
            .catch((e)=> {
                console.error(e);
                alert("회원가입 오류!");
            });
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onRegister
    })

    return(
        <div className={cx('Wrapper')}>
            <div className={cx('AuthComp')}>
                <div className={cx('Form')}>
                    <p className={cx('Title')}>
                        SignUp
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                        <input name="email" className={cx('textInput')} type="text" placeholder="이메일" onChange={formik.handleChange} value={formik.values.email} />
                        <input name="gamecode" className={cx('textInput')} type="text" placeholder="게임 코드(5자리)" onChange={formik.handleChange} value={formik.values.gamecode} />
                        <input name="pw1" className={cx('textInput')} type="password" placeholder="비밀번호" onChange={formik.handleChange} value={formik.values.pw1} />
                        <input name="pw2" className={cx('textInput')} type="password" placeholder="비밀번호 확인" onChange={formik.handleChange} value={formik.values.pw2} />
                        <button type="submit" className={cx('LoginBtn')}>
                            회원가입
                        </button>
                    </form>
                </div>
                <div className={cx('LoginInfo')}>
                    <p className={cx('InfoTitle')}>Welcome!</p>
                    <div className={cx('InfoText')}>
                        <p>회원가입 테스트</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupWindow;