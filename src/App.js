
import './App.css';
import './index.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer.js';

function App() {
 
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting='Bienvenida/o'></ItemListContainer>
    </div>
  
  );
}

export default App;
