import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import useAxiosSequre from "../../../components/hooks/useAxiosSequre";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: allUsers = [], refetch:allUsersRefetch } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users");
            return res.data;
        },
    });

    const handleModerator = (id) => {
        axiosPublic.put("/users/role/update", { role: "moderator", id }).then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your role updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                allUsersRefetch()
            }
        })
        console.log("handleModerator", id);
    }

    const handleAdmin = (id) => {
        axiosPublic.put("/users/role/update", { role: "admin", id }).then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your role updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                allUsersRefetch()
            }
        })
        console.log("handleAdmin", id);
    }

    return (
        <div className="overflow-x-auto w-[60vw] mx-auto mt-20">
            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani text-center">
                Manage All Users
            </h5>
            <h2 className="text-2xl font-bold">Total Users: {allUsers.length} </h2>
            <table className="table table-zebra mt-5">
                {/* head */}
                <thead className="bg-[#7EBC12] text-white text-base">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Moderator</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <button onClick={() => handleModerator(user._id)} title={user?.role} className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani">Moderator</button>
                            </td>
                            <td>
                                <button onClick={() => handleAdmin(user._id)} title={user?.role} className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani">Admin</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
