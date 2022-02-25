import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">HeavenHold</Link>
      </div>
      <Link to="/login/" className={cx('right')}>
        { }
        Login
      </Link>
    </div>
  </header>
);

export default Header;