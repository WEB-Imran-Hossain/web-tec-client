import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useDbUser = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: isDbUser, isPending: isDbUserLoading, refetch:isDbUserRefetch } = useQuery({
    queryKey: [user?.email, "isdbUser"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/sub/${user?.email}`);
      return res.data;
    },
  });
  return { isDbUser, isDbUserLoading, isDbUserRefetch };
};
// test
export default useDbUser;
