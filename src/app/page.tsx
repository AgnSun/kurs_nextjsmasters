import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export default function HomePage() {
	return (
		<div data-testid="related-products">
			<SuggestedProductsList />
		</div>
	);
}
