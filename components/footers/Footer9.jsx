import { socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer9() {
    return (
        <div className='container' style={{ color: "#FECD8C" }}>
            <div className='page-section'>
                <div className='row'>
                    {/* Copyright */}
                    {/* <div className='col-lg-3 text-center text-lg-start mb-md-50'> FAQs | Blog/Wellness Tips</div> */}
                    <div className='col-lg-3 text-center text-lg-end ' style={{ color: "#FECD8C" }}>
                        {/* <a href='/' className='fw-top-link' style={{ color: "#FECD8C" }}> */}
                        <span className=''>
                            {" "}
                            <a href='/' className='fw-top-link' style={{ color: "#FECD8C" }}>
                                <span className=''> FAQs</span>
                            </a>
                        </span>
                        {/* </a> */}
                        <a href='/' className='fw-top-link' style={{ color: "#FECD8C" }}>
                            <span className=''> | Blog/Wellness Tips</span>
                        </a>
                    </div>
                    {/* End Copyright */}
                    {/* Social Links */}
                    <div className='col-lg-6 footer-social-links text-center mb-md-40' style={{ color: "#FECD8C" }}>
                        {socialMediaLinks.map((elm, i) => (
                            <a key={i} href={elm.href} title='Facebook' rel='noopener nofollow' target='_blank' style={{ color: "#FECD8C" }}>
                                <span className='visually-hidden' style={{ color: "#FECD8C" }}>
                                    {elm.name}
                                </span>
                                <i className={elm.iconClass} style={{ color: "#FECD8C" }} />
                            </a>
                        ))}
                    </div>
                    {/* End Social Links */}
                    <div className='col-lg-3 text-center text-lg-end ' style={{ color: "#FECD8C" }}>
                        <a href='/book-appointment' className='fw-top-link' style={{ color: "#FECD8C" }}>
                            <span className=''>Contact us</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer Text */}
            <div className='footer-text text-center opacity-75 mt-n10 pb-50' style={{ color: "#FECD8C" }}>
                Copyright ©{new Date().getFullYear()}. <a href='#'>Terms &amp; Conditions</a> and <a href='#'>Privacy Policy</a>.
                <div className='small'>
                    Made with{" "}
                    <span className='' style={{ color: "red", fontSize: "20px" }}>
                        ❤
                    </span>{" "}
                    by{" "}
                    <a href='https://web2attract.com/' className='fw-top-link'>
                        WEB2ATTRACT
                    </a>
                </div>
            </div>
            {/* End Footer Text */}
        </div>
    );
}
