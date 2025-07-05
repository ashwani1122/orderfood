import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div style={{display:"flex" , flexDirection:"column", alignItems : "center"}}>
                <h2>Food Order</h2>
                <p style={{width:"50%" , alignItems:"center" , justifyContent:"center", textAlign:"center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloremque.</p>
                    </div>
              
                <div className="social">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-middle" style={{display:"flex" , flexDirection:"column", alignItems : "center" , gap:"1rem" , }}>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
                </div>
                <div id="contact-app" className="footer-content-right" style={{display:"flex" , flexDirection:"column", alignItems : "center" , gap:"1rem"}}>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>contact@fooddelivery.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p> © 2022 Food Delivery. All rights reserved.</p>
        </div>
    )
}

export default Footer
