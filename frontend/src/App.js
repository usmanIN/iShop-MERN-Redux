
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './container/ProductList';
import Header from './container/Header';
import ProductDetail from './container/ProductDetail';
import ProductCateogry from './container/ProductCategory';
import CartList from './container/CartList';

function App() {
  return (
    <Provider store={store}>
      
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<ProductList />} />
            <Route exact path='/product/:productID' element={<ProductDetail />} />               
            <Route exact path='/product/category/:productCat' element={<ProductCateogry />} />
            <Route exact path='cart' element={<CartList />} />
          </Routes>          
        </BrowserRouter> 
    </Provider>
  );
}

export default App;
