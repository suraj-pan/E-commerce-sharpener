import "./App.css";
import Cart from "./components/Cart";

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

  return (
    <div className="w-11/12 mx-auto">
    <Cart/>
  {productsArr.map(pro=>(
    <div>
      <div>{pro.title}</div>    
      <img src={pro.imageUrl} />
      <div>{pro.price}</div>
    </div>
  ))}   
    </div>
  );
}

export default App;
