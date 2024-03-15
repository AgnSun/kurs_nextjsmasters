"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "../../api/actions";

export function ChangeProductQuantity({
	productId,
	quantity,
	cartId,
}: {
	productId: string;
	quantity: number;
	cartId: string;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				data-testid="decrement"
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					if (optimisticQuantity !== 1)
						await changeItemQuantity(cartId, productId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(cartId, productId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
