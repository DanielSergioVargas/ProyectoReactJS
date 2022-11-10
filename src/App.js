import './App.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import NavbarBootstrap from './components/Navbar';


function App() {
  return (

    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a Tienda Online"}/>
    </div>
  );
}

export default App;
