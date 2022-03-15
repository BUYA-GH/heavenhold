import React from 'react';
import styles from './SubItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SubItem = ({item}) => {

    return(
        <div className={cx('subItem')}>
            <img className={cx('tabIcon')} src={item.iconsrc} alt="usergroup"/>
            <div className={cx('tabText')}>
                {item.title}
            </div>
        </div>
    )
}

export default SubItem;