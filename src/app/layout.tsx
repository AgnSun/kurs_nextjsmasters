import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
// import { Pagination } from "@/ui/organisms/Pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav>
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink href="/" activeClassName="text-pink-400 underline" match>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products" activeClassName="text-pink-400 underline" match>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-gray-500">2023</p>
				</footer>
			</body>
		</html>
	);
}
