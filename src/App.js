import { useContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import { ProductContext } from './components/store/ContextApi'
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Store from './components/pages/Store';
import Contact from "./components/pages/Contact";
import ProductDetail from "./components/pages/ProductDetail";
import Product from "./components/Product";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import ChangePassword from "./components/pages/ChangePassword";
import { AuthContext } from "./components/store/AuthContext";
import Profile from "./components/pages/Profile";
import Logout from "./components/pages/Logout";
import ProtectedRoute from "./components/pages/ProtectedRoute";

//// image import
import shirt1 from "./asset/formalshirt/formal1.jpeg";
import shirt2 from "./asset/formalshirt/formal2.jpeg";
import shirt3 from "./asset/formalshirt/formal3.jpg";
import shirt4 from "./asset/formalshirt/formal4.jpg";

function App() {
  const shirtArr = [

    {

      title: 'Blue Shirt',

      price: 100,

      imageUrl: shirt1,

    },

    {

      title: 'pink Shirt',

      price: 500,

      imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20240411/cHCa/6617bb4e05ac7d77bb031e95/-473Wx593H-467162071-black-MODEL.jpg',

    },

    {

      title: 'Yellow shirt',

      price: 70,

      imageUrl: shirt2,

    },

    {

      title: 'Blue shirt',

      price: 300,

      imageUrl: shirt3,

    }

  ];


  const { addToCart } = useContext(ProductContext);
  // console.log(addToCart)
  const [count, setcount] = useState(0)
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn)





  return (
    <div className=" max-h-full flex flex-col justify-between bg-gradient-to-r  from-green-100 to-green-300  ">
      <BrowserRouter>
       
          <Header count={count} />
          <div className="flex-grow" >
          <Routes>
       

            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/login" />} />
             
         
            <Route  path="/login" element={<Login />} />
            {authCtx.isLoggedIn && (
              <>
              <Route path="/home" element={<ProtectedRoute><Home shirtArr ={shirtArr} /></ProtectedRoute>} />

              <Route path="/about" element={ <ProtectedRoute><About /></ProtectedRoute>} />
              <Route path="/contact" element={ <ProtectedRoute><Contact /></ProtectedRoute>} />
                <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
                <Route path="/product" element={ <ProtectedRoute><Product /></ProtectedRoute>} exact />
                <Route path="/logout" element={ <ProtectedRoute><Logout /></ProtectedRoute>} />
                <Route path="/profile" element={ <ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/changePassword" element={ <ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                <Route path="/product/:productId" element={ <ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                <Route path="/cart" element={ <ProtectedRoute><Cart /></ProtectedRoute>} />
              </>
            )}
          </Routes>
           </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
