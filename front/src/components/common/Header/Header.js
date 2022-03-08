import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toggleMenu } from 'slices/TabSlice'

const cx = classNames.bind(styles);

const Header = () => {
  const dispatch = useDispatch();
  const onMenuToggle = () => {
    dispatch(toggleMenu());
  }

  return (
    <header className={cx('Header')}>
      <button className={cx('icon-tab')} type="button" onClick={onMenuToggle} />
      <div className={cx('breadcomb')}>
        HeavenHold
      </div>
      <Link to="/login/" className={cx('icon-user')} />
    </header>
  )
  
}

export default Header;