import "./App.css";
import Chats from "./components/chats/Chats";
import LostDeals from "./components/lost-deals/LostDeals";
import NewDeals from "./components/new-deals/NewDeals";
import QuaterGoal from "./components/quater-goal/QuaterGoal";
import Revenues from "./components/revenues/Revenues";
import Sidebar from "./components/sidebar/Sidebar";
import TopStates from "./components/top-states/TopStates";

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
        <div className="row">
          <Chats />
          <TopStates />
          <NewDeals />
        </div>
      </div>
    </div>
  );
}

export default App;
