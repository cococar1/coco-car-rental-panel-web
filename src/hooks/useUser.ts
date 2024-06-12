import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { COUNT_USERS } from "@/gql/user/user.query";

export const useUser = () => {
  const [getCountUser, getCountUserRes] = useLazyQuery<any>(COUNT_USERS);

  
  useEffect(() => {
    if (
      !getCountUserRes?.data
      // || !getPlansRes.data.plans.length
    ) {
        getCountUser();
    }
  }, []);

  return {
    getCountUser,

    countUser: {
      data: getCountUserRes.data?.countUsers,
      loading: getCountUserRes.loading,
      error: getCountUserRes.error,
    },
  };
};
