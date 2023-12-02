import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center">
      <div className="card w-[50rem] h-[40rem]  bg-base-100 shadow-xl mx-auto mt-20">
        <figure>
          <img className="rounded-full" src={user?.photoURL} alt="" />
        </figure>
        <div className="flex justify-center mt-3">
          <h2 className="card-title font-Rajdhani">{user?.displayName}</h2>
        </div>
        <div className="flex justify-center mt-3">
          <p className="font-Rajdhani">{user?.email}</p>
        </div>
        <div className="card-body text-center">
          {/* membership */}
          <details className="dropdown">
            <summary className="m-1 btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani">
              Membership
            </summary>
            {/* Modal section */}
            <button
              className="m-1 btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Subscription
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-middle sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <div className="overflow-x-auto">
                <table className="table w-[45vw] mx-auto mt-20 ">
                  {/* head */}
                  <thead className="bg-[#7EBC12] text-white text-base bg-base-400">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Subscribed Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>{user?.displayName}</td>
                      <td>Subscribed/Not subscribed</td>
                      <td>10</td>
                      <td>Verified/Not Verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
