"use client";
import { type Route } from "next";
import React from "react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox() {
	const router = useRouter();

	const handleSearch = useDebouncedCallback((term: string) => {
		console.log(`Searching... ${term}`);
		let queryString = "";
		if (term) {
			queryString = `${encodeURIComponent(term)}`;
		}
		const newRoute = term ? `search?query=${queryString}` : "/";
		router.push(newRoute as Route);
	}, 500);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSearch((event.target as HTMLInputElement).value);
			if (!(event.target as HTMLInputElement).value.trim()) {
				event.preventDefault();
			}
		}
	};

	return (
		<form>
			<input
				className="w-full rounded-md border-0 bg-slate-50 py-2 pl-4 pr-4 text-sm text-slate-800 placeholder:text-slate-400"
				placeholder="Search"
				type="search"
				role="searchbox"
				min={2}
				name="search"
				onChange={(e) => {
					e.target.value.length >= 2 && handleSearch(e.target.value);
				}}
				onKeyPress={handleKeyPress}
			/>
		</form>
	);
}
