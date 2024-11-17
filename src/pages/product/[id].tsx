import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/store';
import { addToCart } from '@/store/features/cart/cartSlice';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { Star } from 'lucide-react';

export function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-600">{product.rating} rating</span>
            </div>
          </div>

          <p className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</p>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Benefits</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Recommended Dosage</h2>
            <p className="text-gray-600">{product.dosage}</p>
          </div>

          <Button
            className="w-full"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}