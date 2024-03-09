"use client";

import type { Route } from "next";
import Link from "next/link";
import clsx, { type ClassValue } from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({
	href,
	children,
	activeClassName,
	match,
	prefetch,
}: {
	href: string;
	children: ReactNode;
	activeClassName: ClassValue;
	match: boolean;
	prefetch?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = match ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href as Route}
			className={clsx("text-blue-400 hover:text-blue-600", isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
			prefetch={prefetch}
		>
			{children}
		</Link>
	);
};
