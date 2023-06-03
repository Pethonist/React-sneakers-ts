import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home, Cart } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='user' />
        <Route path='wishlist' />
      </Route>
    </Routes>
  );
}

export default App;
