import React, { useEffect, useState } from 'react';
import styles from './UpperImage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const UpperImage = () => {
    const [position, setPosition] = useState(0);

    const onScroll = () => {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={cx('UpperImage')} style={{
            backgroundPositionY: position / -2,}}
        >
            Hi Hello
        </div>
    )
    
}

export default UpperImage;