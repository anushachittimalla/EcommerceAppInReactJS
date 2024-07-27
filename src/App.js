import './App.css';
import TopSection from './TopSection';
import Productsdisplay from './Productsdisplay';
import { useCart } from './cart';


function App() {
  const {showCart, setShowCart} = useCart();
  return (
    <div>
     <TopSection />
     {!showCart && <Productsdisplay />}
    </div>
  );
}
export default App;
