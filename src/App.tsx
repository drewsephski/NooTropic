import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navbar } from './components/layout/navbar';
import { Hero } from './components/home/hero';
import { ShopPage } from './pages/shop';
import { ProductPage } from './pages/product/[id]';
import { CartDrawer } from './components/shop/cart/cart-drawer';
import { Cart } from './components/shop/cart/cart';
import { CartItem } from './components/shop/cart/cart-item';
import { Button } from './components/ui/button';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <CartDrawer />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
