import React, { useState } from 'react';
import styles from './SidetabItem.scss';
import classNames from 'classnames/bind';
import SubItem from './SubItem';

const cx = classNames.bind(styles);

const SidetabItem = ({item}) => {
    const [isItemOpen, setItemOpen] = useState(false);

    const openItem = () => setItemOpen(!isItemOpen);

    return (
        <>
            <div className={cx('tabItem')} onClick={openItem}>
                <div className={cx('arrowDownIcon')} />
                <img className={cx('tabIcon')} src={item.iconsrc} alt="usergroup" />
                <div className={cx('tabText')}>
                    {item.title}
                </div>
            </div>
            { isItemOpen && 
                <div className={cx('subItemField')}>
                    <div className={cx('subItemLine')}>
                        {item.subItem.map((item, index) => {
                            return <SubItem key={index} item={item}/>
                        })}
                    </div>
                </div>
            }
        </>
        
        
    )
}

export default SidetabItem;