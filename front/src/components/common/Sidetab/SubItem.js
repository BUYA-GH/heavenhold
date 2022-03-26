import React from 'react';
import styles from './SubItem.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const SubItem = ({item}) => {
    const location = useLocation();

    return(
        <Link to={item.path}>
            <div className={cx('subItem', (location.pathname === item.path) && 'open')}>
                <img className={cx('tabIcon', (location.pathname === item.path) && 'open')} src={item.iconsrc} alt="usergroup"/>
                <div className={cx('tabText', (location.pathname === item.path) && 'open')}>
                    {item.title}
                </div>
            </div>
        </Link>
    )
}

export default SubItem;