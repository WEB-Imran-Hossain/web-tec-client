
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../components/hooks/useAxiosPublic';
import AllProductCard from './AllProductCard';

const AllProducts = () => {
    const axiosPublic = useAxiosPublic()

    const { data: allproduct = [], refetch: allproductDataRefetch } = useQuery({
      queryKey: ['allproduct'], queryFn: async () => {
        const result = await axiosPublic.get("/allproducts")
        return result.data
      }
    })
    console.log(allproduct);

    return (
        <div className="max-w-[90vw] mx-auto text-center py-32">
        <div className="p-4 mt-40 lg:mt-0">
          <div className="space-y-5 mb-10">
            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
              Our various Products
            </h5>
            <p className="py-4 text-base font-normal lg:w-1/2 mx-auto">
              Feature Products that redefine innovation and elevate your digital experience to unprecedented heights. Our carefully curated selection showcases cutting-edge technology, ensuring you stay ahead in the dynamic world of web development.
            </p>
          </div>
          <div className="join">
  <div>
    <div>
      <input type='search' name='search' className="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <div className="indicator">
    <button className="btn join-item hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani rounded-r-lg">Search</button>
  </div>
</div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
            {allproduct.map((item) => (
              <AllProductCard key={item._id} feature={item} featuredDataRefetch={allproductDataRefetch}></AllProductCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default AllProducts;