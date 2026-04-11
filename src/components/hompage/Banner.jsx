import React from "react";

import Image from "next/image";

const Banner = () => {
    return (
        <div className="min-h-[80vh] text-center space-y-8 pt-[80px] px-4">
            {/* Heading */}
            <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
                We Build <br /> 
                <span className="text-purple-600">Productive</span> Apps
            </h1>

            {/* Paragraph */}
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                At <span className="font-bold text-gray-800">HERO.IO</span>, we craft innovative apps designed to make everyday life
                simpler, smarter, and more exciting. Our goal is to turn your ideas into
                digital experiences that truly make an impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg">
                    Play Store
                </button>
                <button className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg">
                    App Store
                </button>
            </div>

            {/* Banner Image */}
            <div className="pt-10">
                {/* <Image 
                    src={bannerImg} 
                    className="mx-auto drop-shadow-2xl" 
                    alt="Hero Banner"
                    priority // Hero image-er jonno eta bhalo performance dey
                    width={800} // Tomar image size onujayi adjust koro
                    height={500}
                /> */}
            </div>
        </div>
    );
};

export default Banner;