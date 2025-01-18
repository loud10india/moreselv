// "use client";
// import Footer9 from "@/components/footers/Footer9";
// import Header10 from "@/components/headers/Header10";
// import Home10 from "@/components/homes/home-10";
// import Hero1 from "@/components/homes/home-10/heros/Hero1";
// // import Hero6 from "@/components/homes/home-10/heros/Hero6";
// import { useRef, useState } from "react";
// import Footer4 from "@/components/footers/Footer4";
// import { Alata } from "next/font/google";

// import { strongMultiPages } from "@/data/menu";
// import dynamic from "next/dynamic";
// const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
//     ssr: false, // Disable server-side rendering
// });
// const alata = Alata({
//     weight: "400",
//     subsets: ["latin"],
//     display: "swap",
// });

// export default function Home10MainDemoMultiPage() {
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(true);
//     const [isMuted, setIsMuted] = useState(true);

//     const togglePlayPause = () => {
//         if (isPlaying) {
//             videoRef.current.pause();
//             setIsPlaying(false);
//         } else {
//             videoRef.current.play();
//             setIsPlaying(true);
//         }
//     };

//     const toggleMuteUnmute = () => {
//         if (isMuted) {
//             videoRef.current.muted = false;
//             setIsMuted(false);
//         } else {
//             videoRef.current.muted = true;
//             setIsMuted(true);
//         }
//     };
//     return (
//         <>
//             <div className='theme-strong'>
//                 <div className='page' id='top'>
//                     <nav className='main-nav dark transparent stick-fixed wow-menubar wch-unset' style={{ color: "#FECD8C" }}>
//                         <Header10 links={strongMultiPages} />
//                     </nav>
//                     <main id='main'>
//                         <div className='bg-video-wrapper'>
//                             <video ref={videoRef} className='bg-video' preload='auto' autoPlay muted loop>
//                                 <source src='/assets/videos/banner-bg.mp4' type='video/mp4' />
//                             </video>
//                             <div className='bg-video-overlay bg-dark-alpha-50' />
//                         </div>
//                         <a onClick={toggleMuteUnmute} href='#' role='button' className='bg-video-button-muted'>
//                             <i className={`mi-volume-${isMuted ? "up" : "off"}`} style={{ color: "white" }} />
//                             <span className='visually-hidden' style={{ color: "white" }}>
//                                 Volume On
//                             </span>
//                         </a>
//                         <a onClick={togglePlayPause} href='#' role='button' className='bg-video-button-pause'>
//                             <i className={`mi-${isPlaying ? "pause" : "play"}`} style={{ color: "white" }} />
//                             <span className='visually-hidden' style={{ color: "white" }}>
//                                 Pause
//                             </span>
//                         </a>
//                         <div style={{ color: "white" }}>
//                             <Hero1 />
//                         </div>

//                         <Home10 />
//                     </main>

//                     <footer>
//                         <Footer4 />
//                     </footer>
//                 </div>
//             </div>{" "}
//         </>
//     );
// }

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
    title: "Home 10 Main Demo MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
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
