import React from 'react';
import styles from './Sidetab.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Sidetab = () => {
    const { isMenuOpen } = useSelector((state) => state.tab);

    return(
        <div className={cx('Sidetab', isMenuOpen && 'open')}>
            <div className={cx('tabItemLine')}>
                <div className={cx('tabItem')}>
                    <div className={cx('arrowDownIcon')}/>
                    <img className={cx('tabIcon')} src='/img/Users_Group.png' alt="usergroup"/>
                    <div className={cx('tabText')}>
                        길드
                    </div>
                </div>
                <div className={cx('tabItem')}>
                    <div className={cx('arrowDownIcon')}/>
                    <img className={cx('tabIcon')} src='/img/Users_Group.png' alt="usergroup"/>
                    <div className={cx('tabText')}>
                        콜로세움
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidetab;