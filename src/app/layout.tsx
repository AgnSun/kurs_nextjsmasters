import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavBar } from "@/ui/organisms/NavBar";
// import { Collections } from "@/ui/organisms/Collections";
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
				<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
						<NavBar />
					</div>
				</header>
				{/* <div>
					<Collections />
				</div> */}
				<section className="mx-auto max-w-2xl px-10 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="mb-10 mt-2">
					<p className="text-center text-gray-500">© 2024</p>
				</footer>
			</body>
		</html>
	);
}
