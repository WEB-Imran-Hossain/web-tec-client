import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";
import AllProductCard from "./AllProductCard";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.searchValueFromUser.value;
    const searchValueToLowercase=searchValue.toLowerCase()
    console.log("search button chcking",searchValueToLowercase);
    setSearch(searchValueToLowercase);
    console.log("searchValue from state", search);
  };

  // pagination
  const { data: allproductcount = {}, refetch: allproductcountRefetch } =
    useQuery({
      queryKey: ["allproductcount"],
      queryFn: async () => {
        const result = await axiosPublic.get("/allproductcount");
        return result.data;
      },
    });
  console.log("checking all product count", allproductcount);
  const totalProductCount = parseInt(allproductcount?.productCount);
  const itemPerPage = 20;
  const numberOfPages = Math.ceil(totalProductCount / itemPerPage)
  let pages = [];

  if (numberOfPages) {
    pages = [...Array(numberOfPages).keys()];
  }

  // featching all products
  const { data: allproduct = [], refetch: allproductDataRefetch } = useQuery({
    queryKey: ["allproduct"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/allproducts?search=${search}&page=${currentPage}&size=${itemPerPage}`);
      return result.data;
    },
  });
  console.log(allproduct);

  useEffect(() => { 
    allproductDataRefetch()
  }, [search, allproductDataRefetch, currentPage]);

  return (
    <div className="max-w-[90vw] mx-auto text-center py-32">
      <div className="p-4 mt-40 lg:mt-0">
        <div className="space-y-5 mb-10">
          <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
            Our various Products
          </h5>
          <p className="py-4 text-base font-normal lg:w-1/2 mx-auto">
            Feature Products that redefine innovation and elevate your digital
            experience to unprecedented heights. Our carefully curated selection
            showcases cutting-edge technology, ensuring you stay ahead in the
            dynamic world of web development.
          </p>
        </div>
        {/* search */}
        <form onSubmit={handleSearch} className="join">
          <div>
            <div>
              <input
                type="search"
                name="searchValueFromUser"
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <input
              type="submit"
              value="Search"
              className="btn join-item hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani rounded-r-lg"
            />
          </div>
        </form>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
          {allproduct?.map((item) => (
            <AllProductCard
              key={item._id}
              feature={item}
              featuredDataRefetch={allproductDataRefetch}
            ></AllProductCard>
          ))}
        </div>
      </div>
     <div className="flex gap-3 items-center justify-center">
     {pages.map((pageNumber, index) => {
            return (
              <button
                className={` btn w-10 h-3 text-white text-base ${
                  currentPage === pageNumber ? "bg-[#7EBC12]" : ""
                } `}
                onClick={() => setCurrentPage(pageNumber)}
                key={index}
              >
                {pageNumber+1}
              </button>
            );
              })}
     </div>
    </div>
  );
};

export default AllProducts;
