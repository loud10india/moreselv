import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home8 from "@/components/homes/home-8";
import { featuresListData } from "@/data/features";
import Contact from "@/components/homes/home-7/Contact";
import Footer4 from "@/components/footers/Footer4";
import { strongMultiPages } from "@/data/menu";
import { portfolios10 } from "@/data/portfolio";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Alata } from "next/font/google";

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
    title: " Privacy Policy: Your Data at Mor-Selv",
    description:
        "Learn how Mor-Selv protects your personal information. Our privacy policy outlines data usage, security, and customer confidentiality practices.",
};
export default function PrivacyAndPolicy() {
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
                                    <div className={alata.className}>
                                        <h1 className='hs-title-7 mb-0'>
                                            <span
                                                className='wow charsAnimIn-2'
                                                data-splitting='chars'
                                                style={{ color: "#EBBA78", fontWeight: "400" }}
                                            >
                                                Privacy & Policy
                                            </span>
                                        </h1>
                                    </div>
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
                                                    At Mor-Selv, your privacy is our priority. We are committed to safeguarding your personal
                                                    information and ensuring transparency about how we collect, use, and protect your data. This
                                                    Privacy Policy outlines our practices concerning the information we collect through our website
                                                    and services.
                                                </p>
                                                <h3>1. Information We Collect</h3>
                                                <p className='mb-10'>We may collect the following types of information when you interact with us:</p>
                                                <ul>
                                                    <li>
                                                        <b>Personal Information:</b> Name, email address, phone number, and other details you provide
                                                        when booking appointments or filling out forms.
                                                    </li>
                                                    <li>
                                                        <b>Payment Information:</b> For transactions, we collect billing details, but payment
                                                        processing is handled securely by third-party providers.
                                                    </li>
                                                    <li>
                                                        <b> Usage Data:</b> Information about how you use our website, including IP address, browser
                                                        type, and browsing behavior.
                                                    </li>
                                                    <li>
                                                        <b>Communication Data:</b> Details from your communications with us, such as emails, messages,
                                                        or customer service interactions.
                                                    </li>
                                                </ul>
                                                <h3>2. How We Use Your Information</h3>
                                                <p className='mb-10'>The information we collect is used to:</p>
                                                <ul>
                                                    <li>Provide and improve our services.</li>
                                                    <li>Process bookings, payments, and memberships.</li>
                                                    <li>Send promotional offers, updates, and relevant communications (with your consent).</li>
                                                    <li>Respond to your inquiries and provide customer support.</li>
                                                    <li>Analyze website usage and improve user experience.</li>
                                                </ul>
                                                <h3>3. Sharing Your Information</h3>
                                                <p className='mb-10'>
                                                    We do not sell or rent your personal information. However, we may share your data with trusted
                                                    third parties, including:
                                                </p>
                                                <ul>
                                                    <li>
                                                        <b>Service Providers:</b> To process payments, manage bookings, or send communications on our
                                                        behalf.
                                                    </li>
                                                    <li>
                                                        <b>Legal Obligations:</b> To comply with applicable laws, regulations, or legal requests.
                                                    </li>
                                                </ul>
                                                <h3>4. Data Security</h3>
                                                <p>
                                                    We implement robust security measures to protect your personal information from unauthorized
                                                    access, alteration, or disclosure. Despite our efforts, no system is entirely secure, and we
                                                    encourage you to use caution when sharing sensitive data.
                                                </p>
                                                <h3>5. Cookies and Tracking Technologies</h3>
                                                <p>
                                                    We use cookies to enhance your browsing experience and analyze website traffic. You can manage
                                                    cookie preferences through your browser settings. By continuing to use our website, you consent to
                                                    our use of cookies.
                                                </p>
                                                <h3>6. Your Rights</h3>
                                                <p>You have the right to:</p>
                                                <ul>
                                                    <li>Access the personal data we hold about you.</li>
                                                    <li>Request corrections or updates to your information.</li>
                                                    <li>Withdraw consent for marketing communications.</li>
                                                    <li>Request the deletion of your data, subject to legal obligations.</li>
                                                </ul>
                                                <p>
                                                    To exercise your rights, please contact us at{" "}
                                                    <a href='mailto:info@morselv.com'>info@morselv.com</a>
                                                </p>
                                                <h3>7. Third-Party Links</h3>
                                                <p>
                                                    Our website may contain links to external sites. We are not responsible for the privacy practices
                                                    of these third-party websites and encourage you to review their policies.
                                                </p>
                                                <h3>8. Changes to This Privacy Policy</h3>
                                                <p>
                                                    We may update this Privacy Policy periodically to reflect changes in our practices or legal
                                                    requirements. The revised policy will be posted on this page with the updated effective date.
                                                </p>
                                                <h3>9. Contact Us</h3>
                                                <p className='mb-10'>
                                                    If you have any questions about this Privacy Policy or how we handle your information, please
                                                    contact us:
                                                </p>
                                                <ul>
                                                    <li>
                                                        <b>Email:</b> info@morselv.com
                                                    </li>
                                                    <li>
                                                        <b>Phone:</b> +91-9818257300
                                                    </li>
                                                    <li>
                                                        <b>Address:</b> Mor-Selv Wellness Center, AVA Court, Malibu Towne, Gurgaon
                                                    </li>
                                                </ul>
                                                <p>
                                                    By using our website or services, you agree to this Privacy Policy and our practices described
                                                    herein. Thank you for trusting Mor-Selv with your personal information.
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
                    <footer>
                        <Footer4 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
