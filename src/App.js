import './App.css';
import data from './db';
import Listing from './components/Listing.tsx'
function App() {
  return (
    <div className="item-list">
      <Listing 
      items = {data}/>
    </div>

  );
}

export default App;
