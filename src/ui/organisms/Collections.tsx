import React from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const collectionLinks = [
	{ href: "/collections/summer-vibes", label: "Summer vibes", match: true },
	{ href: "/collections/new-arrivals", label: "New arrivals", match: true },
	{ href: "/collections/elegant-extras", label: "Elegant extras", match: true },
];

export async function Collections() {
	return (
		<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
			<ul className="flex h-16 max-w-full flex-1 justify-center space-x-8 whitespace-nowrap p-5 lg:px-8">
				{collectionLinks.map((link) => (
					<li key={link.label}>
						<ActiveLink
							href={link.href}
							activeClassName="text-pink-400 underline"
							match={link.match}
						>
							{link.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</div>
	);
}
