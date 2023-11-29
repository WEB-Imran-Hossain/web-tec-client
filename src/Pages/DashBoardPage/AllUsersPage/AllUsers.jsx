import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import useAxiosSequre from "../../../components/hooks/useAxiosSequre";

const AllUsers = () => {
    const axiosSecure = useAxiosSequre();
    const { data: allUsers=[] } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allUsers")
            return res.data;
        }
    })



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
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map(user=>
                            <tr key={user._id}>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td className="flex items-center gap-2"> <TiUserAdd className="text-xl text-[#1D2833]" />Blue</td>
                            <td><FaTrash className="text-xl text-[#1D2833]" /></td>
                        </tr>
                             )
                    }
                  
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;