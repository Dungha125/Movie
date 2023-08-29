import './App.css';
import Slidebar from './components/Slidebar';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        <Slidebar />
        <div className="nav">
          <Navbar />
        </div>
    </div>
  );
}

export default App;
