import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";

import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { MainLayout } from "@/components/homes/layout/mainLayout/main.layout";

export const metadata = {
    title: "Mor-Selv: Women-Only Wellness & Spa in Gurgaon",
    description:
        "Discover Mor-Selv, the ultimate women-only wellness and spa center in Gurgaon. Relax, rejuvenate, and restore with our personalized treatments.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='no-mobile no-touch '>
            <head>
                <link href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link rel='icon' href='/favicon.ico' sizes='any' />
            </head>
            <body className='appear-animate body'>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
