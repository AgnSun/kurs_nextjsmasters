"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Route } from "next";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

export const Select = () => {
	const router = useRouter();
	const [sortOption, setSortOption] = useState("none");

	const handleSortChange = (order: SortDirection, orderBy: ProductSortBy) => {
		const newRoute = order && orderBy ? `?order=${order}&orderBy=${orderBy}` : "/";
		router.push(newRoute as Route);
	};

	const handleSortByPrice = (order: SortDirection, orderBy: ProductSortBy) => {
		setSortOption(order);
		handleSortChange(order, orderBy);
		//	router.refresh();
	};

	return (
		<div>
			<select
				value={sortOption}
				onChange={(e) =>
					handleSortByPrice(
						e.target.value.split("-")[0] as SortDirection,
						e.currentTarget.value.split("-")[1] as ProductSortBy,
					)
				}
			>
				<option value="none">Sort</option>
				<option data-testid="sort-by-price" value="ASC-PRICE">
					Price low to high
				</option>
				<option data-testid="sort-by-price" value="DESC-PRICE">
					Price high to low
				</option>
			</select>
		</div>
	);
};
