import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { cart: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
		});
		if (cart) {
			return cart;
		}
	}

	const { cartFindOrCreate: newCart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {},
	});

	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { cart: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart?.items) {
			let totalQuantity = 0;

			cart.items.forEach((item) => {
				totalQuantity += item.quantity || 0;
			});

			return totalQuantity;
		}
	}
}

export async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			total: product.price,
		},
	});
}
