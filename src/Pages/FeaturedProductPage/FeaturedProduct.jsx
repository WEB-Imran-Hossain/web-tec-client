import FeaturedProductCard from "./FeaturedProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const FeaturedProduct = () => {
  const axiosPublic = useAxiosPublic()

  const { data: featured = [], refetch: featuredDataRefetch } = useQuery({
    queryKey: ['todos'], queryFn: async () => {
      const result = await axiosPublic.get("/featured")
      return result.data
    }
  })
  console.log(featured);

  return (
    <div className="mt-32 max-w-[90vw] mx-auto text-center">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
            Our Feature Products
          </h5>
          <p className="py-4 text-base font-normal lg:w-1/2 mx-auto">
            Feature Products that redefine innovation and elevate your digital experience to unprecedented heights. Our carefully curated selection showcases cutting-edge technology, ensuring you stay ahead in the dynamic world of web development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {featured.map((item) => (
            <FeaturedProductCard key={item._id} feature={item} featuredDataRefetch={featuredDataRefetch}></FeaturedProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;