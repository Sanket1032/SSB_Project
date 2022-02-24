import Header from './component/Header/Header';
import Tiranga from './image/tiranga-bg.jpg';
import Landing from './component/Landing/Landing';
import Footer from './component/Footer/Footer';
import './App.css';
const App = () => {
  return (
    <div className="mainApp">
      <img src={Tiranga} className="main_img"></img>
      <div className="subApp">
        <Header />
        <Landing />
        <Footer />
      </div>
    </div>
  );
};

export default App;

// Arial Black
// Arimo