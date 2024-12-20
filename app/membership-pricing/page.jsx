import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";

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
                                            Membership & Pricing
                                        </span>
                                    </h1>
                                </div>
                                {/* End Home Section Content */}
                            </div>
                        </ParallaxContainer>
                        <div>
                            <Home8 />
                        </div>
                    </main>

                    <footer className='footer-1 bg-dark-1 light-content'>
                        <Footer9 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
