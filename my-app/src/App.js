import Header from './component/Header/Header';
import Tiranga from './image/tiranga-bg.jpg';
import Landing from './component/Landing/Landing';
import './App.css';
const App=()=>{
  return(
    <div className="mainApp">
      <img src={Tiranga} className="main_img"></img>
      <div className="subApp">
        <Header />
        <Landing />
      </div>
    </div>
  );
};

export default App;

// Arial Black
// Arimo