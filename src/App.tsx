import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home } from './pages';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart/Cart'));
const User = lazy(() => import(/* webpackChunkName: "User" */ './pages/User/User'));
const Wishlist = lazy(() => import(/* webpackChunkName: "Wishlist" */ './pages/Wishlist/Wishlist'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='user'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route
          path='wishlist'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Wishlist />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
