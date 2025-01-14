import { footerLinks2, navigationLinks, socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer4() {
    return (
        <div className='container position-relative'>
            {/* Back to Top Link */}
            <div className='local-scroll position-relative z-index-1'>
                <a href='#top' className='link-to-top  position-absolute top-0 end-0 translate-middle-y'>
                    <i className='mi-arrow-up size-24' style={{ backgroundColor: "#EBBA78", padding: "12px", borderRadius: "50%" }} />
                    <span className='visually-hidden'>Scroll to top</span>
                </a>
            </div>
            {/* End Back to Top Link */}
            <div className='page-section'>
                <div className='row'>
                    <div className='col-lg-6 mb-md-60'>
                        <h1 className='section-title mb-60 mb-sm-40'>Ready to get started with Resonance Template?</h1>
                        <div className='local-scroll'>
                            <a
                                href='/book-appointment'
                                className='btn btn-mod btn-large btn-round '
                                style={{ backgroundColor: "#EBBA78", color: "black" }}
                            >
                                <span>Book an appointment</span>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-5 offset-lg-1 pt-10'>
                        <div className='row'>
                            <div className='col-md-6 mb-sm-40'>
                                <ul className='fw-menu-large clearlist local-scroll'>
                                    {navigationLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href}>{elm.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul className='fw-menu-large clearlist'>
                                    {footerLinks2.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href}>{elm.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Text */}
            <div className='row'>
                <div className='col-md-6 mb-sm-40'>
                    <br />© Mor-Selv {new Date().getFullYear()}.
                </div>
                {/* Social Links */}
                <div className='col-md-6 footer-2-social-links text-md-end mb-md-40' style={{ color: "#EBBA78" }}>
                    {socialMediaLinks.map((elm, i) => (
                        <React.Fragment key={i}>
                            <a href={elm.href} title='Facebook' rel='noopener nofollow' target='_blank' style={{ color: "#EBBA78" }}>
                                <span className='visually-hidden'>{elm.name}</span>
                                <i className={elm.iconClass} style={{ color: "#EBBA78" }} />
                            </a>{" "}
                        </React.Fragment>
                    ))}
                </div>
                {/* End Social Links */}
            </div>
            {/* End Footer Text */}
        </div>
    );
}
