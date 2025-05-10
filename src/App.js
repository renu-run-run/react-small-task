
import Lenis from 'lenis';
import './App.css';
import Counter from './Components/Counter';
import FramerMotion from './Components/FramerMotion';
import Pagination from './Components/Pagination';
import Todo from './Components/Todo';
import ParallaxSection from './Components/ParallaxSection';

function App() {
 return(
   <div>
      <div style={{ height: '100vh', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Scroll Down</h2>
      </div>

      <ParallaxSection />

      <div style={{ height: '100vh', backgroundColor: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>More Content Below</h2>
      </div>
    </div>
 )
}

export default App;
