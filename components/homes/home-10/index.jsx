"use client";

import Team from "./Team";
import Service from "./Service";

import Portfolio from "./Portfolio";
import Features from "./Features";
import Contact from "@/components/homes/home-7/Contact";

import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
// import Contact from "./Contact";
import Link from "next/link";
import { useEffect } from "react";
import { featuresListData } from "@/data/features";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
    // useEffect(() => {
    //     const addPaddingLeft = () => {
    //         document.getElementById("paddingLeft").style.paddingLeft = `${
    //             (window.innerWidth - document.getElementById("paddingLeftContainer").offsetWidth) / 2
    //         }px`;
    //     };
    //     const addPaddingRight = () => {
    //         document.getElementById("paddingRight").style.paddingRight = `${
    //             (window.innerWidth - document.getElementById("paddingRightContainer").offsetWidth) / 2
    //         }px`;
    //     };
    //     addPaddingLeft();
    //     addPaddingRight();
    //     window.addEventListener("resize", addPaddingLeft);
    //     window.addEventListener("resize", addPaddingRight);
    //     return () => {
    //         window.removeEventListener("resize", addPaddingLeft);
    //         window.removeEventListener("resize", addPaddingRight);
    //     };
    // }, []);

    return (
        <>
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <h2 className='section-caption-border'>About Us</h2>
                            <h3 className='section-title-strong mb-90 mb-sm-50' style={{ color: "#EBBA78" }}>
                                Hello, <span className='font-alt'>Gorgeous</span> Girls!
                            </h3>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <div className='wow linesAnimIn' data-splitting='lines'>
                                <p className='lead mt-0'>
                                    Welcome to <b>Mor-Selv</b>, your new sanctuary for wellness, located in the heart of Gurgaon at AVA Court, Malibu
                                    Towne. <b>Exclusively for women</b>, our boutique wellness center is thoughtfully designed to help you relax,
                                    rejuvenate, and rediscover yourself in a serene and supportive environment.
                                </p>
                                <p style={{ fontSize: "1.1em" }}>
                                    At <b>Mor-Selv</b>, we believe every woman deserves a space where she can escape the everyday, reconnect with
                                    herself, and embrace a journey of complete wellness. Whether it’s a calming treatment, a revitalizing ritual, or
                                    simply a moment of tranquility, we’re here to make it all about you.
                                </p>
                                <p style={{ fontSize: "1.1em" }}>Your wellness journey begins here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            {/* <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='team'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50'>
                            <div>
                                <h2 className='section-caption-border'>Our Team</h2>
                                <h3 className='section-title-strong mb-40'>
                                    Meet the<span className='font-alt'>team of</span> experts
                                </h3>
                                <p className='mb-40'>
                                    Aliquam erat volutpat. Proin luctus interdum orci, euismod ultrices placerat ultricies pretium sem euismod et. Nam
                                    consequat lectus nec nunc faucibus.
                                </p>
                                <div className='local-scroll'>
                                    {onePage ? (
                                        <>
                                            {" "}
                                            <a href='#contact' className='btn btn-mod btn-white btn-large btn-round btn-hover-anim'>
                                                <span>Join our Team</span>
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            {" "}
                                            <Link
                                                href={`/strong-contact${dark ? "-dark" : ""}`}
                                                className='btn btn-mod btn-white btn-large btn-round btn-hover-anim'
                                            >
                                                <span>Join our Team</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 offset-xl-1'>
                            <Team />
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} /> */}
            {/* <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='services'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <h2 className='section-caption-border'>Our Services</h2>
                            <h3 className='section-title-strong mb-90 mb-sm-50'>
                                We provide the
                                <span className='font-alt'>full stack of</span> creative services
                            </h3>
                        </div>
                    </div>

                    <Service />
                </div>
            </section> */}
            {/* <section className='pt-30'>
                <div id='paddingLeftContainer' className='container'></div>
                <div className='row g-0'>
                    <div className='col-lg-6'>
                        <div
                            id='paddingLeft'
                            className={`split-column-left ${
                                dark ? "bg-dark-2" : "bg-dark-1"
                            }  light-content position-relative d-flex align-items-center`}
                        >
                            <div className='position-absolute top-0 end-0 pt-2 pe-2 opacity-02'>
                                <Image width={192} height={222} src='/assets/images/demo-strong/decoration.svg' alt='' />
                            </div>

                            <div>
                                <h2 className='section-title mb-30'>
                                    Looking for
                                    <span className='font-alt'>exclusive creative</span> services?
                                </h2>
                                <p className='mb-50'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tellus rutrum, consectetur tellus et, posuere
                                    mauris. Sed sit amet lacinia nunc vestibulum non varius nunc.
                                </p>
                                <div className='local-scroll'>
                                    {onePage ? (
                                        <>
                                            <a href='#contact' className='btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim'>
                                                <span>Start a Project</span>
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href={`/strong-contact${dark ? "-dark" : ""}`}
                                                className='btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim'
                                            >
                                                <span>Start a Project</span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0'>
                        <div className='split-image-right' data-rellax-y='' data-rellax-speed='0.5' data-rellax-percentage='0.5'>
                            <Image width={1100} height={930} src='/assets/images/demo-strong/split-image-1.jpg' alt='Image Description' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={`page-section  scrollSpysection  overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`} id='portfolio'>
                <Portfolio />
            </section>
            {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} /> */}
            {/* <section className={`page-section overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`}>
                <Features />
            </section> */}
            <section className='pt-30'>
                <div id='paddingRightContainer' className='container' />
                <div className='row g-0'>
                    <div className='col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0'>
                        <div
                            id='paddingRight'
                            className={`split-column-right ${
                                dark ? "bg-dark-2" : "bg-dark-1"
                            } light-content position-relative d-flex align-items-center`}
                            data-rellax-y=''
                            data-rellax-speed='0.5'
                            data-rellax-percentage='0.5'
                        >
                            {/* Decorative Dots */}
                            <div className='position-absolute top-0 start-0 pt-2 ps-2 opacity-02'>
                                <Image width={192} height={222} src='/assets/images/demo-strong/decoration.svg' alt='' />
                            </div>
                            {/* End Decorative Dots */}
                            <div>
                                <h2 className='section-title mb-30' style={{ color: "#FECD8C" }}>
                                    Prioritize Your <span className='font-alt'>Wellness, </span>Rejuvenate Your <span className='font-alt'>Soul</span>{" "}
                                    .
                                </h2>
                                <p className='mb-50'>
                                    In the hustle of everyday life, taking time for yourself isn’t a luxury—it’s a necessity. Spa services go beyond
                                    relaxation; they are essential for maintaining physical, mental, and emotional well-being.
                                </p>
                                {/* Features List */}
                                <div className='row mt-n20'>
                                    {/* Features List Item */}
                                    {featuresListData.map((item, index) => (
                                        <div key={index} className='col-sm-6 col-lg-12 col-xl-6 d-flex mt-20'>
                                            <div className='features-list-icon'>
                                                <i className='mi-check' />
                                            </div>
                                            <div className='features-list-text'>{item.text}</div>
                                        </div>
                                    ))}
                                    {/* End Features List Item */}
                                </div>
                                {/* End Features List */}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-stretch order-lg-first'>
                        <div className='split-image-left'>
                            <Image
                                width={1100}
                                height={930}
                                src='/assets/images/demo-strong/MorSelv-Women-Spa-Gurugram.jpg'
                                alt='Image Description'
                            />
                            {/* Circle Text */}
                            {/* <div className='position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block'>
                                <Image src='/assets/images/demo-strong/circle-text.svg' width={138} height={138} alt='Image Description' />
                            </div> */}
                            {/* End Circle Text */}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`page-section overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`}>
                <div className='container'>
                    <div className='row mb-90 mb-sm-50'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <h2 className='section-title-strong mb-40' style={{ color: "#EBBA78" }}>
                                <span className='font-alt'>Loved</span> by <span className='font-alt'>Women</span> Like You
                            </h2>
                            <p className='mb-0'>
                                At Mor-Selv, our goal is to create unforgettable wellness experiences that leave you feeling renewed and empowered.
                                Don’t just take our word for it—here’s what our guests have to say:
                            </p>
                        </div>
                    </div>
                    <Testimonials />
                </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            {/* <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='blog'>
                <Blog />
            </section> */}
            <section
                className='page-section bg-dark-1 light-content'
                style={{
                    backgroundImage: "url(/assets/images/full-width-images/spa-unsplash-2.jpg)",
                }}
            >
                <Newsletter />
            </section>
            {/* <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />
            </section> */}
            <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />
            </section>
        </>
    );
}
