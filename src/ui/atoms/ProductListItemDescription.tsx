import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<p className="text-lg font-medium text-gray-900">
						<span className="sr-only">Nazwa: </span>
						{name}
					</p>
				</div>
				<p className="text-lg font-bold  text-gray-900">
					<span className="sr-only">Cena: </span>
					{formatMoney(price / 100)}
				</p>
			</div>
			<div>
				{categories[0] && (
					<p className="text-lg font-medium text-gray-900">
						<span className="sr-only">Kategoria: </span>
						{categories[0].name}
					</p>
				)}
			</div>
		</>
	);
};
