import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const MyProduct = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: userSpecificProductData = [], refetch: userSpecificProductDataRefetch } = useQuery({
        queryKey: ["userSpecificProductData", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/allproducts/${user?.email}`)
            return res.data;
        }
    })
    console.log("checking user specificproduct data", userSpecificProductData);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/allproducts/delete/${id}`).then(res => {
                    console.log(res.data);
                    if (res.data?.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        userSpecificProductDataRefetch()
                    }
                   
                })

            }
        });

    }



    return (
        <div className="overflow-x-auto w-[60vw] mx-auto mt-20">
            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani text-center">
                My Products
            </h5>
            <table className="table table-zebra mt-5">
                {/* head */}
                <thead className="bg-[#7EBC12] text-white text-base">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userSpecificProductData.map((product, index) =>
                            <tr key={product?._id}>
                                <th>{index + 1}</th>
                                <td>{product?.productName}</td>
                                <td>{product?.votes}</td>
                                <td>{product?.status}</td>
                                <td> <button className="btn">Update</button></td>
                                <td><FaTrash onClick={() => handleDelete(product?._id)} className="text-xl cursor-pointer text-[#1D2833]" /></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;