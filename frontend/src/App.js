import './App.css';
import Revenues from './components/revenues/Revenues';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="body">
        <div className="row">
          <Revenues />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
