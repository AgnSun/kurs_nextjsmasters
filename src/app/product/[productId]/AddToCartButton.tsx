"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			data-testid="add-to-cart-button"
			className="mt-4 cursor-wait rounded-sm border bg-slate-500 px-6 py-2 shadow-sm disabled:bg-slate-900"
		>
			Add to cart
		</button>
	);
};
