import './App.css';
import FooterComponent from './component/Footer/FooterComponent';
import HeaderComponent from './component/Header/HeaderComponent';
import HomeComponent from './component/Home/HomeComponent';

function App() {
  return (
    <div className="App mx-auto">
      <div className='visible lg:invisible md:p-0 pt-4 pl-4'>
        <HeaderComponent></HeaderComponent>
      </div>
      <HomeComponent></HomeComponent>
      <div className='block lg:hidden md:p-0 pt-4 ml-12'>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}

export default App;
