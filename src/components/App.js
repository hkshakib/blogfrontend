import '../styles/App.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Navbar"><Navbar/></div>
      <div className='ContentWrapper'> <Main/> </div>
      <div className='Footer'><Footer/></div>


      {/* <Navbar/> */}
      {/* <Main/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
