import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
import about1 from "../../assets/images/about/ab_01.jpg";
import about2 from "../../assets/images/about/ab_02.jpg";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen text-white">
                <div
                    className="hero min-h-screen bg-fixed "
                    style={{
                        backgroundImage: "url(https://i.ibb.co/4TdMcNQ/ab-03.jpg",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">
                                ABOUT US
                            </h1>
                            <p className="mb-5 text-base">
                                In the fast-paced realm of web technology, staying ahead
                                requires a dynamic and adaptive approach to content creation.
                                Web technology content serves as the digital bridge between
                                businesses and their audiences, reflecting the essence of
                                innovation, usability, and connectivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen max-w-[90vw] mx-auto my-10 mt-0">
                <div className="hero-content flex-col lg:flex-row flex-col-reverse mt-32">
                    <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
                        <div className="lg:w-4/5 space-y-4">
                            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
                                Web Technology Revolutionizing Online Experiences
                            </h5>
                            <div>
                                <div className="mt-5">
                                    <div className="space-y-4 mb-5">
                                        <h4 className="font-bold">Mission:</h4>
                                        <li>
                                            We help you understand, adapt, and remain ahead in an
                                            increasingly complex world
                                        </li>
                                        <li>
                                            Succeeding in what others consider unrealistic is our
                                            bread and butter.
                                        </li>
                                    </div>
                                    <hr />
                                    <div className="space-y-4 mt-5">
                                        <h4 className="font-bold">Vission:</h4>
                                        <li>
                                            Our vision is to be a global leader in web technology,
                                            driving innovation that transcends boundaries.
                                        </li>
                                        <li>
                                            We envision a future where our cutting-edge solutions
                                            create seamless digital experiences
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="relative ml-14">
                        <img
                            data-aos="fade-right"
                            src={about1}
                            className="lg:w-full rounded-lg shadow-2xl"
                        />
                        <img
                            data-aos="fade-left"
                            src={about2}
                            className="w-1/2 rounded-lg shadow-2xl absolute  lg:top-60 lg:-left-24 top-28 -left-12 bottom-0 border-8  border-white"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
