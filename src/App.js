import { useContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import {ProductContext} from './components/store/ContextApi'
import Header from "./components/Header";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Store from './components/pages/Store';

function App() {
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ];


    const {addProductToCart} = useContext(ProductContext);
    const [count,setcount] = useState(0)

    const addtocart =(product)=>{

      const newProduct = {id:product.title,...product}
        setcount(count+1);
    
        addProductToCart(newProduct);
    }

  return (
    <BrowserRouter>
    <div className="w-11/12 mx-auto">
    <Header count={count} />
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/store" element={<Store/>} />
      </Routes>

    {/* <Cart/> */}
  {/* {productsArr.map(pro=>(
    <div>
      <div>{pro.title}</div>    
      <img src={pro.imageUrl} />
      <div>{pro.price}</div>
      <button onClick={()=>addtocart(pro)}>Cart</button>
    </div>
  ))}    */}
    </div>
    </BrowserRouter>
  );
}

export default App;
