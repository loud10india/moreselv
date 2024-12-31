"use client";
import { portfolioItems } from "@/data/portfolio";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Home1 from "@/components/homes/home-1";

export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row mb-90 mb-sm-50'>
                <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                    <h2 className='section-caption-border'>Our Services</h2>
                    <h3 className='section-title-strong mb-40' style={{ color: "#EBBA78" }}>
                        A Personalized <span className='font-alt'>Approach</span> to <span className='font-alt'>Wellness</span>
                    </h3>
                    <p className='mb-0'>
                        At <b>Mor-Selv</b>, we offer a range of personalized services designed to nurture your body, mind, and soul. From relaxation
                        therapies to holistic wellness programs, each experience is tailored to your needs.
                    </p>
                </div>
            </div>
            <Home1 />
        </div>
    );
}
