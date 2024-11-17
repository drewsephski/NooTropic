export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'memory' | 'focus' | 'energy' | 'mood';
  benefits: string[];
  image: string;
  stock: number;
  rating: number;
  ingredients: string[];
  dosage: string;
}