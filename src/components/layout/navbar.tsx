import { Link } from 'react-router-dom';
import { Brain, ShoppingCart, User } from 'lucide-react';
import { Button } from '../ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">NooTropic</span>
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
            <Link to="/progress" className="text-gray-600 hover:text-gray-900">Progress</Link>
            <Link to="/learn" className="text-gray-600 hover:text-gray-900">Learn</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}