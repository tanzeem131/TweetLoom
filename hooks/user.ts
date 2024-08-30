import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      try {
        const data = await graphqlClient.request(getCurrentUserQuery);
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { ...query, user: query.data?.getCurrentUser };
};
