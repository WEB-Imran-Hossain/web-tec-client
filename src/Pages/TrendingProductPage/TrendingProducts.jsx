
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import TrendingProductCard from "./TrendingProductCard";



const TrendingProducts = () => {
    const axiosPublic = useAxiosPublic()

  const { data: trending = [], refetch: trendingDataRefetch } = useQuery({
    queryKey: ['trending'], queryFn: async () => {
      const result = await axiosPublic.get("/trending")
      return result.data
    }
  })
  console.log(trending);

  const handleAllProducts=()=>{

  }
    return (
        <div className="mt-32 max-w-[90vw] mx-auto text-center">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
            Our Trending Products
          </h5>
          <p className="py-4 text-base font-normal lg:w-1/2 mx-auto">
          Trending Products that redefine innovation and elevate your digital experience to unprecedented heights. Our carefully curated selection showcases cutting-edge technology, ensuring you stay ahead in the dynamic world of web development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {trending.map((item) => (
            <TrendingProductCard key={item._id} feature={item} trendingDataRefetch={trendingDataRefetch}></TrendingProductCard>
          ))}
        </div>
      </div>
      <div>
      <button onClick={handleAllProducts} className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                            All Products
                        </button>
      </div>
    </div>
    );
};

export default TrendingProducts;