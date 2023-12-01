import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TbBrandCodecov, TbThumbUp } from "react-icons/tb";

const AllProductCard = ({ feature, featuredDataRefetch }) => {
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
    website,
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
      .put(`/upVotes/allproducts/${id}`, { updatedVoteCount, votedBy })
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
    navigate(`/allProductDetails/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={productImage} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex flex-col md:flex-row items-center justify-between -mt-5">
          <div>
          <div className="flex">
            <h2 onClick={() => handleDetails(_id)} className="card-title cursor-pointer text-2xl uppercase font-bold text-[#1D2833] hover:text-[#7EBC12] font-Rajdhani">
              {productName}
            </h2>
            <Link to={website} target="_blank">
              <TbBrandCodecov className="text-2xl text-[#1D2833] hover:text-[#7EBC12] -mt-2" />
            </Link>
          </div>
          </div>
        </div>
        <div className=" flex gap-2 text-[#313233]">
          <div className="badge badge-outline text-base font-bold rounded uppercase">
            {tags}
          </div>
          <div className="badge badge-outline text-base font-bold rounded">
            {timestamp}
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="badge badge-outline text-base font-bold rounded">
                {votes}
              </div>
              <button
                onClick={() => handleUpVote(_id)}
                disabled={isOwner === user?.email}
              >
                <TbThumbUp className="text-xl text-[#1D2833] hover:text-[#7EBC12]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
