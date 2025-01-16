import { footerLinks2, navigationLinks, socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer4() {
    return (
        <div className='container position-relative' style={{ backgroundColor: "black", color: "#EBBA78" }}>
            {/* Back to Top Link */}
            <div className='local-scroll position-relative z-index-1'>
                <a href='#top' className='link-to-top  position-absolute top-0 end-0 translate-middle-y'>
                    <i className='mi-arrow-up size-24' style={{ backgroundColor: "#EBBA78", padding: "12px", borderRadius: "50%" }} />
                    <span className='visually-hidden'>Scroll to top</span>
                </a>
            </div>
            {/* End Back to Top Link */}
            <div className='page-section' style={{ paddingBottom: "30px", paddingTop: "110px" }}>
                <div className='row'>
                    <div className='col-lg-8 mb-md-60'>
                        <h3 className=' ' style={{ fontSize: "36px" }}>
                            BOOK YOUR WELLNESS JOURNEY
                        </h3>
                        <p>
                            Ready to relax, rejuvenate, and rediscover yourself? <b>Call or WhatsApp</b> us to book your appointment or learn more
                            about our massage therapy sessions.
                        </p>
                        <p className='mb-60 mb-sm-40' style={{ fontSize: "30px" }}>
                            +91-9818257300
                        </p>
                    </div>
                    {/* <div className='col-lg-4 offset-lg-1 pt-10'> */}
                    <div className='col-lg-3 offset-lg-1 pt-10'>
                        <div className='row'>
                            <div className='col-md-6 mb-sm-40'>
                                <ul className='fw-menu-large clearlist local-scroll' style={{ color: "#EBBA78" }}>
                                    {navigationLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href} style={{ color: "#EBBA78", fontSize: "20px" }}>
                                                {elm.text}
                                            </a>
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
                <div className='col-md-6 footer-2-social-links text-md-end mb-md-40 pb-70' style={{ color: "#EBBA78" }}>
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
