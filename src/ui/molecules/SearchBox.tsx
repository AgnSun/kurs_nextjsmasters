"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox() {
	const searchParams = useSearchParams();
	const router = useRouter();

	// function handleSearch(term: string) {
	// 	const params = new URLSearchParams(searchParams);
	// 	if (term) {
	// 		params.set("query", term);
	// 	} else {
	// 		params.delete("query");
	// 	}
	// 	router.push(`search?${params.toString()}` as Route);
	// }

	const handleSearch = useDebouncedCallback((term: string) => {
		console.log(`Searching... ${term}`);

		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		router.push(`search?${params.toString()}` as Route);
	}, 500);

	function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			if (!(event.target as HTMLInputElement).value.trim()) {
				event.preventDefault();
			}
		}
	}

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
				defaultValue={searchParams.get("query")?.toString()}
			/>
		</form>
	);
}
