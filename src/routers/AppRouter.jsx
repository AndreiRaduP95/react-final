import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import Contact  from '../components/pages/Contact';
import ShoppingCartPage from '../components/pages/ShoppingCartPage';
import ProductPage from '../components/pages/ProductPage';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ShoppingCartPage' element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
