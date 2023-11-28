import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>WEB TEC | CONTACT</title>
            </Helmet>
            <div className="flex justify-center items-center pb-20 pt-12 min-h-screen text-white">
                <div
                    className="hero min-h-screen bg-fixed "
                    style={{
                        backgroundImage: "url(https://i.ibb.co/vPJZ2Rv/contact-01.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 font-Rajdhani text-5xl lg:text-8xl font-bold">
                                CONTACT US
                            </h1>
                            <p className="mb-5 text-base">
                                Web Tec is your partner for comprehensive IT solutions and
                                cutting-edge technology services. Tailored for IT businesses,
                                consulting firms, software enterprises, and digital solution
                                providers, we specialize in delivering innovative services to
                                elevate your technology landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card lg:card-side shadow-xl max-w-[90vw] mx-auto gap-10 rounded-l-lg mt-20 mb-36">
                <figure>
                    <iframe
                        className=" w-full lg:w-[65rem] h-[50rem]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7595479516704!2d-73.99093692397268!3d40.745316171388595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a60f737d9f%3A0xfd4ebf09836c018d!2s1178%20Broadway%203rd%20Floor%2C%20%231112%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sbd!4v1701113015404!5m2!1sen!2sbd"
                    ></iframe>
                </figure>
                {/* contact info */}
                <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
                    <div className="ml-5">
                        <form className="card-body md:w-[35rem] md:p-0 mb-10 space-y-5">
                            <h1 className="text-4xl font-semibold text-black font-Rajdhani">
                                Send Your Messages
                            </h1>
                            <div className="flex gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered rounded-none"
                                        required
                                    />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="input input-bordered rounded-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Phone"
                                        className="input input-bordered rounded-none"
                                        required
                                    />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        className="input input-bordered rounded-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control col-span-2 h-32">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    name="textarea"
                                    placeholder="Message"
                                    className="input input-bordered p-3 h-32 rounded-none"
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none font-Rajdhani">
                                    <input type="submit" value="SUBMIT" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
