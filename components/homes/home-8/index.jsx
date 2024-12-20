import React from "react";
import Image from "next/image";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Marquee from "./Marquee";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Link from "next/link";
import Accordion from "./Accordion";

export default function Home8({ onePage = false, dark = false, eadge2 = false }) {
    return (
        <>
            <section className={`page-section  scrollSpysection ${dark ? "bg-light-2 " : "bg-light-1"}  dark-content`} id='about'>
                {/* {light || eadge2 ? <></> : <div className='edge-top-figure-1' />} */}
                {/* Env Round Edge */}
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='section-descr-extralarge mb-100 mb-md-60 wow linesAnimIn' data-splitting='lines'>
                                <h2 className='section-title-inline-1'>About Studio</h2>
                                Jane Garsia Studio is an independent full-service studio creating beautiful digital experiences and products. We are
                                an award winning group specializing in branding, design and engineering. Our mission is to make work meaningful.
                            </div>
                            {/* Accordion */}
                            <Accordion />
                            {/* End Accordion */}
                            <div className='local-scroll text-center'>
                                {onePage ? (
                                    <>
                                        <a
                                            href='#established'
                                            className='btn btn-mod  btn-ellipse'
                                            data-btn-animate='ellipse'
                                            style={{ backgroundColor: "#EBBA78" }}
                                        >
                                            <span className='btn-ellipse-inner' style={{ color: "#fff" }}>
                                                <span className='btn-ellipse-unhovered' style={{ color: "#fff" }}>
                                                    Learn more <span className='visually-hidden'>about us</span>
                                                </span>
                                                <span className='btn-ellipse-hovered' aria-hidden='true' style={{ color: "#fff" }}>
                                                    Learn more <span className='visually-hidden'>about us</span>
                                                </span>
                                            </span>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href='#'
                                            className='btn btn-mod btn-w btn-ellipse '
                                            data-btn-animate='ellipse'
                                            style={{ backgroundColor: "##EBBA78" }}
                                        >
                                            <span className='btn-ellipse-inner' style={{ color: "#fff", backgroundColor: "#EBBA78" }}>
                                                <span className='btn-ellipse-unhovered' style={{ color: "#fff" }}>
                                                    Learn more <span className='visually-hidden'>about us</span>
                                                </span>
                                                <span className='btn-ellipse-hovered' aria-hidden='true' style={{ color: "#fff" }}>
                                                    Learn more <span className='visually-hidden'>about us</span>
                                                </span>
                                            </span>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
