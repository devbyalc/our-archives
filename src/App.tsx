import './App.scss';
import './variable.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <Container className="base" fluid>
        <Navbar />
        {/* <Parallax className="custom-class" y={[0, 20]} tagOuter="figure"> */}
						<Header/>
				{/* </Parallax> */}
        {/* <div className="content">
          <div className="content-images">
            <div>
              <h4>Switzerland</h4>
              <h3>Mountains of tibidabo</h3>
            </div>
            <div>
              <h4>Switzerland</h4>
              <h3>Mountains of tibidabo</h3>
            </div>
          </div>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
            consequuntur a nisi, illo quia cupiditate fuga et eos minima
            voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
            quae.
          </p>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
            consequuntur a nisi, illo quia cupiditate fuga et eos minima
            voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
            quae.
          </p>
        </div> */}
    </Container>
  );
}

export default App;
