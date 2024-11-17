import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setPriceRange } from '@/store/features/products/productsSlice';
import { formatPrice } from '@/lib/utils';

export function PriceRange() {
  const dispatch = useAppDispatch();
  const { priceRange } = useAppSelector((state) => state.products);

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Price Range</h3>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">{formatPrice(priceRange[0])}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => dispatch(setPriceRange([priceRange[0], Number(e.target.value)]))}
          className="flex-1"
        />
        <span className="text-sm text-gray-500">{formatPrice(priceRange[1])}</span>
      </div>
    </div>
  );
}