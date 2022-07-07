import logo from './logo.svg';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getDataProduct } from './Store/Action';
import dataProduct from './Data/productList'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataProduct(dataProduct))
  },[])

  return (
    <div className="App">
      <ShoppingCart />
    </div>
  );
}

export default App;
