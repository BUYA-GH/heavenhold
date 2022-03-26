import React from 'react';
import styles from './Sidetab.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { SidetabItemData } from './SidetabItemData'
import SidetabItem from './SidetabItem';

const cx = classNames.bind(styles);

const Sidetab = () => {
    const { isMenuOpen } = useSelector((state) => state.tab);

    return(
        <div className={cx('Sidetab', isMenuOpen && 'open')}>
            <div className={cx('tabItemLine')}>
                { SidetabItemData.map((item, index) => {
                    return <SidetabItem item={item} key={index} />;
                })}
            </div>
        </div>
    );
}

export default Sidetab;