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
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='section-descr-extralarge mb-60 mb-md-40 wow linesAnimIn' data-splitting='lines'>
                                {/* <h2 className='section-title-inline-1'>Membership and Pricing</h2> */}
                                At Mor-Selv, we believe that true wellness is a journey, not a destination. That’s why we’ve designed our memberships
                                to offer you unparalleled access to our rejuvenating services, exclusive perks, and personalized care.
                            </div>
                            <p className='mb-80 mb-md-40'>
                                Whether you're looking to unwind with regular treatments or indulge in unlimited relaxation, our memberships are
                                tailored to fit your lifestyle and enhance your well-being. Join us today and experience the ultimate in self-care,
                                with added benefits like complimentary drinks, service discounts, and more. It's time to prioritize yourself—because
                                you deserve it!.
                            </p>
                            {/* Accordion */}
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
