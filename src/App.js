import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useStateValue } from "./Redux/StateProvider";


function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
