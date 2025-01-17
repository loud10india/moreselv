import Pagination from "@/components/common/Pagination";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";

import { blogs10 } from "@/data/blogs";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import { strongMultiPages } from "@/data/menu";
import Footer4 from "@/components/footers/Footer4";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Form7 from "@/components/newsletterForms/Form7";
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
    title: "Home 10 Blog || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongBlogPage() {
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
                                <div className='home-content text-center'>
                                    <div className={alata.className}>
                                        <h1 className='hs-title-7 mb-0'>
                                            <span
                                                className='wow charsAnimIn-2'
                                                data-splitting='chars'
                                                style={{ color: "#EBBA78", fontWeight: "400" }}
                                            >
                                                Our Blogs
                                            </span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </ParallaxContainer>
                        <>
                            <section className='page-section' id='blog'>
                                <div className='container position-relative'>
                                    <div className='row mt-n50 mt-sm-n30 mb-50 mb-sm-30 wow fadeInUp' data-wow-offset={0}>
                                        {blogs10.map((post) => (
                                            <div className='post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30' key={post.id}>
                                                <div className='post-prev-2-img'>
                                                    <Link href={`/strong-blog-single/${post.id}`}>
                                                        <Image src={post.imgSrc} width={700} height={479} alt={post.imgAlt} />
                                                    </Link>
                                                </div>
                                                <h3 className='post-prev-2-title'>
                                                    {" "}
                                                    <Link href={`/strong-blog-single/${post.id}`}>{post.title}</Link>
                                                </h3>
                                                {/* <div className='post-prev-2-info'>{post.date}</div> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <hr className='mt-0 mb-0' />
                        </>
                    </main>

                    <footer>
                        <Footer4 />
                    </footer>
                </div>
            </div>{" "}
        </>
    );
}
