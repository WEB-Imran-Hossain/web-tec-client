import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/images/banner/b1.jpg'
import banner2 from '../../assets/images/banner/b2.jpg'
import banner3 from '../../assets/images/banner/b3.jpg'
import banner4 from '../../assets/images/banner/b4.jpg'
import banner5 from '../../assets/images/banner/b5.jpg'
import banner6 from '../../assets/images/banner/b6.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Carousel className="text-center">
            {/* banner 1 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner2} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">Enjoy virtual reality experience!</h1>
                        <p className="mb-5 text-base">It's exploring fantastical landscapes, participating in thrilling adventures, or connecting with others in virtual social spaces, VR opens doors to unprecedented possibilities.</p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner 2 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner1} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">Our Latest Laptop Innovation!</h1>
                        <p className="mb-5 text-base">The laptop is engineered for lightning-fast speed, ensuring that your tasks are executed with unparalleled efficiency.With a sleek and modern design, it not only catches the eye but also reflects the advanced technology within. </p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner 3 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner3} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">Ultimate for Listening Experience!</h1>
                        <p className="mb-5 text-base">Experience the magic of seamless connectivity as these headphones effortlessly pair with your devices, providing on-the-go entertainment like never before. Precision engineering delivers a sonic masterpiece</p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner 4 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner4} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">AI based powerful drone!</h1>
                        <p className="mb-5 text-base">Drone technology has rapidly evolved, transforming the landscape of various industries and offering unprecedented opportunities for innovation and efficiency.</p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner 5 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner5} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">Our Latest Camera Technology!</h1>
                        <p className="mb-5 text-base">Cameras have evolved from simple image-capturing devices to sophisticated tools that empower individuals to express their creativity and capture life's moments in exquisite detail. Modern cameras.</p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* banner 6 */}
            <div className="hero min-h-screen">
                <img className="h-full" src={banner6} />
                <div className="hero-overlay opacity-60 bg-gradient-to-l from-[#7EBC12] to-[#1D2833]"></div>
                <div className="hero-content text-center text-neutral-content mt-24 lg:mt-0">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">Modern Devices Revolutionize Daily Life!</h1>
                        <p className="mb-5 text-base">Devices into our lives underscores the interconnectedness of modern technology, enhancing convenience, efficiency, and overall quality of life. As technology continues to advance, we can expect even more integration and innovation</p>
                        <Link>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833]hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;