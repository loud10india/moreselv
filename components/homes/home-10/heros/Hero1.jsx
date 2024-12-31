import AnimatedText from "@/components/common/AnimatedText";
import React from "react";

export default function Hero1() {
    return (
        <div className='container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120'>
            {/* Home Section Content */}
            <div className='home-content text-center'>
                <h1
                    className='mb-4 text-center'
                    style={{
                        color: "#FECD8C",
                        fontSize: "calc(4.6rem + 3.10vw)", // Responsive font size
                        lineHeight: "1.2",
                    }}
                >
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

                <div className='row'>
                    <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                        <hr className='white mt-0 mb-30 wow scalexIn' data-wow-delay='0.85s' />
                        <div className='row wow fadeInUpShort' data-wow-delay='1.35s'>
                            <div className='col-sm-6 col-md-7 text-center text-sm-start mb-xs-30'>
                                <p className='mb-0'>Boutique wellness center designed exclusively for women, where self-care meets serenity.</p>
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
            {/* End Home Section Content */}
            {/* Scroll Down */}
            <div className='local-scroll scroll-down-wrap-4 wow fadeInUp' data-wow-offset={0}>
                <div className='full-wrapper text-end'>
                    <a href='#about' className='scroll-down-4'>
                        <i className='icon-arrow-down' />
                    </a>
                </div>
            </div>
            {/* End Scroll Down */}
            {/* Status */}
            {/* <div className='hs-status uppercase wow fadeInUp' data-wow-offset={0}>
                Based in Gurgaon
            </div> */}
            {/* End Status */}
        </div>
    );
}
