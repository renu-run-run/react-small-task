
import Lenis from 'lenis';
import './App.css';
import Counter from './Components/Counter';
import FramerMotion from './Components/FramerMotion';
import Pagination from './Components/Pagination';
import Todo from './Components/Todo';
import ParallaxSection from './Components/ParallaxSection';
import Gallery from './Components/Gallary';
import HeroCarousel from './Components/HeroCarousel';
import GalleryScene from './Components/GalleryScene';
import images from './asset/image/moon3.jpg';
import budhpng from './asset/image/budhpng.png';

// function Box() {
//   const meshRef = useRef();
//   const texture = useLoader(THREE.TextureLoader, images);
//   useFrame(() => {
//     meshRef.current.rotation.x += 0.01;
//     meshRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={meshRef} position={[0, 0, 0]}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }




function App() {
 return(
   <div>
    <div style={{ width: '100vw', height: '100vh', position: 'relative', fontFamily: "'Monsieur La Doulaise', cursive" }}>
  <img
    src={budhpng}
    alt="Centered"
    style={{
      display: "block",
      margin: "auto",
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "80%",
      height: "auto"
    }}
  />
  <p
    style={{
      position: "absolute",
      top: "65%",
      left: "50%",
      transform: "translateX(-50%)",
      color: "#333",
      fontSize: "2rem",
      textAlign: "center",
    }}
  >
    “Art enables us to find ourselves and lose ourselves at the same time.”
  </p>
</div>

     
      <HeroCarousel/>
       
      <Gallery/>
      <ParallaxSection />
      
      <div style={{ height: '100vh', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>More Content Below</h2>
      </div>
    </div>
 )
}

export default App;
