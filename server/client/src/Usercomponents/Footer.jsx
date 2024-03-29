import React from 'react'
import '../footer.css'
import logo from '../images/logo_smm1.png'
// import logo from '../images/chirtmas_logo.png'
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'

function Footer() {
    return (
        <div>
           
            <div className="footer d-flex flex-column  p-4">
                <div className="leftFooter d-flex flex-row justify-content-around">
                    <div className="logoFooter d-flex flex-row mr-4">
                        <img className="bg-" src={logo} alt="logo" height="90px" width="90px" />
                        <select className="ml-4 my-auto">
                            <option value="english">English</option>
                        </select>
                    </div>
                    <div className="quickLinks d-flex flex-row">
                        <div className="text-white d-flex flex-column">
                            <h5 className="contactinfo"><u>Contact Information</u></h5>
                            <span>Email:  keerthan@smmdigg.in</span>
                            <span className="">Whatsapp: +91 6361027573</span>
                            <span>Working Hour: Mon-Sat 9AM-11PM</span>
                        </div>
                    </div>
                </div>
                <div className="rightFooter container d-flex mr-auto text-white">
                    <div className="leftQuicklinks text-white  d-flex mr-4 flex-column">
                        <Link to="/v1.1/dashboard" className='text-white'>Home</Link>
                        <Link to="/v1.1/addfund" className='text-white'>Add fund</Link>
                        <Link to="/v1.1/privacy-policy" className='text-white'>Privacy-Policy</Link>
                    </div>
                    <div className="rightQuickas text-white h6 d-flex flex-column">
                        <Link to="/v1.1/terms-and-conditions" className='text-white'>Terms & conditions</Link>
                        <Link to="/v1.1/disclaimer" className='text-white'>Disclaimer</Link>
                    </div>
                </div>
                <hr />
                <div className="d-flex footer_copy flex-column justify-content-center">
                    <h6 className="text-white text-center  pt-1">Copyright © 2021 - smmdigg.in - </h6>
                    <span className="text-white text-center pb-1">Made with ❤️ - Coded/Developed/Maintained by Keerthan <a className='text-white' href="https://www.instagram.com/programed_heart/" target="_blank"><i class="fas fa-external-link-alt"></i></a> </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
