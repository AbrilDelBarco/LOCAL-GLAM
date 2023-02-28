

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navglam from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

let main='soy el titulo de main'

function App() {

  return (
    <BrowserRouter>
      <Navglam />
       <Routes>
          <Route path='/' element ={ < ItemListContainer componente={Navglam}/>}/>
          <Route path='categoria/:Categoriaid' element ={<ItemListContainer/>}/>
          <Route path='detalle/:Productoid' element ={<ItemDetailContainer/>}/>
          <Route path='Cart' element = {<ItemCount/>}/>
          <Route path='*' element = {<Navigator to='/'/>}/>
       </Routes>

    
    </BrowserRouter>
    )
}

export default App
