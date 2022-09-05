import './App.css';
import Products from './Products';
const Product = [
  {
    id: 1,
    title: "Audi",
    description: "Car for life ",
    sale: 20,
    price: 1002,
    img: "https://a.d-cd.net/93fe2du-960.jpg"
  },
  {
    id: 2,
    title: "Audi a4",
    description: "Car for life ",
    sale: 10,
    price: 4002,
    img: "https://avcdn.av.by/advertpreview/0000/6666/3885.jpg"
  },
  {
    id: 3,
    title: "Audi a6",
    description: "Car for life",
    sale: 5,
    price: 5002,
    img: "https://a.d-cd.net/b1d5a5u-960.jpg"
  }

]
function App() {
  return (
    <div>
      <Products product={Product} />
    </div>
  );
}

export default App;
