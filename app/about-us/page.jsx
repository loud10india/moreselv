import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";
import { featuresListData } from "@/data/features";

import { strongMultiPages } from "@/data/menu";
import { portfolios10 } from "@/data/portfolio";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
const dark = false;
const onePage = false;
export const metadata = {
    title: "Strong Portfolio || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MembershipAndPricing() {
    return (
        <>
            <div className='theme-strong'>
                <div className='page' id='top'>
                    <nav className='main-nav dark transparent stick-fixed wow-menubar wch-unset'>
                        <Header10 links={strongMultiPages} />
                    </nav>
                    <main className='main'>
                        <ParallaxContainer
                            className='page-section bg-dark-alpha-30 light-content parallax-5'
                            style={{
                                backgroundImage: "url(/assets/images/demo-strong/section-bg-1.jpg)",
                            }}
                            id='home'
                        >
                            <div className='container position-relative pt-sm-30'>
                                {/* Home Section Content */}
                                <div className='home-content text-center'>
                                    <h1 className='hs-title-7 mb-0'>
                                        <span className='wow charsAnimIn-2' data-splitting='chars' style={{ color: "#EBBA78" }}>
                                            About us
                                        </span>
                                    </h1>
                                </div>
                                {/* End Home Section Content */}
                            </div>
                        </ParallaxContainer>
                        <section className='page-section'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-sm-5 mb-xs-50'>
                                        <div className='call-action-4-images'>
                                            <div className='call-action-4-image-1'>
                                                <Image
                                                    src='/assets/images/demo-strong/section-image-1.jpg'
                                                    alt='Image description'
                                                    width={500}
                                                    height={692}
                                                    className='wow scaleOutIn'
                                                    data-wow-duration='1.2s'
                                                />
                                            </div>
                                            <div
                                                className='call-action-4-image-2'
                                                data-rellax-y=''
                                                data-rellax-speed='0.7'
                                                data-rellax-percentage='0.25'
                                            >
                                                <Image
                                                    src='/assets/images/demo-strong/section-image-2.jpg'
                                                    alt='Image description'
                                                    width={500}
                                                    height={692}
                                                    className='wow scaleOutIn'
                                                    data-wow-duration='1.2s'
                                                    data-wow-offset={0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-7 col-xl-6 offset-xl-1 mt-n10'>
                                        <div className='wow linesAnimIn' data-splitting='lines'>
                                            <p className='lead mt-0 mb-40'>
                                                Resonance is an innovative and dynamic full-service creative studio that is passionate about crafting
                                                exceptional digital experiences and products. We specialize in a wide range of creative disciplines,
                                                including branding, design, and engineering, and we are committed to producing work that not only
                                                looks amazing but also functions seamlessly.
                                            </p>
                                            <p className='text-gray mb-40'>
                                                Our design team is made up of skilled professionals who are passionate about creating beautiful and
                                                engaging digital experiences. We work closely with our clients to develop websites, apps, and other
                                                digital products that are not only visually stunning but also intuitive and user-friendly. Our design
                                                process is iterative and collaborative, and we always strive to ensure that our clients are completely
                                                satisfied with the final product. Finally, our engineering team is dedicated to bringing our designs
                                                to life.
                                            </p>
                                        </div>
                                        <div className='local-scroll wow fadeInUp' data-wow-offset={0}>
                                            <Link href={`/main-pages-services-1`} className='btn btn-mod btn-large btn-round btn-hover-anim'>
                                                <span>Our Services</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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
                                            <h2 className='section-title mb-30' style={{ color: "#EBBA78" }}>
                                                Responsive, <span className='font-alt'>flexible</span> and customizable.
                                            </h2>
                                            <p className='mb-50'>
                                                Phasellus nisl lectus, tincidunt eget fermentum quis, accumsan a sem efficitur augue ac ex maximus,
                                                eget viverra sem aliquam. Donec blandit ante nunc, nec pellentesque arcu egestas a lorem.
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
                                        <Image width={1100} height={930} src='/assets/images/demo-strong/split-image-2.jpg' alt='Image Description' />
                                        {/* Circle Text */}
                                        {/* <div className='position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block'>
                                            <Image
                                                src='/assets/images/demo-strong/circle-text.svg'
                                                width={138}
                                                height={138}
                                                alt='Image Description'
                                            />
                                        </div> */}
                                        {/* End Circle Text */}
                                    </div>
                                </div>
                            </div>{" "}
                            {/* <Split /> */}
                        </section>

                        <section className='page-section'>
                            <div className='container'>
                                <div className='row align-items-center gap-4 justify-end'>
                                    {/* Text Section */}
                                    <div className='col-lg-6 col-md-6 mb-4' style={{ marginRight: "70px" }}>
                                        <div className='wow linesAnimIn' data-splitting='lines'>
                                            <p className='lead mt-0 mb-40'>
                                                Resonance is an innovative and dynamic full-service creative studio that is passionate about crafting
                                                exceptional digital experiences and products. We specialize in a wide range of creative disciplines,
                                                including branding, design, and engineering, and we are committed to producing work that not only
                                                looks amazing but also functions seamlessly.
                                            </p>
                                            <p className='text-gray mb-40'>
                                                Our design team is made up of skilled professionals who are passionate about creating beautiful and
                                                engaging digital experiences. We work closely with our clients to develop websites, apps, and other
                                                digital products that are not only visually stunning but also intuitive and user-friendly. Our design
                                                process is iterative and collaborative, and we always strive to ensure that our clients are completely
                                                satisfied with the final product. Finally, our engineering team is dedicated to bringing our designs
                                                to life.
                                            </p>
                                        </div>
                                        <div className='local-scroll wow fadeInUp' data-wow-offset={0}>
                                            <Link href={`/main-pages-services-1`} className='btn btn-mod btn-large btn-round btn-hover-anim'>
                                                <span>Our Services</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className='col-sm-5 mb-xs-50'>
                                        <div className='call-action-4-images'>
                                            <div className='call-action-4-image-1 mb-4'>
                                                <Image
                                                    src='/assets/images/demo-strong/section-image-1.jpg'
                                                    alt='Image description'
                                                    width={500}
                                                    height={692}
                                                    className='wow scaleOutIn'
                                                    data-wow-duration='1.2s'
                                                />
                                            </div>
                                            <div
                                                className='call-action-4-image-2'
                                                data-rellax-y=''
                                                data-rellax-speed='0.7'
                                                data-rellax-percentage='0.25'
                                            >
                                                <Image
                                                    src='/assets/images/demo-strong/section-image-2.jpg'
                                                    alt='Image description'
                                                    width={500}
                                                    height={692}
                                                    className='wow scaleOutIn'
                                                    data-wow-duration='1.2s'
                                                    data-wow-offset={0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer className='footer-1 bg-dark-1 light-content'>
                        <Footer9 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
