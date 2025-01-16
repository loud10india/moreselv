import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";
import { featuresListData } from "@/data/features";
import Footer4 from "@/components/footers/Footer4";
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
    title: "About Mor-Selv: Redefining Women’s Wellness & Spa Services",
    description:
        "Learn about Mor-Selv, a wellness startup focused on empowering women through exclusive spa treatments and holistic wellness programs.",
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
                                backgroundImage: "url(/assets/images/demo-strong/spa-unsplash-1.jpg)",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
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
                                                    src='/assets/images/demo-strong/Women-Only Spa2.jpg'
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
                                                    src='/assets/images/demo-strong/Women-Only Spa3.jpg'
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
                                                Welcome to <b>Mor-Selv</b>, A Fresh Approach to Women’s Wellness and Spa Services. At Mor-Selv, we
                                                believe that wellness is not just a luxury—it’s a necessity, especially for women who often put
                                                themselves last.
                                            </p>
                                            <p className='text-gray mb-40'>
                                                Founded with a passion for empowering women, our startup is focused on providing an exclusive, serene
                                                space where women can prioritize their well-being. We offer a unique range of wellness and spa
                                                services designed to rejuvenate, relax, and restore the body and mind.
                                            </p>
                                            <p className='text-gray mb-40'>
                                                Our vision is to bridge the gap in the wellness industry by creating a space that caters exclusively
                                                to women’s needs. With a deep understanding of the importance of self-care, we aim to provide a safe
                                                and nurturing environment where you can truly unwind—free from distractions and expectations.
                                            </p>
                                        </div>
                                        {/* <div className='local-scroll wow fadeInUp' data-wow-offset={0}>
                                            <Link href={`/main-pages-services-1`} className='btn btn-mod btn-large btn-round btn-hover-anim'>
                                                <span>Our Services</span>
                                            </Link>
                                        </div> */}
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
                                                The <span className='font-alt'>Meaning Behind</span> <b>Mor-Selv</b>.
                                            </h2>
                                            <p className='mb-50'>
                                                The name <b>Mor-Selv</b> is a fusion of two powerful words: <b>“Mor”</b>, which means “mother” in
                                                several languages, symbolizing care, nurturing, and unconditional love, and <b>“Selv”</b>, meaning
                                                "self" in Danish, reflecting individuality, strength, and personal well-being.
                                            </p>
                                            <p className='mb-50'>
                                                Together, they represent the essence of our mission: nurturing the self, honoring the inner strength
                                                of every woman, and creating a space that encourages <b>self-care</b>, <b>self-love</b>, and{" "}
                                                <b>personal transformation.</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex align-items-stretch order-lg-first'>
                                    <div className='split-image-left'>
                                        <Image
                                            width={1100}
                                            height={930}
                                            src='/assets/images/demo-strong/Best Wellness Center for Women in Gurgaon.jpg'
                                            alt='Image Description'
                                        />
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
                                    <div className='col-lg-6 col-md-6 mb-4' style={{ marginRight: "75px" }}>
                                        <div className='wow linesAnimIn' data-splitting='lines'>
                                            <p className='lead mt-0 mb-40'>
                                                Our mission is simple: to offer every woman a personalized and empowering wellness experience. We do
                                                this by focusing on services and treatments that promote both physical health and mental well-being,
                                                from stress-relieving massages to skincare rituals, detox programs, and more.
                                            </p>
                                            <div className='text-gray mb-10'>
                                                At Mor-Selv, it’s not just about looking good—it’s about feeling great, inside and out. We understand
                                                that women’s wellness needs are unique. That’s why Mor-Selv is built with you in mind:
                                                <ul>
                                                    <li>
                                                        <b>Exclusively for Women:</b> A space where you can feel comfortable and empowered.
                                                    </li>
                                                    <li>
                                                        <b>Tailored Treatments:</b> Services are customized to meet your individual needs.
                                                    </li>
                                                    <li>
                                                        <b>Tranquil Environment:</b> Our boutique wellness centers offer peaceful, welcoming spaces
                                                        for relaxation.
                                                    </li>
                                                    <li>
                                                        <b>Expert Therapists:</b> Our team of trained professionals provides you with personalized
                                                        care and attention.
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className='mt-0 mb-10'>
                                                Whether you're seeking relaxation, rejuvenation, or simply a moment to yourself, we are here to
                                                provide an experience designed just for you.
                                            </p>
                                        </div>
                                        <div>
                                            <b>
                                                <a href='/book-appointment'>Join us at Mor-Selv and make wellness a priority.</a>
                                            </b>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className='col-sm-5 mb-xs-50'>
                                        <div className='call-action-4-images'>
                                            <div className='call-action-4-image-1 mb-4'>
                                                <Image
                                                    src='/assets/images/demo-strong/Women-Only Spa4.jpg'
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
                                                    src='/assets/images/demo-strong/Women-Only Spa5.jpg'
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

                    {/* <footer className='footer-1 bg-dark-1 light-content'>
                        <Footer9 />
                    </footer> */}
                    <footer>
                        <Footer4 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
