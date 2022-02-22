import Header from './component/Header/Header';
import Tiranga from './image/tiranga-bg.jpg';
import './App.css';
const App=()=>{
  return(
    <div className="mainApp">
      <img src={Tiranga} className="main_img"></img>
      <div className="subApp">
        <Header />
      </div>
    </div>
  );
};

export default App;