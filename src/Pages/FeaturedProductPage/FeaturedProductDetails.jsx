import { useLoaderData } from "react-router-dom";

const FeaturedProductDetails = () => {
    const data = useLoaderData()
    console.log("featured details", data);
    return (
        <div>
            This is featured product details
        </div>
    );
};

export default FeaturedProductDetails;