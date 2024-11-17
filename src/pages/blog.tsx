import { useAppSelector } from '@/hooks/store';
import { ProductFilters } from '@/components/shop/product-filters';
import { ProductGrid } from '@/components/shop/product-grid';
import { SearchBar } from '@/components/shop/search/search-bar';
import { PriceRange } from '@/components/shop/filters/price-range';

export function ShopPage() {
  const { items, searchQuery, priceRange, selectedCategory } = useAppSelector(
    (state) => state.products
  );

  const filteredProducts = items
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .filter(
      (product) =>
        !selectedCategory || product.category === selectedCategory
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchBar />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
          <ProductFilters />
          <PriceRange />
        </aside>
        
        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Nootropic Products
          </h1>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}