import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import { Alata } from "next/font/google";

const alata = Alata({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function Hero1() {
    return (
        <div className='container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120'>
            <div className='home-content text-center '>
                <div className={alata.className} style={{ color: "#EBBA78", fontWeight: "400" }}>
                    <h1 className='hs-title-7 mb-40'>
                        <span className='wow charsAnimIn-1' data-splitting='chars'>
                            <div>
                                <AnimatedText text='Women’s' />
                            </div>
                            <span className='font-alt'>
                                <AnimatedText text='Wellness' />
                            </span>
                            <AnimatedText text='Center' />
                        </span>
                    </h1>
                </div>

                <div className='row'>
                    <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                        <hr className='white mt-0 mb-30 wow scalexIn' data-wow-delay='0.85s' />
                        <div className='row wow fadeInUpShort' data-wow-delay='1.35s'>
                            <div className='col-sm-6 col-md-7 text-center text-sm-start mb-xs-30'>
                                <p className='mb-0'>Experience luxury and personalized wellness in a haven designed exclusively for women</p>
                            </div>
                            <div className='col-sm-6 col-md-5 text-center text-sm-end local-scroll'>
                                <a href='/services' className='btn btn-mod btn-w btn-large btn-round btn-hover-anim'>
                                    <span>Our Services</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='local-scroll scroll-down-wrap-4 wow fadeInUp' data-wow-offset={0}>
                <div className='full-wrapper text-end'>
                    <a href='#about' className='scroll-down-4'>
                        <i className='icon-arrow-down' />
                    </a>
                </div>
            </div>
        </div>
    );
}
