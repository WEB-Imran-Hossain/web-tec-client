import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TbThumbUp } from "react-icons/tb";

const TrendingProductCard = ({ feature, trendingDataRefetch }) => {
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
      .put(`/upVotes/trending/${id}`, { updatedVoteCount, votedBy })
      .then((res) => {
        console.log(res);
        setVotes(votes + 1);
      });
    console.log(id);
  };

  useEffect(() => {
    trendingDataRefetch();
  }, [trendingDataRefetch, votes]);

  const handleDetails = (id) => {
    console.log("handleDetalis Id", id);
    navigate(`/trendingDetails/${id}`);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl h-96 mx-auto">
        <figure>
          <img src={productImage} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center justify-between -mt-5">
            <div>
              <h2
                onClick={() => handleDetails(_id)}
                className="card-title cursor-pointer text-2xl uppercase font-bold text-[#1D2833] hover:text-[#7EBC12] font-Rajdhani"
              >
                {productName}
              </h2>
            </div>
            <div className=" flex gap-2 text-[#1D2833]">
              <div className="badge badge-outline text-base font-bold rounded uppercase">
                {tags}
              </div>
              <div className="badge badge-outline text-base font-bold rounded">
                {timestamp}
              </div>
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
    </>
  );
};

export default TrendingProductCard;
