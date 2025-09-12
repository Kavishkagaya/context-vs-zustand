// hooks/useCart.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart as apiAddToCart, removeFromCart as apiRemoveFromCart, updateCart as apiUpdateCart, getCart as apiGetCart } from "../../api/cartApi";

export const useCart = () => {
  const queryClient = useQueryClient();

  const getCart = useQuery({
    queryKey: ["cart"],
    queryFn: apiGetCart,
  })      

  const addToCart = useMutation({
    mutationFn: apiAddToCart,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCart = queryClient.getQueryData(["cart"]);

      queryClient.setQueryData(["cart"], (old: any) => [...(old || []), newItem]);

      return { previousCart };
    },
    onError: (_err, _newItem, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  const removeFromCart = useMutation({
    mutationFn: apiRemoveFromCart,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return {
    addToCart: addToCart.mutate,
    removeFromCart: removeFromCart.mutate,
  };
};
