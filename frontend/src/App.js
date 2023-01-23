import { Container } from 'reactstrap';
import './App.css';
import BlogComponent from './components/Blog/BlogComponent';
import HeaderComponent from './components/Header/HeaderComponent';

function App() {

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <section class="section">
        <BlogComponent></BlogComponent>
      </section>
    </div>
  );
}

export default App;
