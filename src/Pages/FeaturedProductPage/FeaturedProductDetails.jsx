import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { TbThumbUp } from "react-icons/tb";
import { MdReport } from "react-icons/md";

const FeaturedProductDetails = () => {
    const data = useLoaderData()
    console.log("featured details", data);
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [votes, setVotes] = useState(data?.votes);
    const voteDifference = data?.votes - votes
    console.log("voteDifference",voteDifference);

    const handleUpVote = (id) => {
        console.log("inside handleUpVote voteDifference",voteDifference);
        if (!user) {
            navigate("/login");
            return;
        }
        if(voteDifference<0){
            console.log("inside voteDifference condition lock",voteDifference);
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

    return (
        <div>
            <Helmet>
                <title>WEB TEC | FEATURED PRODUCT DETAILS</title>
            </Helmet>
            {/* featured product details */}
            <div className="py-32">
                <div className=" card w-3/6  bg-base-100 shadow-xl mx-auto">
                    <figure><img src={data.productImage} alt="" /></figure>
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row items-center justify-between -mt-5">
                            <div>
                                <h2
                                    className="card-title text-3xl uppercase font-bold text-[#1D2833] hover:text-[#7EBC12] font-Rajdhani"
                                >
                                    {data.productName}
                                </h2>
                            </div>
                            <div className=" flex gap-2 text-[#1D2833]">
                                <div className="badge badge-outline text-base font-bold rounded uppercase">{data.tags}</div>
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
                       <div className="text-right">
                       <button className="badge text-base font-bold rounded bg-red-600 p-3">
                        <MdReport className="text-white text-xl" />
                                </button>
                       </div>
                    </div>
                </div>
            </div>
            {/* post review */}
            
        </div>
    );
};

export default FeaturedProductDetails;