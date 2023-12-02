import { useContext } from "react";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const navigate=useNavigate()

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const productImage = form.url.value;
        const tags = form.tags.value;
        const externalLinks = form.externalLinks.value;
        const description = form.description.value;
        const timestamp = new Date().toLocaleDateString();
        const newProduct = {
            productName,
            productImage,
            tags,
            description,
            externalLinks,
            timestamp,
            votes: 0,
            isOwner: user?.email,
            ownerName:user?.displayName,
            ownerImage: user?.photoURL
        };
        console.log(newProduct);

        // send data for server
        axiosPublic.post("/allproducts", newProduct).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your post has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/products")
            }
        });
    };

    return (
        <>
         <div className="flex items-center justify-center">
      <div className="card bg-base-100 mx-auto mt-20 p-10">
        <figure>
          <img className="rounded-full" src={user?.photoURL} alt="" />
        </figure>
        <div className="flex justify-center mt-3">
          <h2 className="card-title font-Rajdhani">{user?.displayName}</h2>
        </div>
        <div className="flex justify-center mt-3">
          <p className="font-Rajdhani">{user?.email}</p>
        </div>
      </div>
    </div>
        <div className="hero min-h-screen mb-40">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 max-w-[90vw] mx-auto shadow-2xl bg-base-200">
                    <form onSubmit={handleAddProduct} className="card-body md:p-28">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold uppercase font-Rajdhani">
                                Add New Product
                            </h1>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Product Image</span>
                            </label>
                            <input
                                type="url"
                                name="url"
                                placeholder="Image url"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="mb-5 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Tags</span>
                                </label>
                                <input
                                    type="text"
                                    name="tags"
                                    placeholder="Tags"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-5 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">External Links</span>
                                </label>
                                <input
                                    type="text"
                                    name="externalLinks"
                                    placeholder="External Links"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24 "
                                placeholder="Short description"
                                name="description"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Add Product"
                                className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani"
                            ></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddProduct;
