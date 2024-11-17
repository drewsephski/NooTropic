import { useAppDispatch } from '@/hooks/store';
import { setSearchQuery } from '@/store/features/products/productsSlice';
import { Search } from 'lucide-react';

export function SearchBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}