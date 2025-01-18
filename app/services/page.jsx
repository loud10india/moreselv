import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Footer4 from "@/components/footers/Footer4";
import { strongMultiPages } from "@/data/menu";
import { portfolios10 } from "@/data/portfolio";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Alata } from "next/font/google";
import { blogs14 } from "@/data/blogs";
import Pagination from "@/components/common/Pagination";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
const dark = false;
const onePage = false;

const alata = Alata({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});
export const metadata = {
    title: "Wellness Services for Women: Relax, Rejuvenate & Glow",
    description:
        "Explore Mor-Selv’s range of women-only services, including relaxation therapies, skincare rituals, aromatherapy, and stress-relief packages.",
};
export default function Services() {
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
                                backgroundImage: "url(/assets/images/demo-strong/mor-selv.jpg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            id='home'
                        >
                            <div className='container position-relative pt-sm-30'>
                                {/* Home Section Content */}
                                <div className='home-content text-center'>
                                    <div className={alata.className}>
                                        <h1 className='hs-title-7 mb-0'>
                                            <span
                                                className='wow charsAnimIn-2'
                                                data-splitting='chars'
                                                style={{ color: "#EBBA78", fontWeight: "400" }}
                                            >
                                                Services & Pricing
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </ParallaxContainer>
                        <>
                            <section className='page-section' id='blog'>
                                <div className='container'>
                                    {/* Blog Posts Grid */}
                                    <div className='row position-relative mt-n50 mb-50 wow fadeInUp' data-wow-offset={0}>
                                        {/* Decorative Waves */}
                                        <div
                                            className='decoration-8 d-none d-sm-block opacity-05'
                                            data-rellax-y=''
                                            data-rellax-speed='-0.7'
                                            data-rellax-percentage={0}
                                        >
                                            <Image src='/assets/images/demo-fancy/decoration-1.svg' alt='' width={159} height={74} />
                                        </div>
                                        {/* End Decorative Waves */}
                                        {/* Post Item */}
                                        {blogs14.map((elm, i) => (
                                            <div key={i} className='post-prev col-md-6 col-lg-4 mt-50'>
                                                <div className='post-prev-container'>
                                                    <div className='post-prev-img'>
                                                        <div>
                                                            <Image src={elm.imgSrc} width={620} height={436} alt='Add Image Description' />
                                                        </div>
                                                    </div>
                                                    <h4 className='post-prev-title'>
                                                        <div>{elm.title}</div>
                                                    </h4>
                                                    <div>
                                                        <div className='post-prev-text'>{elm.text}</div>
                                                        <div className='post-prev-text'>
                                                            <b>Recommended For : </b> {elm.recommendedfor}
                                                        </div>
                                                        <div className='post-prev-text' style={{ marginBottom: "20px" }}>
                                                            <b>Pricing:</b> {elm.pricing}
                                                        </div>
                                                    </div>
                                                    <div className='post-prev-info clearfix'>
                                                        <div className='float-end'>
                                                            <a href='/book-appointment' style={{ fontSize: "18px" }}>
                                                                <b> Book Now</b>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* End Post Item */}

                                        {/* End Post Item */}
                                    </div>
                                    {/* End Blog Posts Grid */}
                                    {/* Pagination */}
                                    {/* <Pagination /> */}
                                    {/* End Pagination */}
                                </div>
                            </section>
                            <hr className='mt-0 mb-0' />

                            <section className='page-section'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-6 mb-md-40 mb-sm-30'>
                                            <div className={alata.className}>
                                                <h2
                                                    className='section-title-strong mt-n20 mb-40 mb-sm-30'
                                                    style={{ color: "#EBBA78", fontWeight: "400" }}
                                                >
                                                    Best
                                                    <span className='font-alt'> Wellness Center for</span> <span className='font-alt'>Women in </span>
                                                    Gurgaon
                                                </h2>
                                            </div>
                                            <div className='local-scroll'>
                                                <Link href='/book-appointment' className='btn btn-mod btn-large btn-round btn-hover-anim'>
                                                    <span>Book an Appointment</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <p className='mb-40 mb-sm-30'>
                                                At <b>Mor-Selv</b>, Our treatments are tailored to meet your individual needs, ensuring you leave
                                                feeling refreshed, revitalized, and empowered. Whether you’re looking for a calming escape or an
                                                indulgent pampering session, our team is here to provide you with a transformative experience.
                                            </p>
                                            {/* Features List */}
                                            <div className='row mt-n20'>
                                                {/* Features List Item */}
                                                <div className='col-sm-6 col-lg-12 col-xl-6 d-flex mt-20'>
                                                    <div className='features-list-icon'>
                                                        <i className='mi-check' />
                                                    </div>
                                                    <div className='features-list-text'>Exclusively for Women</div>
                                                </div>
                                                {/* End Features List Item */}
                                                {/* Features List Item */}
                                                <div className='col-sm-6 col-lg-12 col-xl-6 col-lg-6 d-flex mt-20'>
                                                    <div className='features-list-icon'>
                                                        <i className='mi-check' />
                                                    </div>
                                                    <div className='features-list-text'>Personalized Wellness Journeys</div>
                                                </div>
                                                {/* End Features List Item */}
                                                {/* Features List Item */}
                                                <div className='col-sm-6 col-lg-12 col-xl-6 d-flex mt-20'>
                                                    <div className='features-list-icon'>
                                                        <i className='mi-check' />
                                                    </div>
                                                    <div className='features-list-text'>Expert Therapists & Care</div>
                                                </div>
                                                {/* End Features List Item */}
                                                {/* Features List Item */}
                                                <div className='col-sm-6 col-lg-12 col-xl-6 d-flex mt-20'>
                                                    <div className='features-list-icon'>
                                                        <i className='mi-check' />
                                                    </div>
                                                    <div className='features-list-text'>Serene & Luxurious Ambience</div>
                                                </div>
                                                {/* End Features List Item */}
                                            </div>
                                            {/* End Features List */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
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
