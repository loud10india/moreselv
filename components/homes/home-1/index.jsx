import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
export default function Home1({ onePage = false, dark = false }) {
    return (
        <>
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='blog'>
                {/* <div className='container position-relative'> */}
                <Blog />
                {/* </div> */}
            </section>
        </>
    );
}
