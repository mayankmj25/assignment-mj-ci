import './App.css';
import LostDeals from './components/lost-deals/LostDeals';
import QuaterGoal from './components/quater-goal/QuaterGoal';
import Revenues from './components/revenues/Revenues';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="body">
        <div className="row">
          <Revenues />
          <LostDeals />
          <QuaterGoal />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
