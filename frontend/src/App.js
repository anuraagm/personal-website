import './App.css';
import HeaderComponent from './component/Header/HeaderComponent';
import HomeComponent from './component/Home/HomeComponent';

function App() {
  return (
    <div className="App mx-auto bg-gray-900 md:p-12">
      <div className='visible lg:invisible md:p-0 pt-4 pl-4'>
        <HeaderComponent></HeaderComponent>
      </div>
      <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
