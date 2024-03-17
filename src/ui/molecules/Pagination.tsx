import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	totalPages: number;
};

export const Pagination = ({ totalPages }: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
	return (
		<nav>
			<ul aria-label="pagination" className="mt-2 flex justify-center space-x-4 pb-4">
				{pages.map((page) => {
					return (
						<li key={page}>
							<ActiveLink
								href={`/products/${page}`}
								activeClassName="text-pink-700 underline"
								match
								prefetch={true}
							>
								{page}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
