import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PaginationForCategory = ({
	totalPages,
	category,
}: {
	totalPages: number;
	category: string;
}) => {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
	return (
		<nav>
			<ul aria-label="pagination" className="mt-2 flex justify-center space-x-4 pb-4">
				{pages.map((pageNumber) => {
					return (
						<li key={pageNumber}>
							<ActiveLink
								href={`/categories/${category}/${pageNumber}`}
								activeClassName="text-pink-700 underline"
								match
								prefetch={true}
							>
								{pageNumber}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
