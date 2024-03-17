import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { RemoveButton } from "@/app/cart/RemoveButton";
import { ChangeProductQuantity } from "@/app/cart/ChangeProductQuantity";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { cart: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<ChangeProductQuantity
										productId={item.product.id}
										quantity={item.quantity}
										cartId={cart.id}
										data-testid="quantity"
									/>
								</td>
								<td>{(item.product.price / 100) * item.quantity}</td>
								<td>
									<RemoveButton id={cart.id} productId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
