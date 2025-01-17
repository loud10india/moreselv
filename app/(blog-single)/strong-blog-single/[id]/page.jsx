import Form9 from "@/components/blog/commentForm/Form9";
import Comments from "@/components/blog/Comments";
import Widget2 from "@/components/blog/widgets/Widget2";
import AnimatedText from "@/components/common/AnimatedText";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Image from "next/image";
import { strongMultiPages } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
import dynamic from "next/dynamic";
import Footer4 from "@/components/footers/Footer4";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

export const metadata = {
    title: "Home 10 Blog Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongBlogSinglePage({ params }) {
    const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
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
                                    <h1 className='section-title-medium mb-0'>
                                        <span className='wow charsAnimIn' data-splitting='chars' style={{ color: "#EBBA78" }}>
                                            <AnimatedText text={blog.title || blog.postTitle} />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </ParallaxContainer>
                        <>
                            <section className='page-section'>
                                <div className='container relative'>
                                    <div className='row'>
                                        <div className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
                                            {/* Blog Content */}
                                            <div className='blog-item mb-80 mb-xs-40'>
                                                <div className='blog-item-body'>
                                                    {/* Display Image */}
                                                    <div className='mb-40 mb-xs-30'>
                                                        <Image src={blog.imgSrc} alt={blog.imgAlt} width={1200} height={819} />
                                                    </div>
                                                    {/* Display Content */}
                                                    <p>{blog.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
