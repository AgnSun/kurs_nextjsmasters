"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeItem } from "@/api/actions";

export function RemoveButton({ id, productId }: { id: string; productId: string }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(id, productId);
					router.refresh();
				})
			}
		>
			Remove
		</button>
	);
}
