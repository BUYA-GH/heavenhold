import React from 'react';
import styles from './ConnectWindow.module.scss';
import classNames from 'classnames/bind';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ConnectWindow = ({ id }) => {

    const initialValues = {
        guildname: "",
        guildtype: 0
    }

    const onConnect = async (values) => {
       const {guildname, guildtype} = values;
       
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onConnect
    })

    return(
        <div className={cx('Wrapper')}>
            <div className={cx('Window')}>
                { (id === "1") &&
                    <div className={cx('Form')}>
                        <h2> 길드 마스터(시트 관리자) 인가요? </h2>
                        <Link to='/myinfo/connect/2'>
                            예!
                        </Link>
                        <Link to='/myinfo/connect/3'>
                            아니요!
                        </Link>
                    </div>
                }
                {
                    (id === "2") &&
                    <div className={cx('Form')}>
                        <h2> 등록할 길드 정보를 입력해주세요! </h2>
                        <form onSubmit={formik.handleSubmit}>
                            <input name="guildname" type="text" placeholder="길드 이름" onChange={formik.handleChange} value={formik.values.guildname} />
                            <select name="guildtype" onChange={formik.handleChange} value={formik.values.guildtype} >
                                <option value="0">DC</option>
                                <option value="1">Cafe</option>
                                <option value="2">Others</option>
                            </select>
                        </form>
                    </div>
                }
                {
                    (id === "3") &&
                    <div className={cx('Form')}>
                        <h2> 연결할 유저를 선택해주세요! </h2>
                    </div>
                }
            </div>
        </div>
    )

};

export default ConnectWindow;