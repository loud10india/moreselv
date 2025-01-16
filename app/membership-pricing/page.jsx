import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";
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
    title: "Exclusive Spa Memberships for Women at Mor-Selv",
    description:
        "Join Mor-Selv’s Diamond or Ruby membership plans and enjoy exclusive benefits, complimentary drinks, discounts, and priority bookings.",
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
