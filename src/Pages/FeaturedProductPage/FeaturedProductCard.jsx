import { Link, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import Swal from "sweetalert2";
// ..
AOS.init();

const FeaturedProductCard = ({ feature, featuredDataRefetch }) => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const {
        _id,
        productImage,
        productName,
        tags,
        timestamp,
        votes: dbVotes,
        isOwner,
        votedBy,
    } = feature;

    console.log(isOwner);

    const [votes, setVotes] = useState(dbVotes);

    const handleUpVote = (id) => {
        if (!user) {
            navigate("/login");
            return;
        }
        if (feature?.votedBy === user?.email) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can vote a product only once!",
            });
            return;
        }
        const updatedVoteCount = dbVotes + 1;
        const votedBy = user?.email;

        axiosPublic
            .put(`/upVotes/${id}`, { updatedVoteCount, votedBy })
            .then((res) => {
                console.log(res);
                setVotes(votes + 1);
            });
        console.log(id);
    };

    useEffect(() => {
        featuredDataRefetch();
    }, [featuredDataRefetch, votes]);

    const handleDetails = (id) => {
        console.log("handleDetalis Id", id);
        navigate(`/featuredDetails/${id}`)
    };

    return (
        <>
            {/* old style */}
            <div className="card bg-base-100 shadow-xl h-96">
                <figure>
                    <img src={productImage} alt="" />
                </figure>
                <div className="card-body">
                    <div className=" flex justify-between text-[#1D2833]">
                        <div className="badge badge-outline text-base font-bold">{tags}</div>
                        <div className="badge badge-outline text-base font-bold">
                            {timestamp}
                        </div>
                    </div>
                    <h2
                        onClick={() => handleDetails(_id)}
                        className="card-title cursor-pointer text-2xl uppercase font-bold text-[#1D2833] font-Rajdhani"
                    >
                        {productName}
                    </h2>
                    <div className="flex justify-end items-center gap-2">
                        <div>
                            <div className="flex items-center gap-2">
                                ( {votes})
                                <button
                                    onClick={() => handleUpVote(_id)}
                                    disabled={isOwner === user?.email}
                                >
                                    <FaArrowUp className="text-xl text-[#1D2833] hover:text-[#7EBC12]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* new style */}
            
        </>
    );
};

export default FeaturedProductCard;
