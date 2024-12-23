"use client";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
// import Hero6 from "@/components/homes/home-10/heros/Hero6";
import { useRef, useState } from "react";

import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

export default function Home10MainDemoMultiPage() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMuteUnmute = () => {
        if (isMuted) {
            videoRef.current.muted = false;
            setIsMuted(false);
        } else {
            videoRef.current.muted = true;
            setIsMuted(true);
        }
    };
    return (
        <>
            <div className='theme-strong'>
                <div className='page' id='top'>
                    <nav className='main-nav dark transparent stick-fixed wow-menubar wch-unset' style={{ color: "#FECD8C" }}>
                        <Header10 links={strongMultiPages} />
                    </nav>
                    <main id='main'>
                        <div className='bg-video-wrapper'>
                            <video ref={videoRef} className='bg-video' preload='auto' autoPlay muted loop>
                                <source src='/assets/videos/banner-bg.mp4' type='video/mp4' />
                            </video>
                            <div className='bg-video-overlay bg-dark-alpha-50' />
                        </div>
                        <a onClick={toggleMuteUnmute} href='#' role='button' className='bg-video-button-muted'>
                            <i className={`mi-volume-${isMuted ? "up" : "off"}`} style={{ color: "white" }} />
                            <span className='visually-hidden' style={{ color: "white" }}>
                                Volume On
                            </span>
                        </a>
                        <a onClick={togglePlayPause} href='#' role='button' className='bg-video-button-pause'>
                            <i className={`mi-${isPlaying ? "pause" : "play"}`} style={{ color: "white" }} />
                            <span className='visually-hidden' style={{ color: "white" }}>
                                Pause
                            </span>
                        </a>
                        <div style={{ color: "white" }}>
                            <Hero1 />
                        </div>

                        <Home10 />
                    </main>
                    <footer className='footer-1 bg-dark-1 light-content' style={{ color: "#FECD8C" }}>
                        <Footer9 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
