import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";
import { featuresListData } from "@/data/features";
import Contact from "@/components/homes/home-7/Contact";

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
    title: " Terms & Conditions: Mor-Selv Wellness Center",
    description: "Review Mor-Selv’s terms and conditions for memberships, services, cancellations, and more.",
};
export default function TermsAndConditions() {
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
                                            Terms & Conditions
                                        </span>
                                    </h1>
                                </div>
                                {/* End Home Section Content */}
                            </div>
                        </ParallaxContainer>
                        <section className='page-section'>
                            <div className='container relative'>
                                <div className='row'>
                                    {/* Content */}
                                    <div className='col-lg-8 offset-lg-2'>
                                        {/* Post */}
                                        <div className='blog-item mb-80 mb-xs-40'>
                                            <div className='blog-item-body'>
                                                <p>
                                                    Welcome to Mor-Selv. By accessing our website or using our services, you agree to comply with and
                                                    be bound by the following terms and conditions. Please read them carefully before proceeding.
                                                </p>
                                                <h3>1. Acceptance of Terms</h3>
                                                <p>
                                                    By using our website or services, you confirm that you accept these terms and conditions. If you
                                                    do not agree, please refrain from using our site or services.
                                                </p>
                                                <h3>2. Services Provided</h3>
                                                <p>
                                                    Mor-Selv offers women-only wellness and spa services. All services are subject to availability and
                                                    may vary based on location. Memberships and promotions are subject to additional terms outlined in
                                                    their respective agreements.
                                                </p>
                                                <h3>3. Booking and Payment</h3>

                                                <ul>
                                                    <li>
                                                        <b>Booking:</b> All appointments must be booked in advance. Walk-ins are subject to
                                                        availability.
                                                    </li>
                                                    <li>
                                                        <b>Payments:</b> Payments for services must be made at the time of booking or during the
                                                        visit. Membership fees are non-refundable.
                                                    </li>
                                                    <li>
                                                        <b>Cancellations: </b>Cancellations must be made at least 24 hours before the appointment.
                                                        Late cancellations or no-shows may incur charges.
                                                    </li>
                                                </ul>
                                                <h3>4. Membership Terms</h3>
                                                <ul>
                                                    <li>Memberships are non-transferable and valid for the specified duration only.</li>
                                                    <li>Unused services in membership plans may roll over, subject to specific membership terms.</li>
                                                    <li>Additional terms for memberships are outlined in our Membership Agreement.</li>
                                                </ul>
                                                <h3>5. Conduct and Usage</h3>
                                                <ul>
                                                    <li>
                                                        Our spa is a women-only space, and we reserve the right to deny service to anyone who does not
                                                        adhere to this policy.
                                                    </li>
                                                    <li>
                                                        Guests are expected to conduct themselves respectfully. Any disruptive or inappropriate
                                                        behavior may result in service refusal.
                                                    </li>
                                                </ul>
                                                <h3>6. Limitation of Liability</h3>
                                                <p>Mor-Selv is not liable for:</p>
                                                <ul>
                                                    <li>Any adverse reactions to treatments or products unless caused by our negligence.</li>
                                                    <li>Loss, theft, or damage of personal belongings during visits.</li>
                                                </ul>

                                                <h3>7. Intellectual Property</h3>
                                                <p>
                                                    All content on our website, including text, images, logos, and graphics, is the property of
                                                    Mor-Selv and is protected under intellectual property laws. Unauthorized use is strictly
                                                    prohibited.
                                                </p>
                                                <h3>8. Privacy Policy</h3>
                                                <p>
                                                    Your use of our website and services is also governed by our Privacy Policy. Please review it to
                                                    understand how we collect and use your personal information.
                                                </p>
                                                <h3>9. Changes to Terms</h3>
                                                <p>
                                                    We reserve the right to update these terms and conditions at any time. Changes will be effective
                                                    immediately upon posting on this page. Please check this page regularly for updates.
                                                </p>
                                                <h3>10. Contact Us</h3>
                                                <p className='mb-10'>
                                                    If you have any questions about these terms and conditions, please contact us:
                                                </p>
                                                <ul>
                                                    <li>
                                                        <b>Email:</b> info@morselv.com
                                                    </li>
                                                    <li>
                                                        <b>Phone:</b> 9818296300
                                                    </li>
                                                    <li>
                                                        <b>Address:</b> Mor-Selv Wellness Center, AVA Court, Malibu Towne, Gurgaon
                                                    </li>
                                                </ul>
                                                <p>
                                                    By using our website or services, you agree to these terms and conditions. Thank you for choosing
                                                    Mor-Selv for your wellness journey.
                                                </p>
                                                <p>
                                                    <b>Effective Date:</b> Dec 25, 2024
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Content */}
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
