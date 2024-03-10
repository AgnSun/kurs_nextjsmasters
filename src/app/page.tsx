// import { Collections } from "@/ui/organisms/Collections";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export default function HomePage() {
	return (
		<>
			{/* <Collections /> */}
			<div data-testid="related-products">
				<SuggestedProductsList />
			</div>
		</>
	);
}
