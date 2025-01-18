import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import { strongMultiPages } from "@/data/menu";
import Footer4 from "@/components/footers/Footer4";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
export const metadata = {
    title: "Mor-Selv | Women Wellness Center ",
    description: "Mor-Selv | Women Wellness Center ",
};
export default function Home10MainDemoMultiPage() {
    return (
        <>
            <div className='theme-strong'>
                <div className='page' id='top'>
                    <nav className='main-nav dark transparent stick-fixed wow-menubar wch-unset'>
                        <Header10 links={strongMultiPages} />
                    </nav>
                    <main id='main'>
                        <ParallaxContainer
                            className='home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection'
                            style={{
                                backgroundImage: "url(/assets/images/demo-strong/banner-v2.jpg)",
                            }}
                            id='home'
                        >
                            <Hero1 />
                        </ParallaxContainer>

                        <Home10 />
                    </main>
                    <footer>
                        <Footer4 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
