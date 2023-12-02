import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import useDbUser from "../../../components/hooks/useDbUser";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const { isDbUser, isDbUserLoading, isDbUserRefetch } = useDbUser();
  useEffect(()=>{
    isDbUserRefetch()
  },[isDbUserRefetch])
  return (
    <div className="flex items-center justify-center">
      <div className="card w-[50rem] p-10 bg-base-100 shadow-xl mx-auto mt-20">
        <figure>
          <img className="rounded-full w-16 h-16" src={user?.photoURL} alt="" />
        </figure>
        <div className="flex justify-center mt-3">
          <h2 className="card-title font-Rajdhani">{user?.displayName}</h2>
        </div>
        <div className="flex justify-center">
          <p className="font-Rajdhani">{user?.email}</p>
        </div>
        <div className="card-body text-center">
          {/* membership */}
          <div>
            {isDbUser?.status === "verified" ? (
              <p className="text-3xl font-Rajdhani font-bold text-center text-[#7EBC12]">You are already verified user</p>
            ) : (
              <Link to={"/dashboard/membership"}>
                <button className="m-1 btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani">
                  Membership ($10)
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
