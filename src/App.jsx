

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navglam from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import CartContainer from './components/CartContainer/CartContainer';
import { CartContextProvider } from './context/CartContext';

let main='soy el titulo de main'

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navglam />
       <Routes>
          <Route path='/' element ={ < ItemListContainer componente={Navglam}/>}/>
          <Route path='categoria/:Categoriaid' element ={<ItemListContainer/>}/>
          <Route path='detalle/:Productoid' element ={<ItemDetailContainer/>}/>
          <Route path='Cart' element = {<CartContainer/>}/>
          <Route path='*' element = {<Navigator to='/'/>}/>
       </Routes>

       </CartContextProvider>
    </BrowserRouter>
    )
}

export default App
