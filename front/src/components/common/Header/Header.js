import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'slices/TabSlice'
import { logout } from 'slices/AuthSlice'

const cx = classNames.bind(styles);

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();
  const onMenuToggle = () => {
    dispatch(toggleMenu());
  }

  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(e => console.error(e));
  }

  return (
    <header className={cx('Header')}>
      <div className={cx('Header-Content')}>
        {
          isLoggedIn && (<button className={cx('icon-tab')} type="button" onClick={onMenuToggle} />)
        }
        <div className={cx('breadcomb')}>
          HeavenHold
        </div>
        {
          isLoggedIn 
          ? (<div className={cx('loginout')} onClick={onLogout}>Logout</div>) 
          : (<Link to="/login" className={cx('loginout')} >Login</Link>)
        }
        
      </div>
    </header>
  )
  
}

export default Header;