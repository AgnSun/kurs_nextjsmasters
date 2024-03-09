import React from "react";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const navLinks = [
	{ href: "/", label: "Home", match: true },
	{ href: "/products", label: "All", match: false },
	{ href: "/categories", label: "Categories", match: false },
	{ href: "/categories/t-shirts", label: "T-shirts", match: true },
	{ href: "/categories/hoodies", label: "Hoodies", match: true },
	{ href: "/categories/accessories", label: "Accessories", match: true },
	{ href: "/collections", label: "Collections", match: false },
];

export async function NavBar() {
	return (
		<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
			{/* <div className="hidden flex-shrink-0 items-center lg:flex"></div> */}
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<ul className="flex h-16 max-w-full flex-1 justify-center space-x-8 whitespace-nowrap p-5 lg:px-8">
					{navLinks.map((link) => (
						<li key={link.label}>
							<ActiveLink
								href={link.href}
								activeClassName="text-pink-400 underline border-b border-blue-500"
								match={link.match}
							>
								{link.label}
							</ActiveLink>
						</li>
					))}
				</ul>
				<div className="flex flex-1 flex-col gap-x-2 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<ShoppingCart />
					<span className="font-bold text-pink-400">0</span>
				</div>
			</div>
		</nav>
	);
}
