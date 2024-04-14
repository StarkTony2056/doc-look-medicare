import React, { useState, useEffect } from 'react';
import ImageSwiper from '../ImageSwiper/ImageSlide';

function Hero() {
    const [typedText, setTypedText] = useState('');
    const targetText = 'Doctors';
    const typingSpeed = 150;

    useEffect(() => {
        let currentIndex = 0;
        let currentText = '';

        const typeWriter = () => {
            if (currentText.length < targetText.length) {
                currentText = targetText.substring(0, currentText.length + 1);
            } else {
                currentText = '';
            }
            setTypedText(currentText);
            setTimeout(typeWriter, typingSpeed);
        };

        typeWriter();

        return () => clearTimeout();
    }, []);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <ImageSwiper />
                    </div>

                    <div className="lg:py-15">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Find & Book <span className='text-primary'>Appointment</span> with your Fav <span className='text-primary'>{typedText}</span>
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Discover and schedule appointments with your favorite doctors hassle-free. Browse through our extensive list of healthcare professionals, select your preferred specialist, and book appointments seamlessly. Take control of your health journey today with our easy-to-use platform.
                        </p>

                        <button className="btn btn-primary mt-9">Explore Know</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
