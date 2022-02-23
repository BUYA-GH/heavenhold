import React from 'react';
import styles from './UpperImage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const UpperImage = () => (
    <div className={cx('UpperImage')}>
        <img className={cx('image')} alt="title" src="img/title.jpg" />
    </div>
)

export default UpperImage;