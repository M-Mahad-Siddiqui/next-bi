import { assets } from '../../assets/assets'
import './footer.css'
function Footer() {
    return (
        <div className='footer' id='footer'>

            <div className='footer-container'>
                <div className='footer-left'>
                    <img src={assets.logo} alt="" />
                    <p>Best food waiting for your belly. Fresh food delivered to your doorstep just as you like it. We promise you: free delivery and free returns. The food is fresh, made with quality ingredients, and ready to satisfy your cravings! Enjoy a variety of cuisines that cater to every taste, from hearty meals to light snacks. Experience the convenience of having delicious, home-cooked flavors without the hassle. Indulge yourself today and elevate your dining experience right at home!</p>
                    <div className='footer-socials-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                        <li>Terms and conditions</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Address: 123 Main Street, Anytown, USA</li>
                        <li>Phone  : +1234567890</li>
                        <li>Email  : 3sO8A@example.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p>copyright &copy; 2024 - All right reserved. made by M.Mahad Siddiqui</p>
            </div>
        </div>
    )
}

export default Footer
