import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  const categories = ['memory', 'focus', 'energy', 'mood'];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
}