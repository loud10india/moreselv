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
import { Alata } from "next/font/google";
const alata = Alata({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

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
                            {/* <h2 className='section-caption-border'>About Us</h2> */}
                            <div className={alata.className}>
                                <h3 className='section-title-strong mb-90 mb-sm-50' style={{ color: "#EBBA78", fontWeight: "500" }}>
                                    Hey Gorgeous!
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <div className='wow linesAnimIn' data-splitting='lines'>
                                <p className='lead mt-0'>
                                    At Mor-selv, we believe that true well-being is a journey of self-discovery, a harmonious balance of mind, body,
                                    and spirit. We understand the unique challenges women face in today's world – juggling demanding careers,
                                    nurturing families, and navigating the complexities of modern life.
                                </p>
                                <p style={{ fontSize: "1.1em" }}>
                                    Mor-selv is a sanctuary exclusively for women, a haven of tranquility where you can escape the pressures of daily
                                    life and rediscover your inner peace.
                                </p>
                                {/* <p style={{ fontSize: "1.1em" }}>Your wellness journey begins here.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />

            <section className={`page-section  scrollSpysection  overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`} id='portfolio'>
                <Portfolio />
                <hr />
            </section>
            {/* <hr /> */}
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
                                <div className={alata.className}>
                                    <h2 className='section-title mb-30' style={{ color: "#FECD8C", fontWeight: "400" }}>
                                        Prioritize Your <span className='font-alt'>Wellness, </span>Rejuvenate Your{" "}
                                        <span className='font-alt'>Soul</span> .
                                    </h2>
                                </div>
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
                            <Image width={1100} height={930} src='/assets/images/demo-strong/Prioritize Your Wellness.jpg' alt='Image Description' />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`page-section overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`}>
                <div className='container'>
                    <div className='row mb-90 mb-sm-50'>
                        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                            <div className={alata.className}>
                                <h2 className='section-title-strong mb-40' style={{ color: "#EBBA78", fontWeight: "500" }}>
                                    Loved by Women Like You
                                </h2>
                            </div>
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

            <section
                className='page-section bg-dark-1 light-content'
                style={{
                    backgroundImage: "url(/assets/images/full-width-images/mor-selv.jpg)",
                }}
            >
                <Newsletter />
            </section>
        </>
    );
}
