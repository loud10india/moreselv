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
                                        <span className='wow charsAnimIn' data-splitting='chars'>
                                            <AnimatedText text={blog.title || blog.postTitle} />
                                        </span>
                                    </h1>
                                    {/* <div className='blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp' data-wow-delay='0.2s'>
                                        <div className='d-inline-block me-3'>
                                            <a href='#'>
                                                <i className='mi-clock size-16' />
                                                <span className='visually-hidden'>Date:</span> December 25
                                            </a>
                                        </div>
                                        <div className='d-inline-block me-3'>
                                            <a href='#'>
                                                <i className='mi-user size-16' />
                                                <span className='visually-hidden'>Author:</span> John Doe
                                            </a>
                                        </div>
                                        <div className='d-inline-block me-3'>
                                            <i className='mi-folder size-16' />
                                            <span className='visually-hidden'>Categories:</span>
                                            <a href='#'>Design</a>, <a href='#'>Branding</a>
                                        </div>
                                        <div className='d-inline-block me-3'>
                                            <a href='#'>
                                                <i className='mi-message size-16' /> 5 Comments
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </ParallaxContainer>
                        <>
                            {/* Section */}
                            <section className='page-section'>
                                <div className='container relative'>
                                    <div className='row'>
                                        {/* Content */}
                                        <div className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
                                            {/* Post */}
                                            <div className='blog-item mb-80 mb-xs-40'>
                                                <div className='blog-item-body'>
                                                    <div className='mb-40 mb-xs-30'>
                                                        <Image
                                                            src='/assets/images/demo-bold/portfolio/4.jpg'
                                                            alt='Image Description'
                                                            width={1200}
                                                            height={819}
                                                        />
                                                    </div>
                                                    <p>
                                                        Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id
                                                        sapien tempor molestie in nec massa. Fusce non ante sed lorem rutrum feugiat. Lorem ipsum
                                                        dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa,
                                                        euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa.
                                                    </p>
                                                    <p>
                                                        Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut&nbsp;dignissim
                                                        consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem. Morbi lacus massa,
                                                        euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                                                    </p>
                                                    <blockquote>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a&nbsp;ante.
                                                            Vestibulum pellentesque, purus ut dignissim consectetur, nulla erat ultrices purus.
                                                        </p>
                                                        <footer>
                                                            Someone famous in
                                                            <cite title='Source Title'> Source Title </cite>
                                                        </footer>
                                                    </blockquote>
                                                    <p>
                                                        Praesent ultricies ut ipsum non laoreet. Nunc ac
                                                        <a href='#'>ultricies</a> leo. Nulla ac ultrices arcu. Nullam adipiscing lacus in consectetur
                                                        posuere. Nunc malesuada tellus turpis, ac pretium orci molestie vel. Morbi lacus massa,
                                                        euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                                                    </p>
                                                    <ul>
                                                        <li>First item of the list</li>
                                                        <li>Second item of the list</li>
                                                        <li>Third item of the list</li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus
                                                        massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor
                                                        molestie in nec massa. Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus
                                                        ut&nbsp;dignissim consectetur, nulla erat ultrices purus, ut&nbsp;consequat sem elit non sem.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Content */}
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
