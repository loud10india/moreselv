"use client";

export default function Newsletter() {
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp'>
                    <h2 className='section-title text-center mb-40'>
                        Free ₹1000
                        <span className='font-alt'> Voucher</span> for New Guests!
                    </h2>
                    <p>
                        Your first step to wellness just got better! As a new guest at Mor-Selv, enjoy a ₹1000 voucher to explore our luxurious
                        treatments and personalized care.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} id='mailchimp' className='form newsletter-strong'>
                        <div className='d-sm-flex justify-content-center mb-20'>
                            <a
                                href='https://forms.gle/wJjVr7fwax6LpbEv9'
                                className='newsletter-button btn  btn-mod btn-w btn-large btn-round'
                                target='_blank'
                            >
                                Get Your Voucher
                            </a>
                        </div>
                        <div id='subscribe-result' role='region' aria-live='polite' aria-atomic='true' />
                    </form>
                </div>
            </div>
        </div>
    );
}
