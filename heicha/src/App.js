import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './page/Home';
import ItemPage from './page/ItemPage';
import Cart from './page/Cart';
import CartProvider from './store/CartProvider';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/ItemPage' element={<ItemPage></ItemPage>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>
        </Routes>
        <Footer></Footer>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
