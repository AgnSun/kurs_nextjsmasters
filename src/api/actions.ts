"use server";
import { revalidatePath } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";

export const changeItemQuantity = (id: string, productId: string, quantity: number) => {
	const result = executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: { id: id, productId: productId, quantity: quantity },
		cache: "no-store",
	});
	revalidatePath("/cart");
	return result;
};

export const removeItem = (id: string, productId: string) => {
	return executeGraphql({
		query: CartRemoveItemDocument,
		variables: { id, productId },
	});
};
