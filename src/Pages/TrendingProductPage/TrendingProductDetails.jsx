import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { TbBrandCodecov, TbThumbUp } from "react-icons/tb";
import { MdReport } from "react-icons/md";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Rating from "react-rating";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const TrendingProductDetails = () => {
    const data = useLoaderData();
    console.log("featured details", data);
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [votes, setVotes] = useState(data?.votes);
    const voteDifference = data?.votes - votes;
    console.log("voteDifference", voteDifference);

    const handleUpVote = (id) => {
        console.log("inside handleUpVote voteDifference", voteDifference);
        if (!user) {
            navigate("/login");
            return;
        }
        if (voteDifference < 0) {
            console.log("inside voteDifference condition lock", voteDifference);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can vote a product only once!",
            });
            return;
        }
        if (data?.votedBy === user?.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can vote a product only once!",
            });
            return;
        }

        const updatedVoteCount = data?.votes + 1;
        const votedBy = user?.email;

        axiosPublic
            .put(`/upVotes/${id}`, { updatedVoteCount, votedBy })
            .then((res) => {
                console.log("inside axios public", res);
                setVotes(votes + 1);
            });
        console.log(id);
    };

    // post review handle
    const handlePostReview = (event) => {
        event.preventDefault();
        const comments = event.target.comments.value;
        const rating = event.target.rating.value;
        console.log(comments, rating);
        Swal.fire({
            title: "Are you sure?",
            text: "Are you interested in posting in the comments!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7EBC12",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Comment it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .post("/reviews", {
                        productId: data?._id,
                        reviewedBy: user?.email,
                        productName: data?.productName,
                        comments,
                        rating,
                        photoURL: user?.photoURL,
                        displayName: user?.displayName,
                        website: data?.website
                    })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Success!",
                                text: "Your comment has been publish.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    const { data: reviewData = [], refetch: reviewDataRefetch } = useQuery({
        queryKey: ["trendingProductReviewData"],
        queryFn: async () => {
            const result = await axiosPublic.get("/reviews");
            return result.data;
        },
    });
    console.log("post reviview data", reviewData);

    const handleReport = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "What are you interested in reporting!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7EBC12",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, report it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .post("/reports", {
                        productId: id,
                        reviewedBy: user?.email,
                        productName: data?.productName,
                        reported: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Reported!",
                                text: "Your report has been send.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
        console.log("handle report", id);
    };

    return (
        <div>
            <Helmet>
                <title>WEB TEC | TRENDING PRODUCT DETAILS</title>
            </Helmet>
            {/* featured product details */}
            <div className="py-32">
                <div className=" card lg:w-3/6  bg-base-100 shadow-xl mx-auto">
                    <figure>
                        <img src={data.productImage} alt="" />
                    </figure>
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row items-center justify-between -mt-5">
                            <div>
                                <div className="flex">
                                    <h2 className="card-title text-3xl uppercase font-bold text-[#1D2833] hover:text-[#7EBC12] font-Rajdhani">
                                        {data.productName}
                                    </h2>
                                    <Link to={data?.website} target="_blank">
                                        <TbBrandCodecov className="text-2xl text-[#1D2833] hover:text-[#7EBC12] -mt-2" />
                                    </Link>
                                </div>
                            </div>
                            <div className=" flex gap-2 text-[#1D2833]">
                                <div className="badge badge-outline text-base font-bold rounded uppercase">
                                    {data.tags}
                                </div>
                                <div className="badge badge-outline text-base font-bold rounded">
                                    {data.timestamp}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="badge badge-outline text-base font-bold rounded">
                                            {votes}
                                        </div>
                                        <button
                                            onClick={() => handleUpVote(data?._id)}
                                            disabled={data?.isOwner === user?.email}
                                        >
                                            <TbThumbUp className="text-xl text-[#1D2833] hover:text-[#7EBC12]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>{data.description}</p>
                        <div onClick={() => handleReport(data?._id)} className="text-right">
                            <button className="badge text-base font-bold rounded bg-red-600 p-3">
                                <MdReport className="text-white text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* review slider */}
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-[90vw] mx-auto"
            >
                {/* loop for get reviews */}

                {reviewData.map((review, index) => {
                    console.log("rating finding", typeof review?.rating)
                    const ratingData = parseInt(review?.rating)


                    return (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center ">
                                <div>
                                    <img
                                        className="rounded-full"
                                        src={review?.photoURL}
                                        alt="review_person"
                                    />

                                    <h2 className="text-center mt-3 text-xl font-Rajdhani">
                                        {review?.displayName}
                                    </h2>
                                </div>
                            </div>
                            <div className=" m-5 flex flex-col items-center space-y-4">

                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <FaQuoteLeft className="text-6xl" />
                                <p className="text-center">{review?.comments}</p>
                                <h3 className="text-3xl font-bold uppercase font-Rajdhani text-[#1D2833]">
                                    {review?.productName}
                                </h3>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/* post review */}
            <div className="mt-32 mb-32 bg-base-200 space-y-5 p-10 rounded-lg md:max-w-[50vw] mx-auto">
                <div className="text-center">
                    <div className="avatar online">
                        {user ? (
                            <>
                                <div className="w-32 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </>
                        ) : (
                            <>
                                <FaUserCircle className="text-5xl" />
                            </>
                        )}
                    </div>
                    <div className=" text-xl font-Rajdhani">{user?.displayName}</div>
                </div>
                <form onSubmit={handlePostReview} className="space-y-3">
                    <div>
                        <textarea
                            name="comments"
                            placeholder="Comments"
                            required
                            id=""
                            cols="30"
                            rows="8"
                            className="w-full p-5"
                        ></textarea>
                    </div>

                    <div className="">
                        <div className="">
                            <input
                                type="number"
                                name="rating"
                                placeholder="Out of 5"
                                required
                                id=""
                                className="w-full p-5"
                            />
                        </div>
                    </div>
                    <div className="text-base font-normal text-[#1D2833]  flex items-center gap-2 link link-hover">
                        <input type="checkbox" name="" id="" required />
                        Save my name and email in browser for the next time I comment.
                    </div>
                    <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani">
                        <input type="submit" value="Submit Comment" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TrendingProductDetails;
