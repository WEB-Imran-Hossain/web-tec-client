import { useEffect, useState } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const FeaturedProduct = () => {
  // const [featured, setFeatured] = useState([]);
  const axiosPublic = useAxiosPublic()

  // useEffect(() => {
  //   fetch("http://localhost:5000/featured")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterdData = data.filter(item => item.status !== "feature")
  //       setFeatured(data);
  //     });
  // }, []);
  const { data: featured = [], refetch: featuredDataRefetch } = useQuery({
    queryKey: ['todos'], queryFn: async () => {
      const result = await axiosPublic.get("/featured")
      return result.data
    }
  })
  console.log(featured);

  return (
    <div className="mt-32 max-w-[85vw] mx-auto">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
            Our Feature Products
          </h5>
          <p className="py-4 text-base font-normal">
            Feature Products that redefine innovation and elevate your digital experience to unprecedented heights. Our carefully curated selection showcases cutting-edge technology, ensuring you stay ahead in the dynamic world of web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {featured.map((item) => (
            <FeaturedProductCard key={item._id} feature={item} featuredDataRefetch={featuredDataRefetch}></FeaturedProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;