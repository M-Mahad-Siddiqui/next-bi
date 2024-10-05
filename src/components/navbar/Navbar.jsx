import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useStoreContext } from '../../context/StoreContext';
import './Navbar.css';


function Navbar({ setShowLogin }) {

    const [menu, setMenu] = useState('home');
    const {getTotalCartAmount} = useStoreContext();



    return (
        <div  className = 'navbar'>
        <Link to        = '/'>
        <img  src       = {assets.logo} alt = "logo" className = 'logo' />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''} >Home</Link>
                <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''} >menu</a>
                <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''} >mobile-app</a>
                <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact-us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search" />
                <div className='navbar-search-icon'>
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className = {getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>
                    Sign in
                </button>
            </div>

        </div>
    )
}

export default Navbar
