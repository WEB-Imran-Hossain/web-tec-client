import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../components/hooks/useAxiosPublic";
import { PieChart } from "@mui/x-charts";


const Statistics = () => {
  const axiosPublic = useAxiosPublic();

  const { data: statistics = {}, refetch: statisticsRefetch } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const res = await axiosPublic.get("/statistic");
      console.log(res.data);
      return res.data;
    },
  });
  const allProducts = statistics?.allProducts;
  const totalReview = statistics?.totalReview;
  const totalUser = statistics?.totalUser;
  console.log(allProducts, totalReview, totalUser);

  return (
   <>
    <div className="mt-40">
      <div className="flex items-center ">
      <PieChart 
        series={[
          {
            data: [
              { id: 0, value: allProducts, label: "All Products" },
              { id: 1, value: totalReview, label: "Total Review" },
              { id: 2, value: totalUser, label: "Total User" },
            ],
          },
        ]}
        width={600}
        height={300}
      />
      </div>
    </div>

   </>
  );
};

export default Statistics;
