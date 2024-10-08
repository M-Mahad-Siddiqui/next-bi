// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets';
// import { useFireContext } from '../../context/FireContext';
// import { useStoreContext } from '../../context/StoreContext';
// import './Navbar.css';


// function Navbar({ setShowLogin }) {

//     const { isLogin, SignOut }                     = useFireContext();
//     const [menu, setMenu]                          = useState('home');
//     const { getTotalCartAmount, getTotalQuantity } = useStoreContext();
    
//     const handleSignOut = () => {
//         isLogin === 'Logout'? SignOut() : '';
//     }




//     return (
//         <div  className = 'navbar'>
//         <Link to        = '/'>
//         <img  src       = {assets.logo} alt = "logo" className = 'logo' />
//             </Link>
//             <ul   className = 'navbar-menu'>
//             <Link to        = '/' onClick             = {() => setMenu('home')} className       = {menu === 'home' ? 'active' : ''} >Home</Link>
//             <a    href      = '#explore-menu' onClick = {() => setMenu('menu')} className       = {menu === 'menu' ? 'active' : ''} >menu</a>
//             <a    href      = '#app-download' onClick = {() => setMenu('mobile-app')} className = {menu === 'mobile-app' ? 'active' : ''} >mobile-app</a>
//             <a    href      = '#footer' onClick       = {() => setMenu('contact-us')} className = {menu === 'contact-us' ? 'active' : ''}>contact-us</a>
//             </ul>
//             <div  className = 'navbar-right'>
//             <img  src       = {assets.search_icon} alt = "search" />
//             <div  className = 'navbar-search-icon'>
//             <Link to        = '/cart'>
//             <img  src       = {assets.basket_icon} alt = "" />
//             </Link>
//             <div className = {getTotalCartAmount() === 0 ? '' : 'dot'}>{!getTotalQuantity() == 0?getTotalQuantity():''}</div>
//             </div>
//                 <button onClick = {() => { setShowLogin(true); handleSignOut()  }}>
//                     {isLogin() ? 'Logout' : 'Sign up'}
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Navbar

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useFireContext } from '../../context/FireContext';
import { useStoreContext } from '../../context/StoreContext';
import './Navbar.css';


function Navbar({ setShowLogin }) {
    const { isLogin, SignOut } = useFireContext();
    const [menu, setMenu] = useState('home');
    const { getTotalCartAmount, getTotalQuantity } = useStoreContext();

    // Handles sign-out if user is logged in
    const handleSignOut = () => {
        if (isLogin()) {
            SignOut();
        }
    };

    return (
        <div  className = 'navbar'>
        <Link to        = '/'>
        {/* <img  src       = {assets.logo} alt = 'logo' className = 'logo' /> */}
        <img src = {assets.logo2} alt = 'logo' className = 'logo' />
            </Link>
            <ul className='navbar-menu'>
                <Link
                    to='/'
                    onClick={() => setMenu('home')}
                    className={menu === 'home' ? 'active' : ''}
                >
                    Home
                </Link>
                <a
                    href='#explore-menu'
                    onClick={() => setMenu('menu')}
                    className={menu === 'menu' ? 'active' : ''}
                >
                    Menu
                </a>
                <a
                    href='#app-download'
                    onClick={() => setMenu('mobile-app')}
                    className={menu === 'mobile-app' ? 'active' : ''}
                >
                    Mobile App
                </a>
                <a
                    href='#footer'
                    onClick={() => setMenu('contact-us')}
                    className={menu === 'contact-us' ? 'active' : ''}
                >
                    Contact Us
                </a>
            </ul>
            <div  className = 'navbar-right'>
            <img  src       = {assets.search_icon} alt = 'search' />
            <div  className = 'navbar-search-icon'>
            <Link to        = '/cart'>
            <img  src       = {assets.basket_icon} alt = '' />
                    </Link>
                    {/* Cart Badge */}
                    {getTotalQuantity() > 0 && <div className='dot'>{getTotalQuantity()}</div>}
                </div>
                {/* Toggle button based on login status */}
                <button
                    onClick={() => {
                        if (isLogin()) {
                            handleSignOut();
                        } else {
                            setShowLogin(true);
                        }
                    }}
                >
                    {isLogin() ? 'Logout' : 'Sign Up'}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
