"use client";
import { portfolioItems } from "@/data/portfolio";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Home1 from "@/components/homes/home-1";
import { Alata } from "next/font/google";
const alata = Alata({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row mb-90 mb-sm-50'>
                <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center'>
                    {/* <h2 className='section-caption-border'>Our Services</h2> */}
                    <div className={alata.className}>
                        <h3 className='section-title-strong mb-40' style={{ color: "#EBBA78", fontWeight: "500" }}>
                            A Personalized Approach to Wellness
                        </h3>
                    </div>
                    <p className='mb-0'>
                        At Mor-selv, every detail is crafted with care. Our skilled therapists offer a range of professional massage therapies, from
                        deeply relaxing Swedish massages to invigorating deep tissue treatments. Each experience is tailored to your individual needs
                        and preferences, ensuring you receive the most beneficial and enjoyable treatment possible.
                    </p>
                </div>
                <Home1 />
            </div>
        </div>
    );
}
